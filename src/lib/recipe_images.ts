export function getRecipeImage(recipeName: string, width = 400, height = 300): string {
  // Use first 2-3 words for better search results
  const searchTerm = recipeName.split(' ').slice(0, 3).join(' ');
  return `https://source.unsplash.com/${width}x${height}/?food,${encodeURIComponent(searchTerm)}`;
}

// For a consistent image per recipe (won't change on refresh)
export function getRecipeImageById(recipeId: number, recipeName: string, width = 400, height = 300): string {
  const searchTerm = recipeName.split(' ').slice(0, 2).join(' ');
  return `https://source.unsplash.com/${width}x${height}/?food,${encodeURIComponent(searchTerm)}&sig=${recipeId}`;
}