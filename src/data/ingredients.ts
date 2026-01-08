// Liste complète des ingrédients de cocktails en français
// Organisée par catégorie pour une meilleure navigation

export interface Ingredient {
  name: string;           // Nom en français
  nameEN: string;         // Nom anglais (pour l'API et les images)
  category: string;       // Catégorie
}

export const ingredientCategories = [
  'Spiritueux',
  'Liqueurs',
  'Vins & Vermouths',
  'Jus & Agrumes',
  'Sirops & Sucres',
  'Sodas & Mixers',
  'Produits laitiers',
  'Fruits',
  'Herbes & Épices',
  'Garnitures',
  'Autres',
];

export const ingredients: Ingredient[] = [
  // === SPIRITUEUX ===
  { name: 'Vodka', nameEN: 'Vodka', category: 'Spiritueux' },
  { name: 'Vodka citron', nameEN: 'Citrus Vodka', category: 'Spiritueux' },
  { name: 'Vodka vanille', nameEN: 'Vanilla Vodka', category: 'Spiritueux' },
  { name: 'Gin', nameEN: 'Gin', category: 'Spiritueux' },
  { name: 'Gin Sloe', nameEN: 'Sloe Gin', category: 'Spiritueux' },
  { name: 'Rhum blanc', nameEN: 'Light rum', category: 'Spiritueux' },
  { name: 'Rhum ambré', nameEN: 'Dark rum', category: 'Spiritueux' },
  { name: 'Rhum épicé', nameEN: 'Spiced rum', category: 'Spiritueux' },
  { name: 'Rhum coco', nameEN: 'Coconut rum', category: 'Spiritueux' },
  { name: 'Rhum 151', nameEN: '151 proof rum', category: 'Spiritueux' },
  { name: 'Whisky', nameEN: 'Whiskey', category: 'Spiritueux' },
  { name: 'Whisky irlandais', nameEN: 'Irish whiskey', category: 'Spiritueux' },
  { name: 'Scotch', nameEN: 'Scotch', category: 'Spiritueux' },
  { name: 'Bourbon', nameEN: 'Bourbon', category: 'Spiritueux' },
  { name: 'Whisky de seigle', nameEN: 'Rye whiskey', category: 'Spiritueux' },
  { name: 'Whisky canadien', nameEN: 'Blended whiskey', category: 'Spiritueux' },
  { name: 'Tequila', nameEN: 'Tequila', category: 'Spiritueux' },
  { name: 'Tequila Reposado', nameEN: 'Tequila Reposado', category: 'Spiritueux' },
  { name: 'Mezcal', nameEN: 'Mezcal', category: 'Spiritueux' },
  { name: 'Brandy', nameEN: 'Brandy', category: 'Spiritueux' },
  { name: 'Cognac', nameEN: 'Cognac', category: 'Spiritueux' },
  { name: 'Calvados', nameEN: 'Apple brandy', category: 'Spiritueux' },
  { name: 'Pisco', nameEN: 'Pisco', category: 'Spiritueux' },
  { name: 'Cachaça', nameEN: 'Cachaca', category: 'Spiritueux' },
  { name: 'Absinthe', nameEN: 'Absinthe', category: 'Spiritueux' },
  { name: 'Pastis', nameEN: 'Ricard', category: 'Spiritueux' },
  { name: 'Ouzo', nameEN: 'Ouzo', category: 'Spiritueux' },
  { name: 'Sambuca', nameEN: 'Sambuca', category: 'Spiritueux' },
  { name: 'Grappa', nameEN: 'Grappa', category: 'Spiritueux' },
  { name: 'Aquavit', nameEN: 'Aquavit', category: 'Spiritueux' },
  { name: 'Saké', nameEN: 'Sake', category: 'Spiritueux' },
  { name: 'Eau-de-vie', nameEN: 'Grain alcohol', category: 'Spiritueux' },

  // === LIQUEURS ===
  { name: 'Triple sec', nameEN: 'Triple sec', category: 'Liqueurs' },
  { name: 'Cointreau', nameEN: 'Cointreau', category: 'Liqueurs' },
  { name: 'Grand Marnier', nameEN: 'Grand Marnier', category: 'Liqueurs' },
  { name: 'Curaçao bleu', nameEN: 'Blue Curacao', category: 'Liqueurs' },
  { name: 'Curaçao orange', nameEN: 'Orange Curacao', category: 'Liqueurs' },
  { name: 'Kahlúa', nameEN: 'Kahlua', category: 'Liqueurs' },
  { name: 'Liqueur de café', nameEN: 'Coffee liqueur', category: 'Liqueurs' },
  { name: 'Tia Maria', nameEN: 'Tia maria', category: 'Liqueurs' },
  { name: 'Baileys', nameEN: 'Baileys irish cream', category: 'Liqueurs' },
  { name: 'Amaretto', nameEN: 'Amaretto', category: 'Liqueurs' },
  { name: 'Frangelico', nameEN: 'Frangelico', category: 'Liqueurs' },
  { name: 'Campari', nameEN: 'Campari', category: 'Liqueurs' },
  { name: 'Aperol', nameEN: 'Aperol', category: 'Liqueurs' },
  { name: 'Fernet Branca', nameEN: 'Fernet-branca', category: 'Liqueurs' },
  { name: 'Chartreuse verte', nameEN: 'Green Chartreuse', category: 'Liqueurs' },
  { name: 'Chartreuse jaune', nameEN: 'Yellow Chartreuse', category: 'Liqueurs' },
  { name: 'Bénédictine', nameEN: 'Benedictine', category: 'Liqueurs' },
  { name: 'Drambuie', nameEN: 'Drambuie', category: 'Liqueurs' },
  { name: 'Galliano', nameEN: 'Galliano', category: 'Liqueurs' },
  { name: 'Limoncello', nameEN: 'Limoncello', category: 'Liqueurs' },
  { name: 'Maraschino', nameEN: 'Maraschino liqueur', category: 'Liqueurs' },
  { name: 'Midori', nameEN: 'Midori melon liqueur', category: 'Liqueurs' },
  { name: 'Chambord', nameEN: 'Chambord raspberry liqueur', category: 'Liqueurs' },
  { name: 'Crème de cassis', nameEN: 'Creme de Cassis', category: 'Liqueurs' },
  { name: 'Crème de cacao', nameEN: 'Creme de Cacao', category: 'Liqueurs' },
  { name: 'Crème de menthe', nameEN: 'Creme de Menthe', category: 'Liqueurs' },
  { name: 'Crème de mûre', nameEN: 'Blackberry brandy', category: 'Liqueurs' },
  { name: 'Crème de banane', nameEN: 'Creme de Banane', category: 'Liqueurs' },
  { name: 'Crème de violette', nameEN: 'Creme de Violette', category: 'Liqueurs' },
  { name: 'Liqueur de pêche', nameEN: 'Peach schnapps', category: 'Liqueurs' },
  { name: 'Liqueur de fraise', nameEN: 'Strawberry schnapps', category: 'Liqueurs' },
  { name: 'Liqueur de sureau', nameEN: 'Elderflower cordial', category: 'Liqueurs' },
  { name: 'St-Germain', nameEN: 'St. Germain', category: 'Liqueurs' },
  { name: 'Southern Comfort', nameEN: 'Southern Comfort', category: 'Liqueurs' },
  { name: 'Jägermeister', nameEN: 'Jagermeister', category: 'Liqueurs' },
  { name: 'Falernum', nameEN: 'Falernum', category: 'Liqueurs' },
  { name: 'Allspice Dram', nameEN: 'Allspice Dram', category: 'Liqueurs' },
  { name: 'Pimm\'s', nameEN: 'Pimms', category: 'Liqueurs' },

  // === VINS & VERMOUTHS ===
  { name: 'Vermouth rouge', nameEN: 'Sweet Vermouth', category: 'Vins & Vermouths' },
  { name: 'Vermouth sec', nameEN: 'Dry Vermouth', category: 'Vins & Vermouths' },
  { name: 'Lillet Blanc', nameEN: 'Lillet Blanc', category: 'Vins & Vermouths' },
  { name: 'Dubonnet', nameEN: 'Dubonnet Rouge', category: 'Vins & Vermouths' },
  { name: 'Champagne', nameEN: 'Champagne', category: 'Vins & Vermouths' },
  { name: 'Prosecco', nameEN: 'Prosecco', category: 'Vins & Vermouths' },
  { name: 'Vin blanc', nameEN: 'White Wine', category: 'Vins & Vermouths' },
  { name: 'Vin rouge', nameEN: 'Red Wine', category: 'Vins & Vermouths' },
  { name: 'Xérès', nameEN: 'Sherry', category: 'Vins & Vermouths' },
  { name: 'Porto', nameEN: 'Port', category: 'Vins & Vermouths' },

  // === JUS & AGRUMES ===
  { name: 'Jus de citron', nameEN: 'Lemon juice', category: 'Jus & Agrumes' },
  { name: 'Jus de citron vert', nameEN: 'Lime juice', category: 'Jus & Agrumes' },
  { name: 'Jus d\'orange', nameEN: 'Orange juice', category: 'Jus & Agrumes' },
  { name: 'Jus de pamplemousse', nameEN: 'Grapefruit juice', category: 'Jus & Agrumes' },
  { name: 'Jus de canneberge', nameEN: 'Cranberry juice', category: 'Jus & Agrumes' },
  { name: 'Jus d\'ananas', nameEN: 'Pineapple juice', category: 'Jus & Agrumes' },
  { name: 'Jus de pomme', nameEN: 'Apple juice', category: 'Jus & Agrumes' },
  { name: 'Jus de tomate', nameEN: 'Tomato juice', category: 'Jus & Agrumes' },
  { name: 'Jus de passion', nameEN: 'Passion fruit juice', category: 'Jus & Agrumes' },
  { name: 'Jus de mangue', nameEN: 'Mango', category: 'Jus & Agrumes' },
  { name: 'Jus de grenade', nameEN: 'Pomegranate juice', category: 'Jus & Agrumes' },
  { name: 'Nectar de pêche', nameEN: 'Peach nectar', category: 'Jus & Agrumes' },
  { name: 'Nectar d\'abricot', nameEN: 'Apricot nectar', category: 'Jus & Agrumes' },
  { name: 'Citron', nameEN: 'Lemon', category: 'Jus & Agrumes' },
  { name: 'Citron vert', nameEN: 'Lime', category: 'Jus & Agrumes' },
  { name: 'Orange', nameEN: 'Orange', category: 'Jus & Agrumes' },
  { name: 'Pamplemousse', nameEN: 'Grapefruit', category: 'Jus & Agrumes' },

  // === SIROPS & SUCRES ===
  { name: 'Sirop simple', nameEN: 'Simple syrup', category: 'Sirops & Sucres' },
  { name: 'Sirop de sucre', nameEN: 'Sugar syrup', category: 'Sirops & Sucres' },
  { name: 'Sirop de canne', nameEN: 'Demerara Sugar', category: 'Sirops & Sucres' },
  { name: 'Sucre', nameEN: 'Sugar', category: 'Sirops & Sucres' },
  { name: 'Sucre brun', nameEN: 'Brown sugar', category: 'Sirops & Sucres' },
  { name: 'Sucre en poudre', nameEN: 'Powdered sugar', category: 'Sirops & Sucres' },
  { name: 'Sucre en morceaux', nameEN: 'Sugar', category: 'Sirops & Sucres' },
  { name: 'Miel', nameEN: 'Honey', category: 'Sirops & Sucres' },
  { name: 'Sirop d\'érable', nameEN: 'Maple syrup', category: 'Sirops & Sucres' },
  { name: 'Sirop d\'agave', nameEN: 'Agave syrup', category: 'Sirops & Sucres' },
  { name: 'Sirop d\'orgeat', nameEN: 'Orgeat syrup', category: 'Sirops & Sucres' },
  { name: 'Grenadine', nameEN: 'Grenadine', category: 'Sirops & Sucres' },
  { name: 'Sirop de fraise', nameEN: 'Strawberry syrup', category: 'Sirops & Sucres' },
  { name: 'Sirop de vanille', nameEN: 'Vanilla syrup', category: 'Sirops & Sucres' },

  // === SODAS & MIXERS ===
  { name: 'Eau gazeuse', nameEN: 'Soda water', category: 'Sodas & Mixers' },
  { name: 'Club soda', nameEN: 'Club soda', category: 'Sodas & Mixers' },
  { name: 'Tonic', nameEN: 'Tonic water', category: 'Sodas & Mixers' },
  { name: 'Bière de gingembre', nameEN: 'Ginger beer', category: 'Sodas & Mixers' },
  { name: 'Ginger ale', nameEN: 'Ginger ale', category: 'Sodas & Mixers' },
  { name: 'Cola', nameEN: 'Cola', category: 'Sodas & Mixers' },
  { name: 'Coca-Cola', nameEN: 'Coca-Cola', category: 'Sodas & Mixers' },
  { name: 'Limonade', nameEN: 'Lemonade', category: 'Sodas & Mixers' },
  { name: '7-Up', nameEN: '7-Up', category: 'Sodas & Mixers' },
  { name: 'Bière', nameEN: 'Beer', category: 'Sodas & Mixers' },
  { name: 'Cidre', nameEN: 'Cider', category: 'Sodas & Mixers' },

  // === PRODUITS LAITIERS ===
  { name: 'Crème fraîche', nameEN: 'Heavy cream', category: 'Produits laitiers' },
  { name: 'Crème légère', nameEN: 'Light cream', category: 'Produits laitiers' },
  { name: 'Crème fouettée', nameEN: 'Whipped Cream', category: 'Produits laitiers' },
  { name: 'Lait', nameEN: 'Milk', category: 'Produits laitiers' },
  { name: 'Lait de coco', nameEN: 'Coconut milk', category: 'Produits laitiers' },
  { name: 'Crème de coco', nameEN: 'Coconut cream', category: 'Produits laitiers' },
  { name: 'Blanc d\'œuf', nameEN: 'Egg white', category: 'Produits laitiers' },
  { name: 'Jaune d\'œuf', nameEN: 'Egg yolk', category: 'Produits laitiers' },
  { name: 'Œuf entier', nameEN: 'Egg', category: 'Produits laitiers' },
  { name: 'Glace vanille', nameEN: 'Vanilla Ice-Cream', category: 'Produits laitiers' },

  // === FRUITS ===
  { name: 'Fraises', nameEN: 'Strawberries', category: 'Fruits' },
  { name: 'Framboises', nameEN: 'Raspberry', category: 'Fruits' },
  { name: 'Mûres', nameEN: 'Blackberries', category: 'Fruits' },
  { name: 'Myrtilles', nameEN: 'Blueberries', category: 'Fruits' },
  { name: 'Banane', nameEN: 'Banana', category: 'Fruits' },
  { name: 'Ananas', nameEN: 'Pineapple', category: 'Fruits' },
  { name: 'Mangue', nameEN: 'Mango', category: 'Fruits' },
  { name: 'Fruit de la passion', nameEN: 'Passion fruit', category: 'Fruits' },
  { name: 'Pêche', nameEN: 'Peach', category: 'Fruits' },
  { name: 'Abricot', nameEN: 'Apricot', category: 'Fruits' },
  { name: 'Pomme', nameEN: 'Apple', category: 'Fruits' },
  { name: 'Poire', nameEN: 'Pear', category: 'Fruits' },
  { name: 'Melon', nameEN: 'Melon', category: 'Fruits' },
  { name: 'Pastèque', nameEN: 'Watermelon', category: 'Fruits' },
  { name: 'Noix de coco', nameEN: 'Coconut', category: 'Fruits' },
  { name: 'Cerises', nameEN: 'Cherry', category: 'Fruits' },
  { name: 'Raisin', nameEN: 'Grapes', category: 'Fruits' },
  { name: 'Kiwi', nameEN: 'Kiwi', category: 'Fruits' },
  { name: 'Concombre', nameEN: 'Cucumber', category: 'Fruits' },

  // === HERBES & ÉPICES ===
  { name: 'Menthe', nameEN: 'Mint', category: 'Herbes & Épices' },
  { name: 'Basilic', nameEN: 'Basil', category: 'Herbes & Épices' },
  { name: 'Gingembre', nameEN: 'Ginger', category: 'Herbes & Épices' },
  { name: 'Cannelle', nameEN: 'Cinnamon', category: 'Herbes & Épices' },
  { name: 'Noix de muscade', nameEN: 'Nutmeg', category: 'Herbes & Épices' },
  { name: 'Vanille', nameEN: 'Vanilla', category: 'Herbes & Épices' },
  { name: 'Extrait de vanille', nameEN: 'Vanilla extract', category: 'Herbes & Épices' },
  { name: 'Céleri', nameEN: 'Celery', category: 'Herbes & Épices' },
  { name: 'Sel de céleri', nameEN: 'Celery salt', category: 'Herbes & Épices' },

  // === GARNITURES ===
  { name: 'Olive', nameEN: 'Olive', category: 'Garnitures' },
  { name: 'Cerise marasquin', nameEN: 'Maraschino cherry', category: 'Garnitures' },
  { name: 'Zeste de citron', nameEN: 'Lemon peel', category: 'Garnitures' },
  { name: 'Zeste d\'orange', nameEN: 'Orange peel', category: 'Garnitures' },
  { name: 'Chocolat', nameEN: 'Chocolate', category: 'Garnitures' },

  // === AUTRES ===
  { name: 'Angostura bitters', nameEN: 'Angostura bitters', category: 'Autres' },
  { name: 'Orange bitters', nameEN: 'Orange bitters', category: 'Autres' },
  { name: 'Peychaud\'s bitters', nameEN: 'Peychauds bitters', category: 'Autres' },
  { name: 'Bitters aromatiques', nameEN: 'Bitters', category: 'Autres' },
  { name: 'Café', nameEN: 'Coffee', category: 'Autres' },
  { name: 'Espresso', nameEN: 'Espresso', category: 'Autres' },
  { name: 'Thé', nameEN: 'Tea', category: 'Autres' },
  { name: 'Thé vert', nameEN: 'Green Tea', category: 'Autres' },
  { name: 'Sauce Worcestershire', nameEN: 'Worcestershire sauce', category: 'Autres' },
  { name: 'Sauce Tabasco', nameEN: 'Tabasco sauce', category: 'Autres' },
  { name: 'Sauce soja', nameEN: 'Soy sauce', category: 'Autres' },
  { name: 'Raifort', nameEN: 'Horseradish', category: 'Autres' },
];

// Fonction pour obtenir l'URL de l'image d'un ingrédient
export const getIngredientImage = (nameEN: string, size: 'Small' | 'Medium' = 'Small'): string => {
  return `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(nameEN)}-${size}.png`;
};

// Fonction pour obtenir les ingrédients par catégorie
export const getIngredientsByCategory = (category: string): Ingredient[] => {
  return ingredients.filter(ing => ing.category === category);
};

// Fonction pour rechercher des ingrédients
export const searchIngredients = (query: string): Ingredient[] => {
  const lowerQuery = query.toLowerCase();
  return ingredients.filter(ing =>
    ing.name.toLowerCase().includes(lowerQuery) ||
    ing.nameEN.toLowerCase().includes(lowerQuery)
  );
};

// Export de tous les noms pour l'alphabet
export const getAllIngredientNames = (): string[] => {
  return ingredients.map(ing => ing.name).sort((a, b) => a.localeCompare(b, 'fr'));
};
