// Local recipe images from Kaggle dataset

const FALLBACK_IMAGE = '/recipe-images/placeholder.jpg';

/**
 * Get the local image URL for a recipe.
 * Images are stored in public/recipe-images/ during seeding.
 */
export function getRecipeImageUrl(imageName: string | null): string {
  if (!imageName) {
    return FALLBACK_IMAGE;
  }
  return `/recipe-images/${imageName}`;
}

/**
 * Get recipe image with fallback support.
 * Returns the local image path if available, otherwise a fallback.
 */
export function getRecipeImage(imageName: string | null): string {
  return getRecipeImageUrl(imageName);
}

// Legacy function for backwards compatibility
export async function fetchRecipeImage(): Promise<string> {
  return FALLBACK_IMAGE;
}

export function getRecipeImageById(): string {
  return FALLBACK_IMAGE;
}
