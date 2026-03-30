// prisma/seed.ts
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

// Path to new Kaggle CSV - Food Ingredients and Recipe Dataset with Image Name Mapping
const CSV_PATH = path.resolve(__dirname, '../../../kaggle/archive/Food Ingredients and Recipe Dataset with Image Name Mapping.csv');
const IMAGES_SOURCE = path.resolve(__dirname, '../../../kaggle/archive/Food Images/Food Images');
const IMAGES_DEST = path.resolve(__dirname, '../public/recipe-images');

// Copy images that match recipes being imported
function copyRecipeImages(imageNames: Set<string>) {
  if (!fs.existsSync(IMAGES_DEST)) {
    fs.mkdirSync(IMAGES_DEST, { recursive: true });
  }
  
  let copied = 0;
  for (const imageName of imageNames) {
    if (!imageName) continue;
    const sourcePath = path.join(IMAGES_SOURCE, imageName);
    const destPath = path.join(IMAGES_DEST, imageName);
    
    if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
      copied++;
    }
  }
  console.log(`Copied ${copied} images to public/recipe-images/`);
}

async function main() {
  console.log('Reading CSV from:', CSV_PATH);
  
  const content = fs.readFileSync(CSV_PATH, 'utf-8');
  
  // Use csv-parse for proper multiline CSV handling
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  });
  
  console.log(`Found ${records.length} recipes. Importing first 1000...`);
  
  const imageNames = new Set<string>();
  let imported = 0;
  
  for (let i = 0; i < Math.min(1000, records.length); i++) {
    const row = records[i];
    
    try {
      const title = row['Title']?.trim();
      if (!title) {
        continue;
      }
      
      // Image name in CSV is without extension, add .jpg
      let imageName = row['Image_Name']?.trim() || null;
      if (imageName && !imageName.endsWith('.jpg')) {
        imageName = `${imageName}.jpg`;
      }
      if (imageName) {
        imageNames.add(imageName);
      }
      
      await prisma.recipe.create({
        data: {
          title,
          ingredients: row['Ingredients'] || '[]',
          instructions: row['Instructions'] || '',
          imageName,
          cleanedIngredients: row['Cleaned_Ingredients']?.replace(/\r/g, '') || '[]',
        },
      });
      
      imported++;
      if (imported % 100 === 0) console.log(`Imported ${imported} recipes...`);
    } catch (e: any) {
      console.log(`Skipped row ${i}: ${e.message}`);
    }
  }
  
  // Copy associated images
  console.log('Copying recipe images...');
  copyRecipeImages(imageNames);
  
  const count = await prisma.recipe.count();
  console.log(`Done! Imported ${imported}. Total recipes in database: ${count}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });