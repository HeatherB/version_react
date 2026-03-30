// prisma/seed.ts
import 'dotenv/config';  // ADD THIS LINE AT THE TOP
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Path to your Kaggle CSV
const CSV_PATH = path.resolve(__dirname, '../../../kaggle/food-com-recipes-and-user-interactions/RAW_recipes.csv');

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

async function main() {
  console.log('Reading CSV from:', CSV_PATH);
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'NOT SET');
  
  const content = fs.readFileSync(CSV_PATH, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim());
  const headers = parseCSVLine(lines[0]);
  
  console.log('Headers:', headers);
  console.log(`Found ${lines.length - 1} recipes. Importing first 500...`);
  
  let imported = 0;
  for (let i = 1; i <= 500 && i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    
    try {
      const id = parseInt(values[1]);
      if (isNaN(id)) {
        console.log(`Row ${i}: Invalid ID`);
        continue;
      }
      
      await prisma.recipe.upsert({
        where: { id },
        update: {},
        create: {
          id,
          name: values[0]?.trim() || 'Unnamed',
          minutes: parseInt(values[2]) || 0,
          contributorId: parseInt(values[3]) || 0,
          submitted: new Date(values[4] || '2000-01-01'),
          tags: values[5] || '[]',
          nutrition: values[6] || '[]',
          nSteps: parseInt(values[7]) || 0,
          steps: values[8] || '[]',
          description: values[9] || null,
          ingredients: values[10] || '[]',
          nIngredients: parseInt(values[11]?.replace(/\r/g, '')) || 0,
        },
      });
      
      imported++;
      if (imported % 100 === 0) console.log(`Imported ${imported} recipes...`);
    } catch (e: any) {
      console.log(`Skipped row ${i}: ${e.message}`);  // Log actual error
    }
  }
  
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