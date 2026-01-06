// Service pour récupérer les cocktails depuis TheCocktailDB API
// API gratuite : https://www.thecocktaildb.com/api.php

const API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

export interface CocktailAPI {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsFR: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

export interface Cocktail {
  id: string;
  name: string;
  category: string;
  glass: string;
  instructions: string;
  instructionsFR: string | null;
  image: string;
  ingredients: { ingredient: string; measure: string }[];
  isAlcoholic: boolean;
  tags: string[];
}

// Transformer les données de l'API en format utilisable
export const transformCocktail = (drink: CocktailAPI): Cocktail => {
  const ingredients: { ingredient: string; measure: string }[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}` as keyof CocktailAPI] as string | null;
    const measure = drink[`strMeasure${i}` as keyof CocktailAPI] as string | null;

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || '',
      });
    }
  }

  return {
    id: drink.idDrink,
    name: drink.strDrink,
    category: drink.strCategory,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    instructionsFR: drink.strInstructionsFR,
    image: drink.strDrinkThumb,
    ingredients,
    isAlcoholic: drink.strAlcoholic === 'Alcoholic',
    tags: drink.strTags?.split(',').map(t => t.trim()) || [],
  };
};

// Rechercher un cocktail par nom
export const searchCocktails = async (query: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`${API_BASE}/search.php?s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (!data.drinks) return [];

    return data.drinks.map(transformCocktail);
  } catch (error) {
    console.error('Error searching cocktails:', error);
    return [];
  }
};

// Récupérer un cocktail par ID
export const getCocktailById = async (id: string): Promise<Cocktail | null> => {
  try {
    const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await response.json();

    if (!data.drinks || !data.drinks[0]) return null;

    return transformCocktail(data.drinks[0]);
  } catch (error) {
    console.error('Error fetching cocktail:', error);
    return null;
  }
};

// Récupérer un cocktail aléatoire
export const getRandomCocktail = async (): Promise<Cocktail | null> => {
  try {
    const response = await fetch(`${API_BASE}/random.php`);
    const data = await response.json();

    if (!data.drinks || !data.drinks[0]) return null;

    return transformCocktail(data.drinks[0]);
  } catch (error) {
    console.error('Error fetching random cocktail:', error);
    return null;
  }
};

// Récupérer les cocktails par première lettre
export const getCocktailsByLetter = async (letter: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`${API_BASE}/search.php?f=${letter}`);
    const data = await response.json();

    if (!data.drinks) return [];

    return data.drinks.map(transformCocktail);
  } catch (error) {
    console.error('Error fetching cocktails by letter:', error);
    return [];
  }
};

// Récupérer les cocktails par ingrédient
export const getCocktailsByIngredient = async (ingredient: string): Promise<Cocktail[]> => {
  try {
    // Cette API retourne moins de détails, donc on doit faire des appels supplémentaires
    const response = await fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(ingredient)}`);
    const data = await response.json();

    if (!data.drinks) return [];

    // Récupérer les détails complets pour chaque cocktail
    const cocktails = await Promise.all(
      data.drinks.slice(0, 20).map(async (drink: { idDrink: string }) => {
        return getCocktailById(drink.idDrink);
      })
    );

    return cocktails.filter((c): c is Cocktail => c !== null);
  } catch (error) {
    console.error('Error fetching cocktails by ingredient:', error);
    return [];
  }
};

// Récupérer tous les cocktails populaires (par lettres A-Z)
export const getPopularCocktails = async (): Promise<Cocktail[]> => {
  const popularNames = [
    'Old Fashioned', 'Margarita', 'Negroni', 'Mojito', 'Martini',
    'Manhattan', 'Daiquiri', 'Whiskey Sour', 'Cosmopolitan', 'Mai Tai',
    'Pina Colada', 'Moscow Mule', 'Bloody Mary', 'Caipirinha', 'Aperol Spritz',
    'Long Island', 'Gin Tonic', 'Espresso Martini', 'Paloma', 'Boulevardier'
  ];

  const results: Cocktail[] = [];

  for (const name of popularNames) {
    const cocktails = await searchCocktails(name);
    if (cocktails.length > 0) {
      results.push(cocktails[0]);
    }
  }

  return results;
};

// Récupérer la liste des catégories
export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE}/list.php?c=list`);
    const data = await response.json();

    if (!data.drinks) return [];

    return data.drinks.map((d: { strCategory: string }) => d.strCategory);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Récupérer la liste des ingrédients
export const getIngredients = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE}/list.php?i=list`);
    const data = await response.json();

    if (!data.drinks) return [];

    return data.drinks.map((d: { strIngredient1: string }) => d.strIngredient1);
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
};

// Récupérer la liste des verres
export const getGlasses = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_BASE}/list.php?g=list`);
    const data = await response.json();

    if (!data.drinks) return [];

    return data.drinks.map((d: { strGlass: string }) => d.strGlass);
  } catch (error) {
    console.error('Error fetching glasses:', error);
    return [];
  }
};

// Récupérer les cocktails par catégorie
export const getCocktailsByCategory = async (category: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`${API_BASE}/filter.php?c=${encodeURIComponent(category)}`);
    const data = await response.json();

    if (!data.drinks) return [];

    // Récupérer les détails complets pour les 20 premiers
    const cocktails = await Promise.all(
      data.drinks.slice(0, 20).map(async (drink: { idDrink: string }) => {
        return getCocktailById(drink.idDrink);
      })
    );

    return cocktails.filter((c): c is Cocktail => c !== null);
  } catch (error) {
    console.error('Error fetching cocktails by category:', error);
    return [];
  }
};

export default {
  searchCocktails,
  getCocktailById,
  getRandomCocktail,
  getCocktailsByLetter,
  getCocktailsByIngredient,
  getPopularCocktails,
  getCategories,
  getIngredients,
  getGlasses,
  getCocktailsByCategory,
};
