// Dataset Mr. Boston - 990 cocktails classiques
// Source: TidyTuesday via GitHub

export interface BostonCocktail {
  id: string;
  name: string;
  category: string;
  ingredients: { ingredient: string; measure: string }[];
}

export const bostonCocktails: BostonCocktail[] = [
  {
    id: "mb_1",
    name: "Gauguin",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Passion Fruit Syrup", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_2",
    name: "Fort Lauderdale",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Juice of Orange", measure: "1/4 oz" },
      { ingredient: "Juice of a Lime", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_3",
    name: "Apple Pie",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Apple schnapps", measure: "3 oz" },
      { ingredient: "Cinnamon schnapps", measure: "1 oz" }
    ]
  },
  {
    id: "mb_4",
    name: "Cuban Cocktail No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "2 oz" }
    ]
  },
  {
    id: "mb_5",
    name: "Cool Carlos",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Orange curacao", measure: "1 oz" },
      { ingredient: "Sour Mix", measure: "1 oz" }
    ]
  },
  {
    id: "mb_6",
    name: "John Collins",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Soda water", measure: "1 oz" },
      { ingredient: "Orange and lemon wheels, maraschino cherry", measure: "1 oz" }
    ]
  },
  {
    id: "mb_7",
    name: "Cherry Rum",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 1/2 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_8",
    name: "Casa Blanca",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Lime Juice", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 1/2 oz" },
      { ingredient: "Maraschino", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_9",
    name: "Caribbean Champagne",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Creme de banana", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_10",
    name: "Amber Amour",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Amaretto", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_11",
    name: "The Joe Lewis",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Fresh carrot juice", measure: "1 oz" },
      { ingredient: "Tawny port", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Agave nectar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_12",
    name: "Bacardi Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bacardi Rum", measure: "1 1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_13",
    name: "Apple Pie No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_14",
    name: "Yolanda",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_15",
    name: "Yellow Rattler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_16",
    name: "Why Not?",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_17",
    name: "Amaretto Stinger",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Amaretto", measure: "1 1/2 oz" },
      { ingredient: "White creme de menthe", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_18",
    name: "What The Hell",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_19",
    name: "Webster Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_20",
    name: "Union Jack Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sloe gin", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_21",
    name: "Jocose Julep",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 1/2 oz" },
      { ingredient: "Green creme de menthe", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh mint leaves", measure: "5 oz" }
    ]
  },
  {
    id: "mb_22",
    name: "Trinity Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_23",
    name: "Three Stripes Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_24",
    name: "Tanq-A-Rita",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tanqueray gin", measure: "1 1/2 oz" },
      { ingredient: "Margarita Mix", measure: "3 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_25",
    name: "Amaretto Sour",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Amaretto", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Orange half-wheel", measure: "1" }
    ]
  },
  {
    id: "mb_26",
    name: "Tailspin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Green Chartreuse", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_27",
    name: "Sweet Patootie Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_28",
    name: "Sunshine Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_29",
    name: "Spring Feeling Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Green Chartreuse", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_30",
    name: "Sphinx Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_31",
    name: "Jitterbug Sour",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 dash" }
    ]
  },
  {
    id: "mb_32",
    name: "Southern Gin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_33",
    name: "Society Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_34",
    name: "Snyder",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_35",
    name: "Smiler Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_36",
    name: "Smile Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_37",
    name: "Amaretto Rose",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Amaretto", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_38",
    name: "Sand-Martin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Green Chartreuse", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_39",
    name: "Irish Whiskey Highball",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Ginger ale or soda water", measure: "1 oz" },
      { ingredient: "Lemon twist (optional)", measure: "1 oz" }
    ]
  },
  {
    id: "mb_40",
    name: "Japanese",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_41",
    name: "Roselyn Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_42",
    name: "Resolute Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_43",
    name: "Racquet Club Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_44",
    name: "Amaretto And Cream",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Amaretto", measure: "1 1/2 oz" },
      { ingredient: "half-and-half", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_45",
    name: "Pollyanna Cocktai",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange", measure: "3 oz" },
      { ingredient: "Pineapple", measure: "3 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_46",
    name: "Plaza Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_47",
    name: "Irish Whiskey Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Green olive", measure: "1" }
    ]
  },
  {
    id: "mb_48",
    name: "Absinthe Special Cocktail",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Absinthe", measure: "1 1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_49",
    name: "Nineteenth Hole",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_50",
    name: "Montreal Club Bouncer",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_51",
    name: "Monte Carlo Imperial Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_52",
    name: "Irish Shillelagh",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh raspberries and strawberries, 2 peach slices, maraschino cherry", measure: "1" }
    ]
  },
  {
    id: "mb_53",
    name: "Melon Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" },
      { ingredient: "Maraschino", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_54",
    name: "Martini (Medium)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_55",
    name: "Martini (Dry) (5-to-1)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 2/3 oz" },
      { ingredient: "Dry Vermouth", measure: "1/3 oz" }
    ]
  },
  {
    id: "mb_56",
    name: "Mamie's Sister",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_57",
    name: "Irish Rickey",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Soda water", measure: "1 oz" },
      { ingredient: "Lime wedge", measure: "1 oz" }
    ]
  },
  {
    id: "mb_58",
    name: "Maiden's Prayer",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_59",
    name: "Lone Tree Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_60",
    name: "London Buck",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_61",
    name: "Leap Frog Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_62",
    name: "Incider Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Rye or bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Apple cider", measure: "4 oz" },
      { ingredient: "Apple slice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_63",
    name: "Kup's Indispensable Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Vermouth", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_64",
    name: "Knock-Out Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Creme de Menthe (White)", measure: "1 oz" }
    ]
  },
  {
    id: "mb_65",
    name: "K. G. B. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Kummel", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_66",
    name: "Imperial Fizz",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon or Rye Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Soda water", measure: "1 oz" }
    ]
  },
  {
    id: "mb_67",
    name: "Jeyplak Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Anisette", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_68",
    name: "H. P. W. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_69",
    name: "I.A.P.",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Tennessee whiskey", measure: "2 oz" },
      { ingredient: "Fernet-Branca", measure: "1/4 oz" },
      { ingredient: "Cola", measure: "3 oz" }
    ]
  },
  {
    id: "mb_70",
    name: "Hotel Plaza Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_71",
    name: "Hoffman House Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_72",
    name: "Hawaiin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_73",
    name: "White Russian",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Coffee liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_74",
    name: "Greyhound",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "5 oz" }
    ]
  },
  {
    id: "mb_75",
    name: "Green Devil",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Green creme de menthe", measure: "1 1/2 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_76",
    name: "Greenback",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Green creme de menthe", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_77",
    name: "Grapefruit Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grapefruit Juice", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1 oz" }
    ]
  },
  {
    id: "mb_78",
    name: "Hotel D'alsace",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Fresh rosemary sprig", measure: "1 oz" },
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_79",
    name: "Jamaica Granito",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Lemon or Orange Sherbet", measure: "1 oz" }
    ]
  },
  {
    id: "mb_80",
    name: "Gin Sling",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Water", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_81",
    name: "Gin Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Milk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_82",
    name: "Horse's Neck (With A Kick)",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Wide spiral of lemon zest", measure: "1 oz" },
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Ginger ale", measure: "1 oz" }
    ]
  },
  {
    id: "mb_83",
    name: "Gin and It",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" }
    ]
  },
  {
    id: "mb_84",
    name: "Gin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_85",
    name: "West Side",
    category: "Vodka",
    ingredients: [
      { ingredient: "lemon-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh mint leaves", measure: "6" }
    ]
  },
  {
    id: "mb_86",
    name: "Gimlet",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_87",
    name: "Free Silver",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dark rum", measure: "1/2 oz" },
      { ingredient: "Milk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_88",
    name: "Frankenjack Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Gin & ginger ale", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_89",
    name: "Fog Horn",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Gin & ginger ale", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_90",
    name: "Flying Dutchman",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_91",
    name: "Hoot Mon Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Benedictine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_92",
    name: "Fifty-Fifty Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_93",
    name: "Favorite Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apricot Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_94",
    name: "Farmer's Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_95",
    name: "Warsaw Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Blackberry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_96",
    name: "Emerald Isle Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Green creme de menthe", measure: "1 oz" },
      { ingredient: "Bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_97",
    name: "Du Barry Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_98",
    name: "Dry Martini (5-to-1)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 2/3 oz" },
      { ingredient: "Dry Vermouth", measure: "1/3 oz" }
    ]
  },
  {
    id: "mb_99",
    name: "Dixie Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/4 oz" },
      { ingredient: "Anisette", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_100",
    name: "Delmonico No. 2",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Bitters", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_101",
    name: "Hole-In-One",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_102",
    name: "Vodka Stinger",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "White creme de menthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_103",
    name: "Caruso",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Green creme de menthe", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_104",
    name: "Bulldog Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_105",
    name: "Brown Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_106",
    name: "Bronx Terrace Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_107",
    name: "Bronx Cocktail (Dry)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Juice of Orange", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_108",
    name: "Hill Dog",
    category: "Whiskies",
    ingredients: [
      { ingredient: "White whiskey", measure: "1 1/2 oz" },
      { ingredient: "Grand Marnier", measure: "1/2 oz" },
      { ingredient: "Dry Sherry", measure: "1/2 oz" },
      { ingredient: "Lavender Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_109",
    name: "Blue Devil Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Juice of Lemon or Lime", measure: "1/2 or 1" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Blue curacao", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_110",
    name: "Blue Canary",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "3 oz" },
      { ingredient: "Blue curacao", measure: "1 oz" }
    ]
  },
  {
    id: "mb_111",
    name: "Blue Bird",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_112",
    name: "Bloodhound Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_113",
    name: "Billy Taylor",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_114",
    name: "Bijou Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Green Chartreuse", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_115",
    name: "Bermuda Rose",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/4 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_116",
    name: "Vodka Sour",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_117",
    name: "Apricot Anisette Collins",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_118",
    name: "Alexander's Sister Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry gin", measure: "1 oz" },
      { ingredient: "Green creme de menthe", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_119",
    name: "Highland Cooler",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_120",
    name: "Alexander Cocktail No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Creme de Cacao (White)", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_121",
    name: "Adam and Eve",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Forbidden Fruit", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_122",
    name: "Vodka Sling",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_123",
    name: "Jack Rose Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Applejack", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_124",
    name: "Tempter Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_125",
    name: "Special Rough Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_126",
    name: "Vodka Grasshopper",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Green creme de menthe", measure: "3/4 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "half-and-half", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_127",
    name: "Singapore Sling",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_128",
    name: "Saratoga Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_129",
    name: "High Cotton",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Pimm's No. 1 Cup", measure: "1/2 oz" },
      { ingredient: "Dubonnet Rouge", measure: "1/2 oz" },
      { ingredient: "Peach bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_130",
    name: "Polonaise",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Blackberry-flavored brandy", measure: "1 oz" },
      { ingredient: "Dry Sherry", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_131",
    name: "Vodka Gimlet",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_132",
    name: "Merry Widow Cocktail No. 2",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Maraschino", measure: "1 1/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 1/4 oz" }
    ]
  },
  {
    id: "mb_133",
    name: "Lugger",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_134",
    name: "Jamaica Hop",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Coffee-flavored brandy", measure: "1 oz" },
      { ingredient: "Creme de Cacao (White)", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_135",
    name: "Hebrides",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Single-malt Scotch whisky", measure: "1 1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Apple juice", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_136",
    name: "Hennessy Martini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hennessy V.S Cognac", measure: "2 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_137",
    name: "Vodka Daisy",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_138",
    name: "Heavenly Dram",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Single-malt Scotch whisky", measure: "2 oz" },
      { ingredient: "Pedro Ximenez sherry", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_139",
    name: "Classic Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Curacao", measure: "1 1/2 oz" },
      { ingredient: "Maraschino", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_140",
    name: "Cherry Sling",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "cherry-flavored brandy", measure: "2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_141",
    name: "Cherry Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_142",
    name: "Vodka Cooler",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_143",
    name: "Carrol Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_144",
    name: "Button Hook Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Creme de Menthe (White)", measure: "1/2 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_145",
    name: "Bull's Eye",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Hard cider", measure: "2 oz" }
    ]
  },
  {
    id: "mb_146",
    name: "Brantini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" }
    ]
  },
  {
    id: "mb_147",
    name: "Heather's Kiss",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "2 1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Agave nectar", measure: "1/4 oz" },
      { ingredient: "Absinthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_148",
    name: "Brandy Squirt",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_149",
    name: "Brandy and Soda",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_150",
    name: "Brandy Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Milk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_151",
    name: "Vodka Collins",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_152",
    name: "Brandy Crusta Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_153",
    name: "Heather Blush",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 oz" },
      { ingredient: "Strawberry liqueur", measure: "1 oz" },
      { ingredient: "Chilled sparkling wine", measure: "3 oz" }
    ]
  },
  {
    id: "mb_154",
    name: "Jack Maples",
    category: "Brandy",
    ingredients: [
      { ingredient: "Applejack", measure: "2 oz" },
      { ingredient: "maple syrup (grade B or medium-amber)", measure: "1 oz" },
      { ingredient: "Aromatic bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_155",
    name: "Brandy Alexander",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Creme de Cacao (Brown)", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Heavy cream", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_156",
    name: "Vodka and Tonic",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_157",
    name: "Apricot Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Juice of Orange", measure: "1/4 oz" },
      { ingredient: "Apricot Flavored Brandy", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_158",
    name: "Alexander Cocktail No. 2",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Creme de Cacao (White)", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_159",
    name: "After Dinner Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apricot Flavored Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1 oz" }
    ]
  },
  {
    id: "mb_160",
    name: "Harvest Moon",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Lillet Blanc", measure: "1 oz" },
      { ingredient: "Apple Brandy", measure: "1/2 oz" },
      { ingredient: "Green Chartreuse", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_161",
    name: "Red Raider",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_162",
    name: "Vodka and Apple Juice",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_163",
    name: "Mint Julep (Southern Style)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "springs mint", measure: "5 or 6" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Water", measure: "2 oz" },
      { ingredient: "Bourbon", measure: "2 1/2 oz" }
    ]
  },
  {
    id: "mb_164",
    name: "Limestone",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_165",
    name: "Grounds For Divorce",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Kirschwasser", measure: "3/4 oz" },
      { ingredient: "Cynar", measure: "1/4 oz" },
      { ingredient: "Amaro", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_166",
    name: "Gentleman's Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Creme de Menthe", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_167",
    name: "Dixie Julep",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Bourbon", measure: "2 1/2 oz" }
    ]
  },
  {
    id: "mb_168",
    name: "Victory Collins",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Unsweetened Grape Juice", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_169",
    name: "Buddy's Favorite",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "1 1/2 oz" },
      { ingredient: "Cold Water", measure: "6 oz" }
    ]
  },
  {
    id: "mb_170",
    name: "Bourbon On The Rocks",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "2 oz" }
    ]
  },
  {
    id: "mb_171",
    name: "Bourbon Cobbler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "2 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Grapefruit Juice", measure: "2 oz" },
      { ingredient: "Almond extract", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_172",
    name: "Bourbon and Water",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "2 oz" },
      { ingredient: "Water", measure: "4 oz" }
    ]
  },
  {
    id: "mb_173",
    name: "Greenpoint",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_174",
    name: "Yellowjacket",
    category: "Non-alcoholic Drinks",
    ingredients: [
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Orange Juice", measure: "2 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_175",
    name: "Velvet Peach Hammer",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 3/4 oz" },
      { ingredient: "Peach schnapps", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_176",
    name: "Grandfather",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 oz" },
      { ingredient: "Applejack", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Peychaud's Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_177",
    name: "Goldrush",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_178",
    name: "Sake Martini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sake", measure: "1 oz" },
      { ingredient: "Mr. Boston Gin", measure: "3 oz" }
    ]
  },
  {
    id: "mb_179",
    name: "Godfather",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Amaretto", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_180",
    name: "Jack-In-The-Box",
    category: "Brandy",
    ingredients: [
      { ingredient: "Applejack", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_181",
    name: "Saronno",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "1 oz" },
      { ingredient: "Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_182",
    name: "Saronno Colada (Nutty Colada)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "3 oz" },
      { ingredient: "Coconut Milk", measure: "3 oz" },
      { ingredient: "Crushed Pineapple", measure: "3 oz" }
    ]
  },
  {
    id: "mb_183",
    name: "Saronno Mist",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_184",
    name: "Saronno Rose",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "1 1/2 oz" },
      { ingredient: "Roses Lime Juice", measure: "1/2 oz" },
      { ingredient: "Club Soda", measure: "1 oz" }
    ]
  },
  {
    id: "mb_185",
    name: "Gilchrist",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Pear brandy", measure: "3/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "3/4 oz" },
      { ingredient: "Amaro", measure: "1/2 oz" },
      { ingredient: "Grapefruit bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_186",
    name: "Frisco Sour",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon or Rye Whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Lemon and lime wheels", measure: "1 oz" }
    ]
  },
  {
    id: "mb_187",
    name: "Fratelli Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Fernet-Branca", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_188",
    name: "Francis The Mule",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Coffee liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_189",
    name: "Fox River Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon or Rye Whiskey", measure: "2 oz" },
      { ingredient: "Dark creme de cacao", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "4 oz" }
    ]
  },
  {
    id: "mb_190",
    name: "Flying Scotchman",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_191",
    name: "The Final Ward",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "3/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "3/4 oz" },
      { ingredient: "Green Chartreuse", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_192",
    name: "Martini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_193",
    name: "Fancy Whiskey",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon or rye whiskey", measure: "2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Lemon twist", measure: "1 oz" }
    ]
  },
  {
    id: "mb_194",
    name: "Mandarine Sour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mandarine Napoleon Liqueur", measure: "2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_195",
    name: "Mandarine Mist",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mandarine Napoleon Liqueur", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_196",
    name: "Underneath The Mango Tree",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lime wedge, Sweet Chili Powder", measure: "For glass" },
      { ingredient: "Mango-flavored vodka", measure: "1 oz" },
      { ingredient: "Peach liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Ginger ale", measure: "2 oz" }
    ]
  },
  {
    id: "mb_197",
    name: "Fancy-Free Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_198",
    name: "Honeymoon Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "3/4 oz" },
      { ingredient: "Benedictine", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_199",
    name: "Twister",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_200",
    name: "Everybody's Irish Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Green creme de menthe", measure: "1 oz" },
      { ingredient: "Green Chartreuse", measure: "1 oz" },
      { ingredient: "Green olive", measure: "1 oz" }
    ]
  },
  {
    id: "mb_201",
    name: "Trident",
    category: "Vodka",
    ingredients: [
      { ingredient: "Aquavit or vodka", measure: "1 oz" },
      { ingredient: "Cynar", measure: "1/2 oz" },
      { ingredient: "Dry Sherry", measure: "1 oz" },
      { ingredient: "Peach bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_202",
    name: "Top Banana",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Creme de banana", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_203",
    name: "Emperor Norton's Mistress",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Fresh strawberries, cut in halves", measure: "3 oz" },
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Vanilla liqueur", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_204",
    name: "Easterner",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1 oz" },
      { ingredient: "Maple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_205",
    name: "Toasted Drop",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, Cinnamon Sugar", measure: "For glass" },
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Limoncello", measure: "3/4 oz" },
      { ingredient: "Amaretto", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_206",
    name: "Eastern Sour",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_207",
    name: "K. C. B. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Kummel", measure: "1/2 oz" },
      { ingredient: "Mr. Boston Gin", measure: "1 1/2 oz" },
      { ingredient: "Mr. Boston Apricot Flavored Brandy", measure: "1/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_208",
    name: "Easter Elchies",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Single-malt Scotch whisky", measure: "2 oz" },
      { ingredient: "Cherry Heering", measure: "1/2 oz" },
      { ingredient: "Punt e Mes", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_209",
    name: "Dufftown Flip",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "2 oz" },
      { ingredient: "Port", measure: "1/2 oz" },
      { ingredient: "Demerara Syrup", measure: "1/2 oz" },
      { ingredient: "Almond milk", measure: "1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_210",
    name: "Harvard Cooler",
    category: "Brandy",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_211",
    name: "The Duboudreau Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Dubonnet Rouge", measure: "3/4 oz" },
      { ingredient: "Fernet-Branca", measure: "1/4 oz" },
      { ingredient: "Elderflower liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_212",
    name: "Irish Whisky",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Triple Sec", measure: "1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1/2 oz" },
      { ingredient: "Maraschino", measure: "1/4 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Irish Whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_213",
    name: "Dubliner",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Grand Marnier", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_214",
    name: "Double Standard Sour",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Rye or bourbon whiskey", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_215",
    name: "Dixie Whiskey Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_216",
    name: "Hill Billy Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Georgia Moon Corn Whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_217",
    name: "The Titian",
    category: "Vodka",
    ingredients: [
      { ingredient: "Orange-flavored vodka", measure: "1 oz" },
      { ingredient: "Grand Marnier", measure: "1/2 oz" },
      { ingredient: "Passion Fruit Juice", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Pomegranate syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_218",
    name: "Tiger Tanaka",
    category: "Vodka",
    ingredients: [
      { ingredient: "Fresh cilantro leaves", measure: "3 oz" },
      { ingredient: "Slice peeled fresh ginger", measure: "1 oz" },
      { ingredient: "Citrus-flavored vodka", measure: "2 oz" },
      { ingredient: "Limoncello", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_219",
    name: "Grenadine Rickey",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_220",
    name: "Thyme Collins",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "2 oz" },
      { ingredient: "Mint syrup", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Thyme sprig", measure: "1 oz" },
      { ingredient: "Bitter lemon soda", measure: "3 oz" },
      { ingredient: "Long thyme sprigs", measure: "2 oz" }
    ]
  },
  {
    id: "mb_221",
    name: "Tabby Cat",
    category: "Vodka",
    ingredients: [
      { ingredient: "Dubonnet Rouge", measure: "2 oz" },
      { ingredient: "Orange-flavored vodka", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_222",
    name: "God Child",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "1 oz" },
      { ingredient: "Mr. Boston Vodka", measure: "1 oz" },
      { ingredient: "Heavy cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_223",
    name: "Sweet Maria",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_224",
    name: "Dirty Harry",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Absinthe", measure: "1 oz" },
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_225",
    name: "Harvard Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_226",
    name: "Gin and Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Mr. Boston Gin", measure: "2 oz" },
      { ingredient: "Milk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_227",
    name: "Surf Rider",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_228",
    name: "Dinah Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_229",
    name: "Tea Saronno",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hot Tea", measure: "6 oz" },
      { ingredient: "Amaretto di Saronno", measure: "1 1/2 oz" },
      { ingredient: "Whipped cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_230",
    name: "The Summer Of Love",
    category: "Vodka",
    ingredients: [
      { ingredient: "Orange-flavored vodka", measure: "2 oz" },
      { ingredient: "Rose water", measure: "2 oz" },
      { ingredient: "Lillet Blanc", measure: "1 oz" },
      { ingredient: "Black raspberry liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_231",
    name: "Devil's Soul",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Mezcal", measure: "1/2 oz" },
      { ingredient: "Amaro", measure: "1/2 oz" },
      { ingredient: "Aperol", measure: "1/4 oz" },
      { ingredient: "Elderflower liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_232",
    name: "Deshler",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet Rouge", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_233",
    name: "T.N.T. No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Thompson Blended Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_234",
    name: "Stupid Cupid",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "2 oz" },
      { ingredient: "Sloe gin", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_235",
    name: "Derby",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_236",
    name: "Stockholm 75",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Citrus-flavored vodka", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Chilled Champagne", measure: "3 oz" }
    ]
  },
  {
    id: "mb_237",
    name: "The Delmarva Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_238",
    name: "Sputnik",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/4 oz" },
      { ingredient: "Peach schnapps", measure: "1 1/4 oz" },
      { ingredient: "Fresh orange juice", measure: "3 oz" },
      { ingredient: "half-and-half", measure: "3 oz" }
    ]
  },
  {
    id: "mb_239",
    name: "Gotham",
    category: "Brandy",
    ingredients: [
      { ingredient: "Absinthe or pastis", measure: "1 oz" },
      { ingredient: "Brandy", measure: "3 oz" },
      { ingredient: "Peach bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_240",
    name: "De La Louisiane",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Benedictine", measure: "3/4 oz" },
      { ingredient: "Absinthe or pastis", measure: "3 oz" },
      { ingredient: "Peychaud's Bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_241",
    name: "The Debonair",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Single-malt Scotch whisky", measure: "2 1/2 oz" },
      { ingredient: "Ginger liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_242",
    name: "Soviet",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Amontillado sherry", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_243",
    name: "Daisy Dueller",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Tennessee whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_244",
    name: "Sonic Blaster",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Creme de banana", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_245",
    name: "Creole Lady",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Madeira", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_246",
    name: "Rum Coooler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "powdered sugar", measure: "1/2 tsp" },
      { ingredient: "carbonated water", measure: "2 oz" },
      { ingredient: "Mr. Boston Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_247",
    name: "Siberian Sleighride",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/4 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "3 oz" }
    ]
  },
  {
    id: "mb_248",
    name: "Cotton Club Flip",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Vanilla-Infused Bourbon", measure: "2 oz" },
      { ingredient: "Honey-Currant Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Rhubarb bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_249",
    name: "Golden Dawn",
    category: "Brandy",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_250",
    name: "Sidecar",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Cognac", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Madeira", measure: "1 oz" },
      { ingredient: "Fresh orange juice and orange wheel", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_251",
    name: "Shalom",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Madeira", measure: "1 oz" },
      { ingredient: "Fresh orange juice and orange wheel", measure: "1/2 oz" },
      { ingredient: "Bourbon Whiskey", measure: "2 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_252",
    name: "Commodore Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon Whiskey", measure: "2 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_253",
    name: "Sea Breeze",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "4 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_254",
    name: "Screwdriver",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "5 oz" }
    ]
  },
  {
    id: "mb_255",
    name: "Coffee Old-Fashioned",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" },
      { ingredient: "Cold brewed coffee", measure: "1 oz" },
      { ingredient: "Soda water", measure: "2 oz" }
    ]
  },
  {
    id: "mb_256",
    name: "Dry Martini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Gin", measure: "1 2/3 oz" },
      { ingredient: "Dry Vermouth", measure: "1/3 oz" }
    ]
  },
  {
    id: "mb_257",
    name: "Salty Dog",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, coarse salt", measure: "For glass" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "5 oz" }
    ]
  },
  {
    id: "mb_258",
    name: "Dr. Cook",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Gin", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_259",
    name: "Dillatini Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_260",
    name: "Chi-Town Flip",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Tawny port", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Vanilla liqueur and 3 oz", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Whole Egg and grated nutmet", measure: "1 oz" }
    ]
  },
  {
    id: "mb_261",
    name: "Chef's Pain",
    category: "Vodka",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Blackberry liqueur", measure: "1/2 oz" },
      { ingredient: "B & B", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_262",
    name: "Sampan Shipwreck A",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Orange liqueur", measure: "1/2 oz" },
      { ingredient: "Canned coconut milk", measure: "1/2 oz" },
      { ingredient: "Cold brewed chai tea", measure: "1/2 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_263",
    name: "Chas",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Amaretto", measure: "1/4 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Orange curacao", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_264",
    name: "Goat's Delight",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Kirschwasser", measure: "1 1/2 oz" },
      { ingredient: "half-and-half", measure: "1/4 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1 oz" },
      { ingredient: "Absinthe or pastis", measure: "1 oz" }
    ]
  },
  {
    id: "mb_265",
    name: "Russian Bear Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_266",
    name: "Character Development",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Scotch Whiskey", measure: "2 oz" },
      { ingredient: "Coconut liqueur", measure: "1/2 oz" },
      { ingredient: "Dry Sherry", measure: "1/2 oz" },
      { ingredient: "Grapefruit bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_267",
    name: "Ruby Red",
    category: "Vodka",
    ingredients: [
      { ingredient: "Grapefruit-flavored vodka", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1 1/2 oz" },
      { ingredient: "Fresh ruby red grapefruit juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_268",
    name: "Chaplin",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "3/4 oz" },
      { ingredient: "Dry Sherry", measure: "3/4 oz" },
      { ingredient: "Ramazzotti Amaro", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_269",
    name: "Rouxby Red",
    category: "Vodka",
    ingredients: [
      { ingredient: "For glass Lemon wedge, coarse salt", measure: "For glass" },
      { ingredient: "Grapefruit-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "3/4 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_270",
    name: "Rosemary Clementine Sparkle",
    category: "Vodka",
    ingredients: [
      { ingredient: "Clementine or mandarin orange", measure: "1/4 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "3/4 oz" },
      { ingredient: "Fresh rosemary sprig", measure: "1 oz" },
      { ingredient: "Chilled sparkling wine or Champagne", measure: "1 oz" }
    ]
  },
  {
    id: "mb_271",
    name: "Chapel Hill",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_272",
    name: "Robin's Nest",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_273",
    name: "Chancellor Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Tawny port", measure: "1/2 oz" },
      { ingredient: "Peychaud's Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_274",
    name: "Cafe di Saronno",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Amaretto di Saronno", measure: "1 oz" }
    ]
  },
  {
    id: "mb_275",
    name: "Carre Reprise",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 oz" },
      { ingredient: "Cognac", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Elderflower liqueur", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Peychaud's Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_276",
    name: "Gilroy Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "cherry-flavored brandy", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_277",
    name: "Redhead Martini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Strawberries, cut into halves", measure: "4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Chilled Moscato d'Asti or sweet sparkling wine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_278",
    name: "Red Apple",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Apple juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_279",
    name: "Canal Street Daisy",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Soda water", measure: "1 oz" },
      { ingredient: "Orange wheel", measure: "1 oz" }
    ]
  },
  {
    id: "mb_280",
    name: "Canadian Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Canadian whisky", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_281",
    name: "Purple Ruby",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Pomegranate juice", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Honey Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_282",
    name: "Canadian Cherry",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Maraschino liqueur", measure: "1 oz" },
      { ingredient: "Canadian whisky", measure: "1 1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_283",
    name: "Orange Smile",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg", measure: "1 oz" },
      { ingredient: "Juice of Orange", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_284",
    name: "Purple Passion Iced Tea",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Black raspberry liqueur", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice and 3 oz", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_285",
    name: "Canadian Breeze",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Canadian whisky", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" },
      { ingredient: "Pineapple wedge, maraschino cherry", measure: "1 oz" }
    ]
  },
  {
    id: "mb_286",
    name: "Purple Passion",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "2 oz" },
      { ingredient: "Concord grape juice", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_287",
    name: "Cameron's Kick Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "3/4 oz" },
      { ingredient: "Irish Whiskey", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_288",
    name: "Georgia Mint Julep",
    category: "Brandy",
    ingredients: [
      { ingredient: "Mint sprigs", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Peach-flavored brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_289",
    name: "California Lemonade",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" },
      { ingredient: "Soda water, Orange and lemon wheels, maraschino cherry", measure: "1 oz" }
    ]
  },
  {
    id: "mb_290",
    name: "Boston Side Car",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Five Star Brandy", measure: "3/4 oz" },
      { ingredient: "Mr. Boston Rum", measure: "3/4 oz" },
      { ingredient: "Mr. Boston Triple Sec", measure: "3/4 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_291",
    name: "Cablegram",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Ginger ale", measure: "1 oz" }
    ]
  },
  {
    id: "mb_292",
    name: "Bull And Bear",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Orange curacao", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_293",
    name: "Brooklyn",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Rye or bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Amer Picon or Torani Amer", measure: "1 oz" },
      { ingredient: "Maraschino liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_294",
    name: "Brighton Punch",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Benedictine", measure: "3/4 oz" },
      { ingredient: "Orange juice", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_295",
    name: "Bourbon Renewal",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Creme de Cassis", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_296",
    name: "Bourbon Highball",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_297",
    name: "Bourbon And Elder",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Elderflower liqueur", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_298",
    name: "Bourbon Crusta",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Lemon wedge, superfine sugar,  Long, wide spiral of orange zest", measure: "For glass" },
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_299",
    name: "Bourbon Cooler",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" },
      { ingredient: "Orgeat Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_300",
    name: "Froupe Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Benedictine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_301",
    name: "Bourbon A La Creme",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Dark creme de cacao", measure: "1 oz" },
      { ingredient: "Vanilla liqueur", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_302",
    name: "The Bone",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Hot red pepper sauce", measure: "3 oz" }
    ]
  },
  {
    id: "mb_303",
    name: "Bobby Burns Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Benedictine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_304",
    name: "Bloody Scotsman",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Smoky Scotch whisky, such as Laphroaig", measure: "24 oz" },
      { ingredient: "Tomato Juice", measure: "24 oz" },
      { ingredient: "V8 cocktail juice", measure: "24 oz" },
      { ingredient: "ketchup", measure: "1c" },
      { ingredient: "Fresh Lime Juice", measure: "3 oz" },
      { ingredient: "Simple Syrup, 3/4 oz", measure: "3 oz" }
    ]
  },
  {
    id: "mb_305",
    name: "White Cargo Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vanilla Ice Cream", measure: "1 oz" },
      { ingredient: "Mr. Boston Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_306",
    name: "Blood and Sand",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1/2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_307",
    name: "The Blinker",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whisky", measure: "2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 1/2 oz" },
      { ingredient: "Raspberry Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_308",
    name: "Pike's Peak Cooler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_309",
    name: "Blarney Stone Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Orange twist, green olive", measure: "1 oz" }
    ]
  },
  {
    id: "mb_310",
    name: "Pacman",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_311",
    name: "Lemonade (Golden)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Water", measure: "6 oz" }
    ]
  },
  {
    id: "mb_312",
    name: "Black Hawk",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Sloe gin", measure: "1 1/2 oz" },
      { ingredient: "Maraschino cherry", measure: "1 oz" }
    ]
  },
  {
    id: "mb_313",
    name: "Lemonade (Egg)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_314",
    name: "Bensonhurst",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Cynar", measure: "1 oz" },
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_315",
    name: "Chocolate Daisy",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Port", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_316",
    name: "The Beautiful Day",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "1 1/4 oz" },
      { ingredient: "Rhubarb Syrup", measure: "3/4 oz" },
      { ingredient: "Cold brewed green tea", measure: "2 oz" }
    ]
  },
  {
    id: "mb_317",
    name: "French Quarter",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Lillet Blanc", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_318",
    name: "Creme de Gin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "2 oz" },
      { ingredient: "Orange Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_319",
    name: "Creamy Screwdriver",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "6 oz" },
      { ingredient: "Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_320",
    name: "Creamy Orange",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "1 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_321",
    name: "Creamsicle",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vanilla liqueur", measure: "1 1/2 oz" },
      { ingredient: "Milk", measure: "1 1/2 oz" },
      { ingredient: "Orange Juice", measure: "3 oz" }
    ]
  },
  {
    id: "mb_322",
    name: "Cowboy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_323",
    name: "Beals Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_324",
    name: "Coronation Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_325",
    name: "Cornell Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "1/2 oz" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_326",
    name: "Combo",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "2 1/2 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_327",
    name: "Basin Street",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_328",
    name: "Cole's Raspberry Cream",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Raspberry Yogurt", measure: "1 1/2 oz" },
      { ingredient: "Raspberry Ice Cream", measure: "1 1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1 1/2 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Heavy cream", measure: "2 oz" }
    ]
  },
  {
    id: "mb_329",
    name: "Cognac Coupling",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Cognac", measure: "2 oz" },
      { ingredient: "Tawny port", measure: "1 oz" },
      { ingredient: "Anis", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_330",
    name: "Coffee Sour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Coffee-flavored brandy", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_331",
    name: "Coffee Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_332",
    name: "Coffee Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_333",
    name: "Purple Mask",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Concord grape juice", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_334",
    name: "Clove Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "1/2 oz" },
      { ingredient: "Muscatel Wine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_335",
    name: "Clover Leaf Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_336",
    name: "Clover Club Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_337",
    name: "Priority Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Calvados", measure: "1/2 oz" },
      { ingredient: "Coffee liqueur", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_338",
    name: "Clamato Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Clam Juice", measure: "1 oz" },
      { ingredient: "Tomato Juice", measure: "3 oz" }
    ]
  },
  {
    id: "mb_339",
    name: "Cider Eggnog",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Milk", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_340",
    name: "Chocolate Soldier",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_341",
    name: "Chocolate Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_342",
    name: "Chocolate Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Port", measure: "1 1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1 1/2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_343",
    name: "Chicago Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_344",
    name: "Pretty In Pink",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Cranberry Juice", measure: "1/2 oz" },
      { ingredient: "Creme de noyaux", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_345",
    name: "Cherry Wine Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Danish Cherry Wine", measure: "3/4 oz" },
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_346",
    name: "Cherry Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 1/2 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_347",
    name: "Cherry Cooler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Cherry Vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_348",
    name: "Polynesian Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_349",
    name: "Chateau Briand's Rum Cow",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/4 oz" },
      { ingredient: "Sugar", measure: "1 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Milk", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_350",
    name: "Champagne Velvet",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Chilled Stout", measure: "5 oz" },
      { ingredient: "Chilled Champagne", measure: "5 oz" }
    ]
  },
  {
    id: "mb_351",
    name: "Pink Pussycat",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Pineapple or grapefruit juice", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_352",
    name: "Back Porch Swizzle",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Ginger beer", measure: "1 oz" }
    ]
  },
  {
    id: "mb_353",
    name: "Canadian Pineapple",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Canadian whisky", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_354",
    name: "Calm Voyage",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Strega", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Passion Fruit Syrup", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_355",
    name: "Pink Lemonade",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Cranberry Juice, lemon wheel", measure: "2 oz" }
    ]
  },
  {
    id: "mb_356",
    name: "Caledonia",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Creme de Cacao (Brown)", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Milk", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_357",
    name: "Caf_ di Amaretto",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hot Black Coffee", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "1 oz" }
    ]
  },
  {
    id: "mb_358",
    name: "Cafe De Paris Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Anis", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_359",
    name: "Aztec's Mark",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" },
      { ingredient: "Hot red pepper sauce", measure: "2 oz" }
    ]
  },
  {
    id: "mb_360",
    name: "Fontainebleau Special",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Anisette", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_361",
    name: "Suntan",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hot Shot Tropical Fruit Liqueur", measure: "2 oz" },
      { ingredient: "Orange Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_362",
    name: "Sunburn",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hot Shot Tropical Fruit Liqueur", measure: "2 oz" },
      { ingredient: "Grapefruit Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_363",
    name: "Suissesse Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Anisette", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_364",
    name: "Strawberry Sunries",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Strawberry schnapps", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_365",
    name: "Autumn Leaves",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "3/4 oz" },
      { ingredient: "Apple Brandy", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Strega", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_366",
    name: "Pickled Pink",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Aquavit", measure: "1 oz" },
      { ingredient: "Dill pickle brine", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_367",
    name: "Aquarius",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 1/2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_368",
    name: "Soul Kiss Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Juice", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Bourbon", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_369",
    name: "Pickled Martini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/4 oz" },
      { ingredient: "Sweet pickle brine", measure: "3/4 oz" },
      { ingredient: "Sweet pickle slice", measure: "1" }
    ]
  },
  {
    id: "mb_370",
    name: "Sloe Gin Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "1 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_371",
    name: "Angel's Share",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Amaro", measure: "1/2 oz" },
      { ingredient: "Creme de Cassis", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_372",
    name: "Silver Stallion Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vanilla Ice Cream", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_373",
    name: "Silver King Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_374",
    name: "American Trilogy",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Brown sugar cube, such as Demerara", measure: "1 oz" },
      { ingredient: "Straight rye whiskey", measure: "1 oz" },
      { ingredient: "Applejack", measure: "1 oz" }
    ]
  },
  {
    id: "mb_375",
    name: "Silver Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_376",
    name: "Sherry Twist Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Cream sherry", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_377",
    name: "Sherry Sangaree",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Water", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "2 oz" },
      { ingredient: "Port", measure: "1 oz" }
    ]
  },
  {
    id: "mb_378",
    name: "Sherry Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "2 oz" }
    ]
  },
  {
    id: "mb_379",
    name: "Petit Zinc",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_380",
    name: "Sherry Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "1 1/2 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_381",
    name: "Sherry-and-Egg Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "cream sherry", measure: "2 oz" }
    ]
  },
  {
    id: "mb_382",
    name: "Americana",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Tennessee whiskey", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_383",
    name: "Allegheny",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Blackberry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_384",
    name: "Sevilla Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_385",
    name: "September Morn Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_386",
    name: "Peach Iced Tea",
    category: "Vodka",
    ingredients: [
      { ingredient: "Peach-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Orange curacao", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "1/2 oz" },
      { ingredient: "Iced tea", measure: "2 oz" }
    ]
  },
  {
    id: "mb_387",
    name: "Fantasio Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "White creme de menthe", measure: "1 oz" },
      { ingredient: "Maraschino liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_388",
    name: "Scotch Bird Flyer",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Scotch", measure: "1 1/2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_389",
    name: "Algonquin",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_390",
    name: "Savannah",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_391",
    name: "Pink Rose Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Light cream", measure: "2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_392",
    name: "Ninotchka Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_393",
    name: "Prairie Oyster",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Worcestershire Sauce", measure: "1 oz" },
      { ingredient: "Catsup", measure: "1 oz" },
      { ingredient: "Vinegar", measure: "1 oz" },
      { ingredient: "Pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_394",
    name: "Prairie Chicken",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_395",
    name: "Pousse L'Amour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_396",
    name: "Puerto Apple",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Orgeat Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_397",
    name: "Akogare",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "1 1/2 oz" },
      { ingredient: "Ginger syrup", measure: "3/4 oz" },
      { ingredient: "Cold brewed black tea, preferably Japanese", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_398",
    name: "Prado",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "3/4 oz" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_399",
    name: "Port Wine Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Port", measure: "1 1/2 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_400",
    name: "Port Wine Cobbler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "powdered sugar", measure: "1 tsp" },
      { ingredient: "carbonated water", measure: "2 oz" },
      { ingredient: "port", measure: "3 oz" }
    ]
  },
  {
    id: "mb_401",
    name: "Nijinksy Blini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Peach schnapps", measure: "1 oz" },
      { ingredient: "Peach puree", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_402",
    name: "Affinity Cocktail (whisky)",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Blended Scotch Whiskey", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_403",
    name: "Plain Vermouth Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_404",
    name: "Ping-Pong Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_405",
    name: "Moscow Mule",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_406",
    name: "Phoebe Snow",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Anis", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_407",
    name: "Affinity Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Maraschino liqueur", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_408",
    name: "Peggy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Anis", measure: "1/4 oz" },
      { ingredient: "Dubonnet", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_409",
    name: "Peach Blow Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Peach", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_410",
    name: "Peach Blossom",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Peach", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_411",
    name: "Passion Mimosa",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Chilled Passion Fruit Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_412",
    name: "Mocha Express",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Irish cream liqueur", measure: "3/4 oz" },
      { ingredient: "Coffee liqueur", measure: "3/4 oz" },
      { ingredient: "Cold brewed espresso coffee", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_413",
    name: "Palmer Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "2 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_414",
    name: "Mr. 404",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Elderflower liqueur", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Aperol", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_415",
    name: "Mountain Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/4 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_416",
    name: "Morning Glory Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Anis", measure: "1/2 oz" },
      { ingredient: "Scotch", measure: "2 oz" }
    ]
  },
  {
    id: "mb_417",
    name: "Adderly Cocktail",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Straight rye whiskey", measure: "2 oz" },
      { ingredient: "Maraschino liqueur", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_418",
    name: "Fancy Brandy",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_419",
    name: "Montreal Gin Sour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_420",
    name: "Montezuma",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "1 1/2 oz" },
      { ingredient: "Madeira", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Crushed ice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_421",
    name: "Miss Jones",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vanilla-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Butterscotch schnapps", measure: "1/2 oz" },
      { ingredient: "Limoncello", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_422",
    name: "Mint Gin Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mint-Flavored Gin", measure: "1 oz" },
      { ingredient: "White Port Wine", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_423",
    name: "Mint Collins",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Mint-Flavored Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_424",
    name: "Million-Dollar Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_425",
    name: "Millionaire Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_426",
    name: "Academic Review",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Applejack", measure: "1/2 oz" },
      { ingredient: "Amaro Nonino", measure: "1/2 oz" },
      { ingredient: "Rye Whiskey", measure: "1/2 oz" },
      { ingredient: "Demerara Syrup", measure: "1/4 oz" },
      { ingredient: "Mole bitters 1 oz", measure: "2 oz" }
    ]
  },
  {
    id: "mb_427",
    name: "Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "2 oz" },
      { ingredient: "Milk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_428",
    name: "Merry Widow Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_429",
    name: "May Blossom Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Swedish Punch", measure: "2 oz" }
    ]
  },
  {
    id: "mb_430",
    name: "Mary Garden Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_431",
    name: "19th Century",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "Lillet Rouge", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_432",
    name: "Manila Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Root Beer", measure: "2 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_433",
    name: "1626",
    category: "Whiskies",
    ingredients: [
      { ingredient: "Bourbon whiskey", measure: "2 1/2 oz" },
      { ingredient: "Gingerbread liqueur", measure: "3/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" },
      { ingredient: "Italian preserved cherry", measure: "1 oz" }
    ]
  },
  {
    id: "mb_434",
    name: "Maracuya Mosquito",
    category: "Vodka",
    ingredients: [
      { ingredient: "Fresh basil leaves", measure: "4 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Green Chartreuse", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Passion Fruit Juice, basil leaf", measure: "1 oz" }
    ]
  },
  {
    id: "mb_435",
    name: "Madras",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "4 oz" },
      { ingredient: "Orange juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_436",
    name: "Absinthe Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Absinthe Substitute", measure: "1 1/2 oz" },
      { ingredient: "Water", measure: "2 oz" },
      { ingredient: "Old Mr. Boston Anisette", measure: "1 1/2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_437",
    name: "Lychee Lucy",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Lychee liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_438",
    name: "Vodka Martini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Vodka", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_439",
    name: "The Loop",
    category: "Vodka",
    ingredients: [
      { ingredient: "Black cherry-flavored vodka", measure: "2 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "Chile Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_440",
    name: "Long Island Iced Tea",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Blanco tequila", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Simple Syrup, 1/2 oz", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_441",
    name: "Fallen Leaves",
    category: "Brandy",
    ingredients: [
      { ingredient: "Calvados", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1/4 oz" },
      { ingredient: "Brandy", measure: "1 oz" }
    ]
  },
  {
    id: "mb_442",
    name: "L'italienne",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Lillet Blanc", measure: "1/4 oz" },
      { ingredient: "Ramazzotti Amaro", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_443",
    name: "Rum Dubonnet",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_444",
    name: "Ruby Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_445",
    name: "Limoncello Manzanilla Marmalade Sour",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Limoncello", measure: "3/4 oz" },
      { ingredient: "Manzanilla sherry", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Grapefruit marmalade", measure: "1 oz" }
    ]
  },
  {
    id: "mb_446",
    name: "Royal Purple Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "red wine", measure: "2 bottles" }
    ]
  },
  {
    id: "mb_447",
    name: "Royal Gin Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_448",
    name: "Royal Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_449",
    name: "Royal Clover Club Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_450",
    name: "Lights On The Plaza",
    category: "Vodka",
    ingredients: [
      { ingredient: "Cucumber slices, chopped", measure: "2" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Acai berry flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Black raspberry liqueur", measure: "1/2 oz" },
      { ingredient: "Sparkling wine, raspberry and cucumber", measure: "1 oz" }
    ]
  },
  {
    id: "mb_451",
    name: "Rococo",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Cherry Vodka", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_452",
    name: "Rock & Rye Cooler",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Rock and Rye", measure: "1 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_453",
    name: "Rock & Rye Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Rock and Rye", measure: "1 oz" },
      { ingredient: "White Port Wine", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_454",
    name: "Le Paradini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Raspberry-flavored liqueur", measure: "1/2 oz" },
      { ingredient: "Grand Marnier", measure: "1/2 oz" },
      { ingredient: "Chilled Champagne", measure: "1 oz" }
    ]
  },
  {
    id: "mb_455",
    name: "Red Swizzle",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Carbonated Water", measure: "2 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_456",
    name: "Lemon Drop",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, superfine sugar", measure: "For glass" },
      { ingredient: "lemon-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_457",
    name: "Rebel Charge",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bourbon", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_458",
    name: "Rattlesnake Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Anis", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_459",
    name: "Ramos Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Light cream", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_460",
    name: "San Francisco",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sloe gin", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_461",
    name: "Sand-Martini Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Green Chartreuse", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Sake", measure: "1 oz" }
    ]
  },
  {
    id: "mb_462",
    name: "Sake Martini (Sakini)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sake", measure: "1 oz" },
      { ingredient: "Gin", measure: "3 oz" }
    ]
  },
  {
    id: "mb_463",
    name: "Lemon Crush",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Crema di limoncello", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_464",
    name: "Rye Whiskey Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Rye Whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_465",
    name: "Leaves Of Grass",
    category: "Vodka",
    ingredients: [
      { ingredient: "Aquavit", measure: "1 1/2 oz" },
      { ingredient: "Old Tom gin", measure: "1/2 oz" },
      { ingredient: "Demerara Syrup", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" },
      { ingredient: "Absinthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_466",
    name: "Widow's Dream",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Benedictine", measure: "1 1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_467",
    name: "Whiskey Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "1 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_468",
    name: "L.A. Sunrise",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Creme de banana", measure: "1 oz" },
      { ingredient: "Fresh orange juice", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Dark rum", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_469",
    name: "White Rose Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_470",
    name: "White Plush",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "2 oz" },
      { ingredient: "Milk", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_471",
    name: "White Elephant",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_472",
    name: "Whiskey Toddy (cold)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Water", measure: "2 oz" },
      { ingredient: "Blended whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_473",
    name: "Kretchma Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_474",
    name: "Whiskey Skin",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "lump of sugar", measure: "1" },
      { ingredient: "blended whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_475",
    name: "Whiskey Milk Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_476",
    name: "Katana",
    category: "Vodka",
    ingredients: [
      { ingredient: "Cucumber slices", measure: "3 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Sake", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Cucumber", measure: "1 oz" }
    ]
  },
  {
    id: "mb_477",
    name: "Ethel Duffy Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Apricot-Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "White creme de menthe", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_478",
    name: "Daiquiri",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_479",
    name: "Wembley Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/4 oz" },
      { ingredient: "Apple Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_480",
    name: "Weep-No-More Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Maraschino", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_481",
    name: "Jungle Juice",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "each Cranberry Juice, orange juice, pineapple juice, lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_482",
    name: "Wedding Belle Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Juice", measure: "1 1/2 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_483",
    name: "Waterloo",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "3 oz" },
      { ingredient: "Mandarine Napoleon Liqueur", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_484",
    name: "Waterbury Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_485",
    name: "Washington Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Sugar Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_486",
    name: "The Jamaican Ten Speed",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Melon liqueur", measure: "3/4 oz" },
      { ingredient: "Creme de banana", measure: "1/4 oz" },
      { ingredient: "Coconut-flavored rum", measure: "1/4 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_487",
    name: "Twin Six Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_488",
    name: "Jackie-O",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lime wedge, pink sanding sugar", measure: "For glass" },
      { ingredient: "each Citrus-flavored vodka and orange-flavored vodka", measure: "1/2 oz" },
      { ingredient: "Creme de Cassis", measure: "1/2 oz" },
      { ingredient: "Apricot nectar", measure: "1 oz" },
      { ingredient: "each Fresh lemon juice and cranberry juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_489",
    name: "Tropical Heart",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Hot Shot Tropical Fruit Liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_490",
    name: "Trois Rivieres",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Canadian whisky", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_491",
    name: "Tovarich Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Kummel", measure: "3/4 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_492",
    name: "Italian Screwdriver",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lime wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "3 oz" },
      { ingredient: "Grapefruit Juice", measure: "2 oz" },
      { ingredient: "Ginger ale", measure: "1 oz" }
    ]
  },
  {
    id: "mb_493",
    name: "T.N.T. Cocktail No. 2",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "1 oz" }
    ]
  },
  {
    id: "mb_494",
    name: "T.N.T. Cocktail No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Anis", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_495",
    name: "Ibiza",
    category: "Vodka",
    ingredients: [
      { ingredient: "Orange-flavored vodka", measure: "1 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 oz" },
      { ingredient: "Pomegranate molasses", measure: "1 oz" },
      { ingredient: "Peach schnapps", measure: "1 oz" },
      { ingredient: "Apple schnapps, grapefruit twist", measure: "1 oz" }
    ]
  },
  {
    id: "mb_496",
    name: "Thunder",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Cayenne Pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_497",
    name: "Huntsman Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Jamaica Rum", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_498",
    name: "Tequila Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_499",
    name: "Humpty Dumpty",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Galliano", measure: "1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Peychaud's Bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_500",
    name: "Tequila Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "4 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_501",
    name: "Temptation Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Anis", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_502",
    name: "Tchoupitolas Street Guzzle",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_503",
    name: "Tahitian Tea",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Vodka", measure: "1/2 oz" },
      { ingredient: "Hot Shot Tropical Fruit Liqueur", measure: "1/2 oz" },
      { ingredient: "7-Up", measure: "1 oz" },
      { ingredient: "each Cranberry Juice and orange juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_504",
    name: "Limey",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Lime Liqueur", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Lime Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_505",
    name: "Headless Horseman",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Angostura Bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_506",
    name: "Love Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sloe gin", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" },
      { ingredient: "Raspberry Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_507",
    name: "Los Angeles Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/4 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_508",
    name: "Long Island Tea",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Tequila", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_509",
    name: "Harvey Wallbanger",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Fresh orange juice", measure: "4 oz" },
      { ingredient: "Galliano", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_510",
    name: "Lime Giant",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lime Vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_511",
    name: "Lil Naue",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Port", measure: "1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_512",
    name: "Harrington",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Green Chartreuse", measure: "1 oz" }
    ]
  },
  {
    id: "mb_513",
    name: "El Profesor",
    category: "Brandy",
    ingredients: [
      { ingredient: "Pisco", measure: "1 oz" },
      { ingredient: "Punt e Mes", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Aromatic bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_514",
    name: "Leap Year Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/4 oz" },
      { ingredient: "Orange Flavored Gin", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_515",
    name: "Lasky Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grape Juice", measure: "3/4 oz" },
      { ingredient: "Swedish Punch", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_516",
    name: "Lady Love Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Light cream", measure: "2 oz" }
    ]
  },
  {
    id: "mb_517",
    name: "Handball Cooler",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_518",
    name: "Hyatt's Jamaican Banana",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "Creme de banana", measure: "1/2 oz" },
      { ingredient: "Vanilla Ice Cream", measure: "2 oz" },
      { ingredient: "half-and-half", measure: "1 oz" },
      { ingredient: "Banana", measure: "1 oz" }
    ]
  },
  {
    id: "mb_519",
    name: "H.P.W. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_520",
    name: "Hot Shot Margarita",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Tequila", measure: "2 oz" },
      { ingredient: "Hot Shot Tropical Fruit Liqueur", measure: "1 oz" },
      { ingredient: "Lemon or Lime Juice", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_521",
    name: "The Groupie",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedges", measure: "3 oz" },
      { ingredient: "Superfine sugar", measure: "1/2 oz" },
      { ingredient: "Citrus-flavored vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_522",
    name: "Hot Brandy Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_523",
    name: "Grape Nehi",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Raspberry-flavored liqueur", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_524",
    name: "Hole-in-One Cocktai",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Scotch", measure: "1 3/4 oz" },
      { ingredient: "Vermouth", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_525",
    name: "Grapefruit Gimlet Royale",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Chilled Champagne", measure: "2 oz" }
    ]
  },
  {
    id: "mb_526",
    name: "Hair Raiser",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "100-proof Vodka", measure: "1 1/2 oz" },
      { ingredient: "Rock and Rye", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_527",
    name: "Godmother",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Amaretto", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_528",
    name: "Green Opal",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "Anis", measure: "1 oz" }
    ]
  },
  {
    id: "mb_529",
    name: "Green Hornet (Dry)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lime Vodka", measure: "2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_530",
    name: "Green Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Green creme de menthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_531",
    name: "Godchild",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "1 oz" },
      { ingredient: "Heavy cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_532",
    name: "Grape Vodka Froth",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Grape Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_533",
    name: "Grapefruit Nog",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Honey", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_534",
    name: "Golden Slipper",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Yellow Chartreuse", measure: "3/4 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_536",
    name: "Golden Frappe",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "2 oz" },
      { ingredient: "Sugar", measure: "1 oz" },
      { ingredient: "Port", measure: "1 oz" }
    ]
  },
  {
    id: "mb_537",
    name: "Glass Tower",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Peach schnapps", measure: "1 oz" },
      { ingredient: "White rum", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Sambuca", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_538",
    name: "Golden Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_539",
    name: "Gloom Lifter",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blended whiskey", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Raspberry Syrup", measure: "1 oz" },
      { ingredient: "Sugar", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_540",
    name: "Glogg",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Wine (Port, Cream Sherry, Claret, Burgundy, or Madeira)", measure: "2 750-ml" },
      { ingredient: "Dried Orange Peel", measure: "2 oz" },
      { ingredient: "Cinnamon sticks", measure: "2 oz" },
      { ingredient: "cloves", measure: "25" }
    ]
  },
  {
    id: "mb_541",
    name: "Georgia Peach",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Peach schnapps", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_542",
    name: "Georgia Mule",
    category: "Vodka",
    ingredients: [
      { ingredient: "Peach slice, skinned", measure: "1 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Peach bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_543",
    name: "Gentle Ben",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Blanco tequila", measure: "1 oz" }
    ]
  },
  {
    id: "mb_544",
    name: "East India Cocktail No. 1",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Jamaica Rum", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_545",
    name: "General Harrison's Eggnog",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_546",
    name: "Gables Collins",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Creme de noyaux", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_547",
    name: "Frozen Brandy and Rum",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_548",
    name: "Frozen Apple",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 1/2 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_549",
    name: "Frisky Witch",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Sambuca", measure: "1 oz" }
    ]
  },
  {
    id: "mb_550",
    name: "Froth Blower Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_551",
    name: "French Martini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Black raspberry liqueur", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_552",
    name: "Flatiron Martini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Splash triple sec", measure: "1 oz" },
      { ingredient: "Orange-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Lillet Blanc", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_553",
    name: "Favourite Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apricot-Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_554",
    name: "Electric Jam",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/4 oz" },
      { ingredient: "Blue curacao", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_555",
    name: "Fairy Belle Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_556",
    name: "Duke Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "2 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_557",
    name: "Dreamy Dorini Smoking Martini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Smoky Scotch, such as Laphroaig", measure: "1/2 oz" },
      { ingredient: "Pastis", measure: "4 oz" }
    ]
  },
  {
    id: "mb_558",
    name: "Dubonnet Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "2 oz" }
    ]
  },
  {
    id: "mb_559",
    name: "Dubonnet Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 oz" },
      { ingredient: "Dubonnet", measure: "2 oz" }
    ]
  },
  {
    id: "mb_560",
    name: "Dubonnet Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Orange Bitters (if desired)", measure: "1 oz" }
    ]
  },
  {
    id: "mb_561",
    name: "Doctor Cook",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_562",
    name: "Desert Sunrise",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/4 oz" },
      { ingredient: "Fresh orange juice", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_563",
    name: "Dillatini",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_564",
    name: "Devil's Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "1/2 oz" },
      { ingredient: "Port", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_565",
    name: "Derby Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1" },
      { ingredient: "Scotch", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_566",
    name: "Cubeltini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Cucumber slices", measure: "3 oz" },
      { ingredient: "Fresh mint leaves", measure: "5" },
      { ingredient: "Simple Syrup", measure: "1 1/2 oz" },
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_567",
    name: "Crocodile Cooler",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Melon liqueur", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_568",
    name: "Cosmopolitan",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_569",
    name: "Dream Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Anisette", measure: "1 oz" }
    ]
  },
  {
    id: "mb_570",
    name: "Jean Lafitte Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Anis", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_571",
    name: "Japanese Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Port", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_572",
    name: "Citronella Cooler",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Lemonade", measure: "2 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_573",
    name: "North Pole Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_574",
    name: "The Cinquecento",
    category: "Vodka",
    ingredients: [
      { ingredient: "Bison grass vodka (Zubrowka)", measure: "1 1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_575",
    name: "New Orleans Gin Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Light cream, 1/2 oz", measure: "1 oz" }
    ]
  },
  {
    id: "mb_576",
    name: "Napoleon",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Curacao", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_577",
    name: "Zombie",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Gold rum", measure: "1 oz" },
      { ingredient: "151-Proof Rum", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "each Fresh Lime Juice, lemon juice, pineapple juie, and passion fruit syrup", measure: "1 oz" },
      { ingredient: "Demerara Syrup", measure: "2 oz" },
      { ingredient: "Tiki (such as Bittermen's 'Elemakule) or Angostura bitters (optional) Garnish: Fresh mint sprig", measure: "1 oz" }
    ]
  },
  {
    id: "mb_578",
    name: "Kiss the Boys Goodbye",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sloe gin", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" },
      { ingredient: "Juice of a Lemon", measure: "1 oz" }
    ]
  },
  {
    id: "mb_579",
    name: "X.Y.Z. Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_580",
    name: "K.G.B. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Kummel", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_581",
    name: "Eye-Opener",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Anis", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "2 oz" }
    ]
  },
  {
    id: "mb_582",
    name: "Wiki Waki Woo",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "151-Proof Rum", measure: "1/2 oz" },
      { ingredient: "each Vodka, tequila blanco, triple sec", measure: "1/2 oz" },
      { ingredient: "Amaretto", measure: "1 oz" },
      { ingredient: "each Fresh orange juice, pineapple juice, cranberry juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_583",
    name: "Elk's Own Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" },
      { ingredient: "Port", measure: "3/4 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_584",
    name: "Eggnog Supreme",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Medium Eggs", measure: "1 oz" },
      { ingredient: "Sugar", measure: "1 oz" },
      { ingredient: "Whole milk", measure: "1 1/2 oz" },
      { ingredient: "Heavy Cream, Whipped", measure: "1 oz" },
      { ingredient: "Cognac", measure: "1 750-ml" }
    ]
  },
  {
    id: "mb_585",
    name: "Egg Sour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_586",
    name: "White Lion Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_587",
    name: "White Lily Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Anisette", measure: "1 oz" }
    ]
  },
  {
    id: "mb_588",
    name: "Ice Cream Flip",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1 oz" },
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_589",
    name: "Outrigger",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Peach-flavored brandy", measure: "1 oz" },
      { ingredient: "Lime Vodka", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_590",
    name: "Opera Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Maraschino", measure: "1 oz" },
      { ingredient: "Dubonnet", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_591",
    name: "Virginia Dare",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Ripe pear", measure: "2 oz" },
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_592",
    name: "Opening Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grenadine", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Blended whiskey", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_593",
    name: "Queen Bee",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lime Vodka", measure: "1 1/2 oz" },
      { ingredient: "Coffee-flavored brandy", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_594",
    name: "Van Vleet",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3 oz" },
      { ingredient: "Maple Syrup", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_595",
    name: "Zaza Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_596",
    name: "The Vacation Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Peeled and chopped fresh ginger", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "each Simple Syrup, light rum, dark rum", measure: "1/2 oz" },
      { ingredient: "Mango juice", measure: "1 oz" },
      { ingredient: "each Cranberry Juice, orange juice, spiced rum", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_597",
    name: "Dolores",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy, preferably Spanish", measure: "1 oz" },
      { ingredient: "Cherry liqueur", measure: "1 oz" },
      { ingredient: "White or dark creme de cacao", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_598",
    name: "Vesuvio",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_599",
    name: "Urban Anxiety",
    category: "Rum",
    ingredients: [
      { ingredient: "Cachaca", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Cynar", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_600",
    name: "Virgin",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "White creme de menthe", measure: "1/2 oz" },
      { ingredient: "Forbidden Fruit", measure: "1 oz" }
    ]
  },
  {
    id: "mb_601",
    name: "Tropica Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "3 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_602",
    name: "Vermouth Cassis",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Creme de Cassis", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_603",
    name: "Verboten",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Forbidden Fruit", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_604",
    name: "Velvet Hammer No. 2",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Strega", measure: "1 1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_605",
    name: "Velvet Hammer No. 1",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Creme de Cacao", measure: "1 oz" },
      { ingredient: "Light cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_606",
    name: "Ulanda Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Anis", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_607",
    name: "Torridora Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Coffee-flavored brandy", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1 1/2 oz" },
      { ingredient: "151-Proof Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_608",
    name: "Boston Sour",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Blended whiskey", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_609",
    name: "Three Miller Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Fresh cherry tomatoes", measure: "3 oz" },
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_610",
    name: "Bird-of-Paradise Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_611",
    name: "Biffy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Swedish Punch", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_612",
    name: "Between-The-Sheets Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_613",
    name: "Third-Rail Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Apple Brandy", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Anisette", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_614",
    name: "Bentley",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 oz" }
    ]
  },
  {
    id: "mb_615",
    name: "Tahiti Club",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_616",
    name: "Barton Special",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1/2 oz" },
      { ingredient: "Scotch", measure: "1/4 oz" },
      { ingredient: "Gin", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_617",
    name: "Barnaby's Buffalo Blizzard",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Galliano", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_618",
    name: "Susie Taylor",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_619",
    name: "Baltimore Bracer",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Anisette", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_620",
    name: "Bachelor's Bait Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_621",
    name: "Bushranger",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_622",
    name: "Sunset at Gowanus",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Maple Syrup", measure: "1/2 oz" },
      { ingredient: "Brandy", measure: "1/4 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_623",
    name: "Bulldog Highballl",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_624",
    name: "Bucks Fizz (Mimosa)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Orange Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_625",
    name: "Buckjones",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Sherry", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_626",
    name: "Stormy Colada",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_627",
    name: "Bronx SIlver Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_628",
    name: "Bronx Golden Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Orange", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_629",
    name: "Stone Wall",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "thin Peeled fresh ginger", measure: "3 slices" },
      { ingredient: "Demerara Syrup", measure: "3/4 oz" },
      { ingredient: "Fresh apple cider", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_630",
    name: "Depth Bomb",
    category: "Brandy",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_631",
    name: "Stone Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dry Sherry", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_632",
    name: "Almeria",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "17-year-old J. Wray and Nephew Ltd. Rum", measure: "1 1/2 oz" },
      { ingredient: "Coffee-flavored liqueur", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_633",
    name: "Aunt Jemima",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_634",
    name: "Spanish Town Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_635",
    name: "Apricot Lady",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/4 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_636",
    name: "Apricot Anise Collins",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_637",
    name: "Apple Rum Rickey",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "3/4 oz" },
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Lime", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_638",
    name: "Sloppy Joe's Cocktail No. 1",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_639",
    name: "Applejack Punch",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 3/4 oz" },
      { ingredient: "Grenadine", measure: "4 oz" },
      { ingredient: "Orange Juice", measure: "16 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_640",
    name: "Brandy Flip",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Whole Egg", measure: "1" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Light Cream (if desired)", measure: "2 oz" }
    ]
  },
  {
    id: "mb_641",
    name: "Sir Walter Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_642",
    name: "Saxon Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_643",
    name: "Boston Bullet",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_644",
    name: "Sargasso",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Aged rhum agricole", measure: "2 oz" },
      { ingredient: "Dry Sherry", measure: "3/4 oz" },
      { ingredient: "Aperol", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_645",
    name: "Santiago Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_646",
    name: "Black Velvet",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Chilled Stout", measure: "5 oz" },
      { ingredient: "Chilled Champagne", measure: "5 oz" }
    ]
  },
  {
    id: "mb_647",
    name: "Saint Lucy Bracer",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Butterscotch schnapps", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_648",
    name: "Applecar",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_649",
    name: "Apple Blow Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Apple Brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_650",
    name: "Antoine Special",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_651",
    name: "Ante",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "1 oz" }
    ]
  },
  {
    id: "mb_652",
    name: "S & V",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Creole Shrubb (rum-based orange liqueur)", measure: "1/2 oz" },
      { ingredient: "Ruby port", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_653",
    name: "Rum Toddy (Cold)",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light or dark rum", measure: "2 oz" },
      { ingredient: "Water", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_654",
    name: "Deauville Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Apple Brandy", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" }
    ]
  },
  {
    id: "mb_655",
    name: "Allies Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Kummel", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_656",
    name: "Rum Swizzle",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light or dark rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_657",
    name: "A. J.",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_658",
    name: "After Supper Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apricot-Flavored Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_659",
    name: "Rum Sour",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_660",
    name: "Acapulco",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 1/2 oz" },
      { ingredient: "Sugar", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1" }
    ]
  },
  {
    id: "mb_661",
    name: "Absinthe Drip Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Anis", measure: "1 1/2 oz" },
      { ingredient: "Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_662",
    name: "Ambrosia",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Applejack", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_663",
    name: "Rum Screwdriver",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "5 oz" }
    ]
  },
  {
    id: "mb_664",
    name: "Rum Rickey",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_665",
    name: "Scotch Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Creme de Menthe (White)", measure: "1/2 oz" },
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_666",
    name: "Rum Relaxer",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_667",
    name: "Rum Old-Fashioned",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "151-Proof Rum", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_668",
    name: "Rum Martini",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" }
    ]
  },
  {
    id: "mb_669",
    name: "Rum Highball",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light or dark rum", measure: "2 oz" }
    ]
  },
  {
    id: "mb_670",
    name: "Rum Fix",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 1/2 oz" },
      { ingredient: "Fresh lemon or lime juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_671",
    name: "Rum Daisy",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_672",
    name: "D'artagnan",
    category: "Brandy",
    ingredients: [
      { ingredient: "Armagnac", measure: "1 oz" },
      { ingredient: "Grand Marnier", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" },
      { ingredient: "Chilled Champagne", measure: "3 oz" }
    ]
  },
  {
    id: "mb_673",
    name: "Rum Cooler",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Soda water", measure: "2 oz" }
    ]
  },
  {
    id: "mb_674",
    name: "Rum Collins",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_675",
    name: "Seaboabd",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Blended Whiskey", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_676",
    name: "Rum Cobbler",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_677",
    name: "Robson Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Jamaica Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_678",
    name: "Rio Fix",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Absinthe or pastis", measure: "2 oz" },
      { ingredient: "Cachaca", measure: "1 1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_679",
    name: "Ringo Starr",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Red grapes", measure: "3 oz" },
      { ingredient: "Lemon", measure: "1/2 oz" },
      { ingredient: "Fresh mint leaves", measure: "6" },
      { ingredient: "Sugar cube", measure: "1 oz" },
      { ingredient: "African rum", measure: "2 oz" }
    ]
  },
  {
    id: "mb_680",
    name: "Restless Native",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Coconut rum", measure: "2 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_681",
    name: "Quarter Deck Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Cream sherry", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_682",
    name: "Quaker's Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Raspberry Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_683",
    name: "Puerto Rican Rum Daisy",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Orange curacao", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "each Orange juice and simple syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_684",
    name: "Cuban Cocktail No. 2",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_685",
    name: "Prohibition Punch",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Grand Marnier", measure: "3/4 oz" },
      { ingredient: "Passion Fruit Juice", measure: "1 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Champagne", measure: "2 oz" }
    ]
  },
  {
    id: "mb_686",
    name: "Prairie Oyster Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Worcestershire Sauce", measure: "1 oz" },
      { ingredient: "Tomato Catsup", measure: "1 oz" },
      { ingredient: "Vinegar", measure: "1 oz" },
      { ingredient: "Pepper", measure: "1 oz" },
      { ingredient: "Egg Yolk, 1 oz", measure: "1 oz" }
    ]
  },
  {
    id: "mb_687",
    name: "Poker Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_688",
    name: "Planter's Punch No. 2",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "2 oz" },
      { ingredient: "each Fresh Lime Juice, jamaica rum, grenadine", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "each Fresh lemon juice, triple sec", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_689",
    name: "Planter's Punch No. 1",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Soda water", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_690",
    name: "Planter's Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Jamaica Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_691",
    name: "Pink Paradise",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Coconut-flavored rum", measure: "1 1/2 oz" },
      { ingredient: "Amaretto", measure: "1 oz" },
      { ingredient: "Cranberry Juice", measure: "3 oz" },
      { ingredient: "Pineapple Juice", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_692",
    name: "Pink Creole",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" },
      { ingredient: "half-and-half", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_693",
    name: "Pineapple Fizz",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_694",
    name: "Pineapple Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_695",
    name: "Pearl Button",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Cachaca (Brazilian rum)", measure: "2 oz" },
      { ingredient: "Lillet Blanc", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_696",
    name: "The Crux",
    category: "Brandy",
    ingredients: [
      { ingredient: "Dubonnet", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Brandy", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_697",
    name: "Paris When It Sizzles",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Elderflower liqueur", measure: "3/4 oz" },
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_698",
    name: "Palmetto Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_699",
    name: "Paddington",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Absinthe", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Lillet Blanc", measure: "1/2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange marmalade, grapefruit twist", measure: "1 oz" }
    ]
  },
  {
    id: "mb_700",
    name: "The Old Cuban",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "mint leaves", measure: "6 Fresh" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" },
      { ingredient: "Champagne, chopped fresh mint", measure: "2 oz" }
    ]
  },
  {
    id: "mb_701",
    name: "Oh, Gosh!",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_702",
    name: "Night Cap",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_703",
    name: "New Orleans Buck",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_704",
    name: "Nevada Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_705",
    name: "Moonquake Shake",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Coffee-flavored brandy", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_706",
    name: "Monkey Wrench",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_707",
    name: "Creme De Cafe",
    category: "Brandy",
    ingredients: [
      { ingredient: "Coffee-flavored brandy", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1 oz" }
    ]
  },
  {
    id: "mb_708",
    name: "Margarita",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Cointreau or triple sec", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_709",
    name: "Mojito",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Lime wedges", measure: "3 oz" },
      { ingredient: "Fresh mint leaves", measure: "7" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Light Rum", measure: "2 oz" }
    ]
  },
  {
    id: "mb_710",
    name: "Champagne Flamingo",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Campari", measure: "3/4 oz" },
      { ingredient: "Chilled Champagne", measure: "5 oz" }
    ]
  },
  {
    id: "mb_711",
    name: "Thunder and Lightning Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_712",
    name: "Casco Bay Lemonade",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Simple Syrup", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "2 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_713",
    name: "Caribbean Cruise",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1/4 oz" },
      { ingredient: "Coconut-flavored rum", measure: "1/4 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "4 oz" }
    ]
  },
  {
    id: "mb_714",
    name: "Cappuccino Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Coffee-flavored brandy", measure: "3/4 oz" },
      { ingredient: "half-and-half", measure: "3/4 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "5 oz" }
    ]
  },
  {
    id: "mb_715",
    name: "Cape Codder",
    category: "Tequila",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "5 oz" },
      { ingredient: "Old Mr. Boston Anisette", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_716",
    name: "Baltimore Bracer Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Anisette", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Egg White", measure: "1 oz" }
    ]
  },
  {
    id: "mb_717",
    name: "Caesar",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lemon wedge, celery salt", measure: "For glass" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Tomato-clam juice", measure: "4 oz" },
      { ingredient: "Prepared horseradish", measure: "1/2 oz" },
      { ingredient: "each Worcestershire Sauce, salt, ground black pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_718",
    name: "Bull Shot",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Cold beef bouillon", measure: "3 oz" },
      { ingredient: "Worcestershire Sauce", measure: "1 oz" },
      { ingredient: "Salt", measure: "1 oz" },
      { ingredient: "Freshly ground black pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_719",
    name: "Bullfrog",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Lemonade", measure: "5 oz" }
    ]
  },
  {
    id: "mb_720",
    name: "Boston Gold",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Creme de banana", measure: "1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_721",
    name: "Corpse Reviver No. 1",
    category: "Brandy",
    ingredients: [
      { ingredient: "Cognac", measure: "2 oz" },
      { ingredient: "Calvados, apple brandy, or applejack", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" }
    ]
  },
  {
    id: "mb_722",
    name: "Thanksgiving Special Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_723",
    name: "Tequini Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Tequila", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_724",
    name: "Bordeaux Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Lillet Blanc", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_725",
    name: "Bolshoi Punch",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Creme de Cassis", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_726",
    name: "Blue Lagoon",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Blue curacao", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_727",
    name: "Stinger Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston White Creme de Menthe", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_728",
    name: "Bloody Mary",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Tomato Juice", measure: "3 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Worcestershire Sauce", measure: "4 oz" },
      { ingredient: "hot red pepper sauce", measure: "2 -  3 drops" }
    ]
  },
  {
    id: "mb_729",
    name: "Spritzer Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "chilled Rhine wine or Sauterne", measure: "3 oz" }
    ]
  },
  {
    id: "mb_730",
    name: "Bloody Bull",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Tomato Juice", measure: "2 oz" },
      { ingredient: "Cold beef bouillon", measure: "2 oz" }
    ]
  },
  {
    id: "mb_731",
    name: "The Blood Orange",
    category: "Vodka",
    ingredients: [
      { ingredient: "Orange-flavored vodka", measure: "2 oz" },
      { ingredient: "Campari", measure: "1 oz" }
    ]
  },
  {
    id: "mb_732",
    name: "Black Russian",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Coffee liqueur", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_733",
    name: "Black Magic",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Coffee liqueur", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_734",
    name: "Black Cherry Chocolate",
    category: "Vodka",
    ingredients: [
      { ingredient: "Black cherry-flavored vodka", measure: "1 1/4 oz" },
      { ingredient: "White chocolate liqueur", measure: "3/4 oz" },
      { ingredient: "Black cherry juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_735",
    name: "Victor Collins",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Vodka", measure: "1 1/2 oz" },
      { ingredient: "Unsweetened Grape Juice", measure: "3 oz" },
      { ingredient: "Lemon Juice", measure: "3 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" }
    ]
  },
  {
    id: "mb_736",
    name: "Snowball Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Anisette", measure: "1/2 oz" },
      { ingredient: "Sweet Cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_737",
    name: "Violet Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Creme Yvette", measure: "1 oz" }
    ]
  },
  {
    id: "mb_738",
    name: "Bikini",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Milk", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_739",
    name: "Cold Deck Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "White creme de menthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_740",
    name: "The Big Crush",
    category: "Vodka",
    ingredients: [
      { ingredient: "Raspberry-flavored vodka", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Raspberry-flavored liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_741",
    name: "Bianca",
    category: "Vodka",
    ingredients: [
      { ingredient: "Lime wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Citrus-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Pomegranate juice", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Fresh lemon juice, lemon twiste, fresh pomegranate seeds", measure: "1 oz" }
    ]
  },
  {
    id: "mb_742",
    name: "Bella Fragolia",
    category: "Vodka",
    ingredients: [
      { ingredient: "Strawberry, chopped", measure: "1 oz" },
      { ingredient: "Fresh basil leaves", measure: "4 oz" },
      { ingredient: "Vodka", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_743",
    name: "Beer Buster",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Hot red pepper sauce", measure: "2 oz" }
    ]
  },
  {
    id: "mb_744",
    name: "Basil 8",
    category: "Vodka",
    ingredients: [
      { ingredient: "Fresh basil leaves", measure: "3 oz" },
      { ingredient: "White grapes", measure: "5 oz" },
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "each Simple Syrup, angostura bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_745",
    name: "Shamrock Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Irish Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "1 oz" }
    ]
  },
  {
    id: "mb_746",
    name: "Aqueduct",
    category: "Vodka",
    ingredients: [
      { ingredient: "Vodka", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "White curacao or triple sec", measure: "1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_747",
    name: "Scotch Whisky Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "2 oz" }
    ]
  },
  {
    id: "mb_748",
    name: "Alfie Cocktail",
    category: "Vodka",
    ingredients: [
      { ingredient: "lemon-flavored vodka", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_749",
    name: "Admiral Perry",
    category: "Vodka",
    ingredients: [
      { ingredient: "Pear-flavored vodka", measure: "2 oz" },
      { ingredient: "Cinnamon schnapps", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" }
    ]
  },
  {
    id: "mb_750",
    name: "Yellow Rose Of Texas",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/4 oz" },
      { ingredient: "Rose water", measure: "3 oz" }
    ]
  },
  {
    id: "mb_751",
    name: "St. Patrick's Day Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "3/4 oz" },
      { ingredient: "Green Chartreuse", measure: "3/4 oz" },
      { ingredient: "Irish Whiskey", measure: "3/4 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_752",
    name: "Purple Twister",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Grape Vodka", measure: "2 oz" }
    ]
  },
  {
    id: "mb_753",
    name: "Waiting On Summer",
    category: "Tequila",
    ingredients: [
      { ingredient: "Cucumber", measure: "3 oz" },
      { ingredient: "Fresh sage leaves", measure: "3 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Ginger ale, strawberry slice", measure: "3 oz" }
    ]
  },
  {
    id: "mb_754",
    name: "Cognac Highball",
    category: "Brandy",
    ingredients: [
      { ingredient: "Cognac", measure: "2 oz" }
    ]
  },
  {
    id: "mb_755",
    name: "Prince's Smile Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Apple Brandy", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_756",
    name: "Viva Villa",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime wedge, coarse salt", measure: "For glass" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_757",
    name: "Praire Oyster Cocktail",
    category: "Cordials and Liqueurs",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Worcestershire Sauce", measure: "1 oz" },
      { ingredient: "Tomato Catsup", measure: "1 oz" },
      { ingredient: "Vinegar", measure: "1 oz" },
      { ingredient: "Pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_758",
    name: "Praire Chicken",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_759",
    name: "Venial Sin",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Mezcal", measure: "1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Elderflower liqueur", measure: "1/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_760",
    name: "Vagabundo",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado blanco tequila", measure: "2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh celery juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_761",
    name: "The 21st Century",
    category: "Tequila",
    ingredients: [
      { ingredient: "Absinthe", measure: "splash" },
      { ingredient: "Absinthe", measure: "1 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_762",
    name: "Pollyanna Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "orange peel", measure: "3 slices" },
      { ingredient: "pineapple", measure: "3 slices" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "2 oz" },
      { ingredient: "sweet vermouth", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_763",
    name: "Toreador",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Dark creme de cacao", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_764",
    name: "Pink Squirrel Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Creme de Noyaux", measure: "1 oz" },
      { ingredient: "Old Mr. Boston White Creme de Cacao", measure: "1 oz" },
      { ingredient: "Light Sweet Cream", measure: "1 oz" }
    ]
  },
  {
    id: "mb_765",
    name: "Pink Lady Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Sweet Cream", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_766",
    name: "Tijuana Taxi",
    category: "Tequila",
    ingredients: [
      { ingredient: "Gold tequila", measure: "2 oz" },
      { ingredient: "Blue curacao", measure: "1 oz" },
      { ingredient: "Tropical fruit schnapps", measure: "1 oz" }
    ]
  },
  {
    id: "mb_767",
    name: "Tia Juanathan",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Aperol", measure: "1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_768",
    name: "Phoebe Snow Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dubonnet", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_769",
    name: "Tequonic",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh lemon or lime juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_770",
    name: "Tequini",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Angostura bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_771",
    name: "Passion Daiquiri Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Rum", measure: "1 1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Passion Fruit Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_772",
    name: "Parisian Blonde Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Cream", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "3/4 oz" },
      { ingredient: "Jamaica Rum", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_773",
    name: "Tequila Sunrise",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "4 oz" },
      { ingredient: "Grenadine", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_774",
    name: "Coffee Grasshopper",
    category: "Brandy",
    ingredients: [
      { ingredient: "Coffee-flavored brandy", measure: "3/4 oz" },
      { ingredient: "White creme de menthe", measure: "3/4 oz" },
      { ingredient: "half-and-half", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_775",
    name: "Tequila Straight",
    category: "Tequila",
    ingredients: [
      { ingredient: "Coarse salt", measure: "1 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Lime wedge", measure: "1 oz" }
    ]
  },
  {
    id: "mb_776",
    name: "Tequila Sour",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_777",
    name: "Tequila Smash",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blueberries", measure: "4 oz" },
      { ingredient: "Bing cherries", measure: "4 oz" },
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_778",
    name: "Tequila Pink",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_779",
    name: "Tequila Old-Fashioned",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" },
      { ingredient: "Soda water", measure: "1 oz" }
    ]
  },
  {
    id: "mb_780",
    name: "Rob Roy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_781",
    name: "Tequila Mockingbird",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime wedge, coarse salt", measure: "For glass" },
      { ingredient: "Minced ginger", measure: "1/4 oz" },
      { ingredient: "Blanco tequila", measure: "1 3/4 oz" },
      { ingredient: "Agave nectar", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_782",
    name: "Tequila Matador",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_783",
    name: "Tequila Manhattan",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_784",
    name: "T.N.T. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Thompson Blended Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_785",
    name: "Thunderclap Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "3/4 oz" },
      { ingredient: "Old Thompson Blended Whiskey", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_786",
    name: "Thunder Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" },
      { ingredient: "Cayenne Pepper", measure: "1 oz" }
    ]
  },
  {
    id: "mb_787",
    name: "Tequila Collins",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_788",
    name: "White Lady Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Sweet Cream", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_789",
    name: "Tequila Canyon",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_790",
    name: "Chicago Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Lemon wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange curacao", measure: "1/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_791",
    name: "Sunday Confession",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Limoncello", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_792",
    name: "Strawberry Margarita",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime wedge, superfine sugar or coarse salt (optional)", measure: "For glass" },
      { ingredient: "Fresh strawberries, cut in half", measure: "3 oz" },
      { ingredient: "Strawberry schnapps", measure: "3/4 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice, whole strawberry", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_793",
    name: "Western Rose Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_794",
    name: "Widow's Kiss Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Peychaud Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_795",
    name: "Spice Of Life",
    category: "Tequila",
    ingredients: [
      { ingredient: "Cucumber", measure: "3 oz" },
      { ingredient: "Fresh mint leaves", measure: "12" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Jalapeno-Infused Tequila", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_796",
    name: "Widow's Dream Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Benedictine", measure: "1 1/2 oz" },
      { ingredient: "Whole Egg", measure: "1 oz" }
    ]
  },
  {
    id: "mb_797",
    name: "Vodka Gypsy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Vodka", measure: "1 1/2 oz" },
      { ingredient: "Benedictine", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_798",
    name: "South Of The Border",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Coffee-flavored brandy", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_799",
    name: "Vodka Grasshopper Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Vodka", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston White Creme de Cacao", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_800",
    name: "Violet Fizz Juice",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Creme Yvette", measure: "1 oz" }
    ]
  },
  {
    id: "mb_801",
    name: "Smoked Margarita",
    category: "Tequila",
    ingredients: [
      { ingredient: "Smoky Scotch whisky, such as Islay or Skye", measure: "1/2 oz" },
      { ingredient: "Reposado tequila", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_802",
    name: "Sloe Tequila",
    category: "Shooters",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Sloe gin", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_803",
    name: "Queen Elizabeth Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_804",
    name: "Silk Stockings",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Heavy cream", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_805",
    name: "Orchid Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Creme Yvette", measure: "1 oz" }
    ]
  },
  {
    id: "mb_806",
    name: "Orange Milk Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Orange Flavored Gin", measure: "2 oz" },
      { ingredient: "Milk", measure: "2 oz" }
    ]
  },
  {
    id: "mb_807",
    name: "Orange Gin Rickey",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Orange Flavored Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_808",
    name: "Orange Gin Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Orange Flavored Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_809",
    name: "Orange Gin Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Orange Flavored Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_810",
    name: "Orange Gin Collins",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Orange Flavored Gin", measure: "2 oz" }
    ]
  },
  {
    id: "mb_811",
    name: "Sidewinder",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Vanilla syrup, preferably B.A. Reynold's", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Mezcal", measure: "1/4 oz" },
      { ingredient: "Ginger beer, 1 oz", measure: "2 oz" }
    ]
  },
  {
    id: "mb_812",
    name: "Orange Blossom Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_813",
    name: "Shady Lady",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Melon liqueur", measure: "1 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "4 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "4 oz" }
    ]
  },
  {
    id: "mb_814",
    name: "Cherry Blossom",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Grenadine, maraschino cherry", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_815",
    name: "The Sfozando",
    category: "Tequila",
    ingredients: [
      { ingredient: "Mezcal", measure: "1 oz" },
      { ingredient: "Rye Whiskey", measure: "3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" },
      { ingredient: "Chocolate bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_816",
    name: "Napoleon Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "2 oz" },
      { ingredient: "Curacao", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_817",
    name: "Moulin Rouge Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Sloe Gin", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_818",
    name: "Sea Of Cortez",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Creme de Cassis", measure: "3/4 oz" },
      { ingredient: "Orange curacao", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_819",
    name: "Satin Sheets",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Falernum", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_820",
    name: "Santana Sling",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "Cherry Heering", measure: "1/2 oz" },
      { ingredient: "Batavia arrack or light rum", measure: "1/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Ginger beer", measure: "3 oz" }
    ]
  },
  {
    id: "mb_821",
    name: "Rosita",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_822",
    name: "Mariposa Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Rum", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_823",
    name: "Margarita Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Tequila", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1/2 oz" },
      { ingredient: "Lemon or Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_824",
    name: "The Refuge",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Aperol", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/4 oz" },
      { ingredient: "Agave nectar", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_825",
    name: "Manhattan Cocktail (dry)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Old Thompson Blended Whiskey", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_826",
    name: "Mamie Taylor",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "2 oz" }
    ]
  },
  {
    id: "mb_827",
    name: "Quetzalcoatl",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Mezcal", measure: "3/4 oz" },
      { ingredient: "Creme de peche", measure: "1/2 oz" },
      { ingredient: "Guava puree", measure: "1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_828",
    name: "Zero Mint",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Mr. Boston Creme de menthe", measure: "2 oz" }
    ]
  },
  {
    id: "mb_829",
    name: "Purple Pancho",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime wedge, superfine sugar", measure: "For glass" },
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Blue curacao", measure: "1/2 oz" },
      { ingredient: "Sloe gin", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "2 oz" },
      { ingredient: "each Fresh lemon juice, simple syrup, 1 lime wheel", measure: "1 oz" }
    ]
  },
  {
    id: "mb_830",
    name: "Midnight Express",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_831",
    name: "London Special Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "bitters", measure: "2 dashes" }
    ]
  },
  {
    id: "mb_832",
    name: "Mary Pickford Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "3/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_833",
    name: "Charles Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_834",
    name: "Martinique Rose",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Aged rhum agricole", measure: "2 oz" },
      { ingredient: "Amaretto", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "3/4 oz" },
      { ingredient: "orgeat or almond syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_835",
    name: "Mariposa",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_836",
    name: "Mandeville",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dark rum", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Anisette", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_837",
    name: "K.C.B. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Kummel", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "1/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_838",
    name: "Malmaison",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Cream sherry", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_839",
    name: "Mai-Tai (Trader Vic Version)",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum, preferably Jamaican", measure: "2 oz" },
      { ingredient: "Orange curacao", measure: "1/2 oz" },
      { ingredient: "Fresh lime juice (reserve 1/2 lime shell for garnish)", measure: "1 oz" },
      { ingredient: "Orgeat Syrup", measure: "1/2 oz" },
      { ingredient: "Rock candy syrup or simple syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_840",
    name: "Jersey Lightning Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1 oz" }
    ]
  },
  {
    id: "mb_841",
    name: "Lumination",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Fresh ginger", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "VS cognac", measure: "1 oz" },
      { ingredient: "each Fresh lemon juice, Angostura bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_842",
    name: "Jamaica Glow Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" },
      { ingredient: "Claret", measure: "1 oz" },
      { ingredient: "Orange Juice", measure: "1 oz" },
      { ingredient: "Jamaica Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_843",
    name: "Lounge Lizard",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_844",
    name: "Jack-in-the-Box Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Apple Brandy", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_845",
    name: "Irish Whisky Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1/2 oz" },
      { ingredient: "Maraschino", measure: "1/4 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Irish Whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_846",
    name: "Look Out Below",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "151-Proof Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_847",
    name: "Little Princess Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_848",
    name: "Little Devil Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_849",
    name: "Champs Elysees Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_850",
    name: "Hop Toad Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_851",
    name: "Level headed Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Aged rhum agricole", measure: "1 1/2 oz" },
      { ingredient: "Cold brewed coffee", measure: "1 oz" },
      { ingredient: "Allspice liqueur (pimento dram)", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_852",
    name: "La Vita Dulce",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Spiced rum", measure: "1 1/2 oz" },
      { ingredient: "Mezcal", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_853",
    name: "Hole-in-One Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "1 3/4 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Lemon Juice", measure: "1/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_854",
    name: "Ko Adang",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Coconut rum", measure: "1 oz" },
      { ingredient: "Ginger liqueur", measure: "1/2 oz" },
      { ingredient: "Mango nectar", measure: "1/2 oz" },
      { ingredient: "Cream of coconut", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice, lime wheel", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_855",
    name: "Knickerbocker Special Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Raspberry Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_856",
    name: "Hair Raiser Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston 100 proof Vodka", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Rock and Rye", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_857",
    name: "Green Opal Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Anisette", measure: "1/2 oz" },
      { ingredient: "Absinthe Substitute", measure: "1 oz" }
    ]
  },
  {
    id: "mb_858",
    name: "Jamaican Ginger",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dark rum", measure: "1 oz" },
      { ingredient: "Falernum", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "4 oz" }
    ]
  },
  {
    id: "mb_859",
    name: "Green Dragon Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Kummel", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Orange Bitters", measure: "4 oz" }
    ]
  },
  {
    id: "mb_860",
    name: "Grasshopper Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston White Creme de Cacao", measure: "3/4 oz" },
      { ingredient: "Light Sweet Cream", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_861",
    name: "Jamaican Crawler",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Melon liqueur", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "3 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_862",
    name: "Golden Slipper Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Yellow Chartreuse", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "2 oz" }
    ]
  },
  {
    id: "mb_863",
    name: "Jade",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Green creme de menthe", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Simple Syrup Scant", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_864",
    name: "Jacqueline",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" }
    ]
  },
  {
    id: "mb_865",
    name: "Jack Sparrow Flip",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Madeira", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Egg", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_866",
    name: "Irresistible",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_867",
    name: "Carroll Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_868",
    name: "Hush and Wonder",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Creme de violette", measure: "1 oz" },
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Grapefruit bitters", measure: "3 oz" }
    ]
  },
  {
    id: "mb_869",
    name: "Hurricane Leah",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "each Light Rum, Gin, Vodka, Blanco tequila, Blue curacao", measure: "1/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh orange juice", measure: "3 oz" }
    ]
  },
  {
    id: "mb_870",
    name: "Gimlet Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Rose's Lime Juice", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_871",
    name: "Hurricane",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "each Dark rum, light rum", measure: "1 1/2 oz" },
      { ingredient: "Passion Fruit Syrup", measure: "1 oz" },
      { ingredient: "Lime Juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "3/4 oz" },
      { ingredient: "each Simple Syrup, grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_872",
    name: "Hop Toad",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_873",
    name: "The Holy Roller",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Cachaca", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" },
      { ingredient: "Champagne or sparkling wine, mint sprig", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_874",
    name: "Hemingway's Nog",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Vanilla liqueur", measure: "3/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Creme fraiche", measure: "1 oz" },
      { ingredient: "tiki bitters, such as Bittermen's Elemakule", measure: "3 oz" }
    ]
  },
  {
    id: "mb_875",
    name: "Flying Scotchman Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "1 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Sugar Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_876",
    name: "Flying Grasshopper Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Green Creme de Menthe", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston White Creme de Cacao", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Vodka", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_877",
    name: "Havana Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_878",
    name: "Harvest Nectar",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Cranberry Juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Lemon-lime soda", measure: "1 oz" }
    ]
  },
  {
    id: "mb_879",
    name: "Fancy Brandy Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "2 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1/4 oz" },
      { ingredient: "Powdered Sugar", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_880",
    name: "Fallen Angel Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Bitters", measure: "1 oz" },
      { ingredient: "Old Mr. Boston White Creme de Menthe", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_881",
    name: "The Poncho",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Peychaud's Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_882",
    name: "Hai Karate",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Maple Syrup", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_883",
    name: "Cara Sposa",
    category: "Brandy",
    ingredients: [
      { ingredient: "Coffee-flavored brandy", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_884",
    name: "Traditional Martini (Dry)",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_885",
    name: "Pina Agave",
    category: "Tequila",
    ingredients: [
      { ingredient: "Cucumber", measure: "2 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Agave nectar", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_886",
    name: "Grande Guignol",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "3/4 oz" },
      { ingredient: "Cherry Heering", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_887",
    name: "Pancho Villa",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "1 oz" },
      { ingredient: "Aperol", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Peach bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_888",
    name: "Paloma (Natural)",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh white or ruby red grapefruit juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_889",
    name: "Golden Friendship",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Sweet Vermouth", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "1 oz" }
    ]
  },
  {
    id: "mb_890",
    name: "Paloma",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" }
    ]
  },
  {
    id: "mb_891",
    name: "Pacific Sunshine",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lemon wheel, coarse salt", measure: "For glass" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Blue curacao", measure: "1 1/2 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_892",
    name: "Golden Eclipse",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "1 1/2 oz" },
      { ingredient: "Amaro", measure: "1/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" },
      { ingredient: "Sparkling apple cider", measure: "3 oz" }
    ]
  },
  {
    id: "mb_893",
    name: "Diplomat Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Maraschino", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_894",
    name: "Oldest Temptation",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "2 oz" },
      { ingredient: "Apple juice", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters, flamed lemon twist", measure: "1 oz" }
    ]
  },
  {
    id: "mb_895",
    name: "Ginger Grapefruit Rickey",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "2 oz" },
      { ingredient: "Ginger liqueur", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_896",
    name: "Calvados Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Calvados", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_897",
    name: "Daiquiri Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_898",
    name: "The Oaxaca Old-Fashioned",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "Mezcal", measure: "1/2 oz" },
      { ingredient: "Agave nectar", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_899",
    name: "Cuban Special Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Pineapple Juice", measure: "1 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_900",
    name: "Gaugin",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Passion Fruit Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_901",
    name: "The Nomad South",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Blood orange juice", measure: "1/2 oz" },
      { ingredient: "Agave nectar", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Whiskey barrel bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_902",
    name: "Creole Lady Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Kentucky Tavern Bourbon Whiskey", measure: "1 1/2 oz" },
      { ingredient: "Madeira", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_903",
    name: "No. 8",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "2 oz" },
      { ingredient: "Palo cortado or oloroso sherry", measure: "3/4 oz" },
      { ingredient: "Honey liqueur", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_904",
    name: "Fog Cutter",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Brandy", measure: "1/2 oz" },
      { ingredient: "Gin", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 1/2 oz" },
      { ingredient: "each Orange juice and sweet sherry", measure: "1 oz" },
      { ingredient: "Almond or orgeat syrup", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_905",
    name: "Mexicola",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_906",
    name: "Floridita No. 3",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_907",
    name: "Mexican Monk",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "2 oz" },
      { ingredient: "Dry Sherry", measure: "1/2 oz" },
      { ingredient: "Coffee liqueur", measure: "1/4 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_908",
    name: "Floridita No. 1",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "White creme de cacao", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_909",
    name: "Mexican Madras",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Cranberry Juice", measure: "2 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_910",
    name: "Cadiz",
    category: "Brandy",
    ingredients: [
      { ingredient: "Blackberry-flavored brandy", measure: "1/4 oz" },
      { ingredient: "Dry Sherry", measure: "1/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "half-and-half", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_911",
    name: "Chocolate Soldier Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Dubonnet", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_912",
    name: "Fireman's Sour",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_913",
    name: "Fat Like Buddha",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Dark rum", measure: "2 oz" },
      { ingredient: "Dubonnet Rouge", measure: "3/4 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_914",
    name: "Cherry Blossom Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Wild Cherry Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 1/2 oz" },
      { ingredient: "Lemon Juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_915",
    name: "Fair-and-Warmer Cocktail",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_916",
    name: "Chelsea Sidecar Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/4 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_917",
    name: "Mexican Firing Squad",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "pomegranate molasses (available at Middle Eastern grocers)", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_918",
    name: "Mexicana",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_919",
    name: "El Presidente Cocktail No. 2",
    category: "Rum - Daiquiris",
    ingredients: [
      { ingredient: "Light Rum", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_920",
    name: "Margarita Tequila",
    category: "Shooters",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Cointreau triple sec", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_921",
    name: "Lillypad",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "each Lillet Blanc and Lillet Rouge", measure: "1/2 oz" },
      { ingredient: "Apple juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Agave nectar", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_922",
    name: "X. Y. Z. Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Lemon Juice", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_923",
    name: "La Ultima Palabra",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "3/4 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Yellow Chartreuse", measure: "3/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_924",
    name: "La Perla",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "Manzanilla sherry", measure: "1 1/2 oz" },
      { ingredient: "Pear liqueur", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_925",
    name: "Bull's Milk",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 1/2 oz" },
      { ingredient: "Light Rum", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Milk", measure: "3 oz" }
    ]
  },
  {
    id: "mb_926",
    name: "La Bomba",
    category: "Tequila",
    ingredients: [
      { ingredient: "Gold tequila", measure: "1 1/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "1 1/2 oz" },
      { ingredient: "Grenadine, lime wheel", measure: "2 oz" }
    ]
  },
  {
    id: "mb_927",
    name: "Jinx Cocktail",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Blood orange liqueur", measure: "3/4 oz" },
      { ingredient: "Becherovka (Czech digestif)", measure: "3/4 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_928",
    name: "The Interesting Cocktail",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Aperol", measure: "1/2 oz" },
      { ingredient: "Dark creme de cacao", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Grapefruit twist", measure: "1 oz" }
    ]
  },
  {
    id: "mb_929",
    name: "Hot Pants",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Peppermint schnapps", measure: "1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "2 oz" }
    ]
  },
  {
    id: "mb_930",
    name: "High Plains Drifter No. 1",
    category: "Tequila",
    ingredients: [
      { ingredient: "Campari", measure: "1 oz" },
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "3/4 oz" },
      { ingredient: "Honey Syrup", measure: "3/4 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_931",
    name: "Hairy Sunrise",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "3/4 oz" },
      { ingredient: "Vodka", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "3 oz" },
      { ingredient: "Fresh grenadine", measure: "1 oz" }
    ]
  },
  {
    id: "mb_932",
    name: "Guadalajara",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 oz" },
      { ingredient: "Benedictine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_933",
    name: "Frostbite",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "White creme de cacao", measure: "3/4 oz" },
      { ingredient: "Heavy cream", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_934",
    name: "Flower Power",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 oz" },
      { ingredient: "Agave nectar", measure: "1/2 oz" },
      { ingredient: "Egg White", measure: "1 oz" },
      { ingredient: "Orange blossom water", measure: "3 oz" },
      { ingredient: "Peychaud's Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_935",
    name: "Cablegram Highball",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Powdered Sugar", measure: "1 oz" },
      { ingredient: "Old Thompson Blended Whiskey", measure: "2 oz" }
    ]
  },
  {
    id: "mb_936",
    name: "Cabaret Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Bitters", measure: "2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Benedictine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_937",
    name: "Bulla's Eye",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "1 oz" },
      { ingredient: "Hard cider", measure: "2 oz" }
    ]
  },
  {
    id: "mb_938",
    name: "El Oso (The Bear)",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "1  3/4 oz" },
      { ingredient: "Honey liqueur", measure: "3/4 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/2 oz" },
      { ingredient: "The Bitter Truth's Jerry Thomas' Own Decanter Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_939",
    name: "El Ni_o",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime wedges", measure: "6" },
      { ingredient: "Whole strawberry", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "3/4 oz" },
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Rose water", measure: "5 oz" }
    ]
  },
  {
    id: "mb_940",
    name: "El Molino",
    category: "Tequila",
    ingredients: [
      { ingredient: "Mezcal", measure: "1 1/2 oz" },
      { ingredient: "Palo cortado or oloroso sherry", measure: "3/4 oz" },
      { ingredient: "Allspice liqueur (pimento dram)", measure: "1/4 oz" },
      { ingredient: "White creme de cacao", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_941",
    name: "Bucks Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "orange juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_942",
    name: "Dirty Daisy",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "White Curacao", measure: "1 oz" },
      { ingredient: "Olive brine", measure: "1/2 oz" },
      { ingredient: "Balsamic vinegar", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_943",
    name: "Diablo",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Creme de Cassis", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_944",
    name: "Count Camillo's Paloma",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Campari", measure: "3/4 oz" },
      { ingredient: "Grapefruit soda", measure: "2 oz" }
    ]
  },
  {
    id: "mb_945",
    name: "Company B",
    category: "Tequila",
    ingredients: [
      { ingredient: "Whole strawberry, hulled", measure: "1 oz" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" },
      { ingredient: "Agave nectar, strawberry slice", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_946",
    name: "Chupa Cabra",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh grapefruit juice", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Campari", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters, lime wheel", measure: "1 oz" }
    ]
  },
  {
    id: "mb_947",
    name: "Chinchona",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "1 1/2 oz" },
      { ingredient: "Lillet Rouge", measure: "3/4 oz" },
      { ingredient: "Orange curacao", measure: "1/2 oz" },
      { ingredient: "Orange Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_948",
    name: "Chapala",
    category: "Tequila",
    ingredients: [
      { ingredient: "Reposado tequila", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Grenadine", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_949",
    name: "Bulldog Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "cherry-flavored brandy", measure: "1 1/2 oz" },
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_950",
    name: "Boston Sidecar Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "3/4 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "3/4 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_951",
    name: "Catalina Margarita",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Peach schnapps", measure: "1 oz" },
      { ingredient: "Blue curacao", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_952",
    name: "Camino Del Ray",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "1 3/4 oz" },
      { ingredient: "Oloroso sherry", measure: "1 oz" },
      { ingredient: "Drambuie", measure: "1/2 oz" },
      { ingredient: "Rhubarb bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_953",
    name: "Cactus Berry",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/4 oz" },
      { ingredient: "Red wine", measure: "1 1/4 oz" },
      { ingredient: "each Triple Sec, simple syrup", measure: "1/2 oz" },
      { ingredient: "each Fresh lemon juice, fresh lime juice", measure: "1/4 oz" },
      { ingredient: "Lemon-lime soda", measure: "1 oz" }
    ]
  },
  {
    id: "mb_954",
    name: "Bolero Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Rum", measure: "1 1/2 oz" },
      { ingredient: "Apple Brandy", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_955",
    name: "Bum's Rush",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Honey liqueur", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Fresh apple cider", measure: "1 oz" }
    ]
  },
  {
    id: "mb_956",
    name: "Brave Bull",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Coffee liqueur", measure: "1 oz" }
    ]
  },
  {
    id: "mb_957",
    name: "Blue Margarita",
    category: "Tequila",
    ingredients: [
      { ingredient: "Lime juice, coarse salt", measure: "For glass" },
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Blue curacao", measure: "1/2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_958",
    name: "Bloody Maria",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Tomato Juice", measure: "2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1/4 oz" },
      { ingredient: "Hot red pepper sauce", measure: "1 oz" },
      { ingredient: "Celery Salt", measure: "1 oz" }
    ]
  },
  {
    id: "mb_959",
    name: "Pineapple Dream Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Juice of a Lime", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Imported Rum", measure: "1 oz" }
    ]
  },
  {
    id: "mb_960",
    name: "Big Red Hooter",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 oz" },
      { ingredient: "Amaretto", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "2 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_961",
    name: "Blood Bronx Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Juice of a Blood Orange", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_962",
    name: "Bravo",
    category: "Tequila",
    ingredients: [
      { ingredient: "Anejo tequila", measure: "2 oz" },
      { ingredient: "Agave nectar", measure: "1/4 oz" },
      { ingredient: "Angostura Bitters", measure: "2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_963",
    name: "Amante Picante",
    category: "Tequila",
    ingredients: [
      { ingredient: "Cucumber", measure: "2 oz" },
      { ingredient: "Fresh cilantro sprigs", measure: "2 oz" },
      { ingredient: "Blanco tequila", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Simple Syrup", measure: "1 oz" },
      { ingredient: "Jalapeno hot pepper sauce, cucumber slice", measure: "2 oz" }
    ]
  },
  {
    id: "mb_964",
    name: "Brunswick Street Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Cognac", measure: "1 1/2 oz" },
      { ingredient: "Sweet sherry, preferably Pedro Ximenez", measure: "1 1/2 oz" },
      { ingredient: "Egg Yolk", measure: "1 oz" }
    ]
  },
  {
    id: "mb_965",
    name: "Black Hawk Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Thompson Blended Whiskey", measure: "1 1/4 oz" },
      { ingredient: "Old Mr. Boston Sloe Gin", measure: "1 1/4 oz" }
    ]
  },
  {
    id: "mb_966",
    name: "Alamo Splash",
    category: "Tequila",
    ingredients: [
      { ingredient: "Blanco tequila", measure: "1 1/2 oz" },
      { ingredient: "Orange juice", measure: "1 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" },
      { ingredient: "Lemon-lime soda", measure: "1 oz" }
    ]
  },
  {
    id: "mb_967",
    name: "Betsy Ross Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Five Star Brandy", measure: "1 1/2 oz" },
      { ingredient: "Port", measure: "1 1/2 oz" },
      { ingredient: "Old Mr. Boston Triple Sec", measure: "1 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/4 oz" }
    ]
  },
  {
    id: "mb_968",
    name: "Bermuda Rose Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 1/4 oz" },
      { ingredient: "Old Mr. Boston Apricot Flavored Brandy", measure: "1 1/2 oz" },
      { ingredient: "Grenadine", measure: "1 1/2 oz" }
    ]
  },
  {
    id: "mb_969",
    name: "Yokahama Romance",
    category: "Gin",
    ingredients: [
      { ingredient: "Sake", measure: "2 1/2 oz" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Maraschino liqueur", measure: "1/4 oz" },
      { ingredient: "Unsprayed rose petal", measure: "1 oz" }
    ]
  },
  {
    id: "mb_970",
    name: "Yale Cocktail",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Blue curacao", measure: "1 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_971",
    name: "Xanthia Cocktail",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "cherry-flavored brandy", measure: "3/4 oz" },
      { ingredient: "Yellow Chartreuse", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_972",
    name: "Woodstock",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" },
      { ingredient: "Maple Syrup", measure: "1 1/2 oz" },
      { ingredient: "Orange Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_973",
    name: "Wolf's Bite",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "1 oz" },
      { ingredient: "Green Chartreuse", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_974",
    name: "Barbary Coast Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Rum", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Creme de Cacao", measure: "1/2 oz" },
      { ingredient: "Desmond & Duff Scotch Whisky", measure: "1/2 oz" },
      { ingredient: "Sweet Cream", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_975",
    name: "The Winkle",
    category: "Gin",
    ingredients: [
      { ingredient: "Fresh sage leaves", measure: "3 oz" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" },
      { ingredient: "Limoncello", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/2 oz" },
      { ingredient: "Raspberries, lemon twist", measure: "4 oz" }
    ]
  },
  {
    id: "mb_976",
    name: "The Wink",
    category: "Gin",
    ingredients: [
      { ingredient: "Absinthe", measure: "1 splash" },
      { ingredient: "Gin", measure: "2 oz" },
      { ingredient: "Triple Sec", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" },
      { ingredient: "Peychaud's Bitters", measure: "2 oz" }
    ]
  },
  {
    id: "mb_977",
    name: "Will Rogers",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Orange juice", measure: "1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_978",
    name: "Brandy Vermouth Cocktail",
    category: "Brandy",
    ingredients: [
      { ingredient: "Brandy", measure: "2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Angostura Bitters", measure: "1 oz" }
    ]
  },
  {
    id: "mb_979",
    name: "White Spider",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "1/2 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  },
  {
    id: "mb_980",
    name: "White Lady",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_981",
    name: "Western Rose",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" },
      { ingredient: "Fresh lemon juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_982",
    name: "May Blosson Fizz",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Grenadine", measure: "1 oz" },
      { ingredient: "Juice of a Lemon", measure: "1/2 oz" },
      { ingredient: "Swedish Punch", measure: "2 oz" }
    ]
  },
  {
    id: "mb_983",
    name: "Wembly Cocktail",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "3/4 oz" },
      { ingredient: "Apple Brandy", measure: "1/2 oz" },
      { ingredient: "Apricot-Flavored Brandy", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_984",
    name: "Apple Pie Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Old Mr. Boston Rum", measure: "3/4 oz" },
      { ingredient: "Sweet Vermouth", measure: "3/4 oz" },
      { ingredient: "Apple Flavored Brandy", measure: "1 oz" },
      { ingredient: "Grenadine", measure: "1/2 oz" },
      { ingredient: "Lemon Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_985",
    name: "Water Lily",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Creme de violette", measure: "3/4 oz" },
      { ingredient: "Fresh lemon juice", measure: "3/4 oz" }
    ]
  },
  {
    id: "mb_986",
    name: "Wallis Blue Cocktail",
    category: "Gin",
    ingredients: [
      { ingredient: "Lime wedge, superfine sugar", measure: "1" },
      { ingredient: "Gin", measure: "1 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1 oz" }
    ]
  },
  {
    id: "mb_987",
    name: "Minnehaha Cocktail",
    category: "Cocktail Classics",
    ingredients: [
      { ingredient: "Juice of Orange", measure: "1/4 oz" },
      { ingredient: "Dry Vermouth", measure: "1/2 oz" },
      { ingredient: "Sweet Vermouth", measure: "1/2 oz" },
      { ingredient: "Old Mr. Boston Dry Gin", measure: "1 oz" }
    ]
  },
  {
    id: "mb_988",
    name: "Wallick Cocktail",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Dry Vermouth", measure: "1 1/2 oz" },
      { ingredient: "Triple Sec", measure: "1 oz" }
    ]
  },
  {
    id: "mb_989",
    name: "Waikiki Beachcomber",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "3/4 oz" },
      { ingredient: "Triple Sec", measure: "3/4 oz" },
      { ingredient: "Pineapple Juice", measure: "1/2 oz" }
    ]
  },
  {
    id: "mb_990",
    name: "Vow Of Silence",
    category: "Gin",
    ingredients: [
      { ingredient: "Gin", measure: "1 1/2 oz" },
      { ingredient: "Grapefruit Juice", measure: "3/4 oz" },
      { ingredient: "Fresh Lime Juice", measure: "1/2 oz" },
      { ingredient: "Yellow Chartreuse", measure: "1/2 oz" },
      { ingredient: "Amaro", measure: "1/4 oz" },
      { ingredient: "Simple Syrup", measure: "1/4 oz" }
    ]
  }
];

// Catégories disponibles
export const bostonCategories = Array.from(new Set(bostonCocktails.map(c => c.category))).sort();

// Recherche locale
export const searchBostonCocktails = (query: string): BostonCocktail[] => {
  const q = query.toLowerCase();
  return bostonCocktails.filter(c => 
    c.name.toLowerCase().includes(q) ||
    c.ingredients.some(i => i.ingredient.toLowerCase().includes(q))
  );
};

// Obtenir par catégorie
export const getBostonByCategory = (category: string): BostonCocktail[] => {
  return bostonCocktails.filter(c => c.category === category);
};

// Obtenir par première lettre
export const getBostonByLetter = (letter: string): BostonCocktail[] => {
  return bostonCocktails.filter(c => c.name.toUpperCase().startsWith(letter.toUpperCase()));
};

// Cocktail aléatoire
export const getRandomBostonCocktail = (): BostonCocktail => {
  return bostonCocktails[Math.floor(Math.random() * bostonCocktails.length)];
};

export default bostonCocktails;
