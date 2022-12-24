import { Language } from "~/models/language";

export function getTranslations<
  RequestedTranslations extends keyof Translations
>(lang: Language, requestedTranslations: Array<RequestedTranslations>) {
  let results: Record<RequestedTranslations, string> = {} as any;
  for (let translation of requestedTranslations) {
    results[translation] = translations[translation][lang];
  }

  return results;
}

type Translations = typeof translations;
export type PickTranslations<TranslationKeys extends keyof Translations> =
  Record<TranslationKeys, string>;

let translations = {
  All: {
    en: "All",
    es: "Todo",
    sw: 'Zote'
  },
  Cart: {
    en: "Shopping Cart",
    es: "Carrito de compras",
    sw: 'troli'
  },
  "Close Menu": {
    en: "Close Menu",
    es: "Cerrar menú",
    'sw': "Funga menyu"
  },
  English: {
    en: "English",
    es: "Inglés",
    sw: "Kingereza"
  },
  Home: {
    en: "Home",
    es: "Inicio",
    sw: "Nyumbani",
  },
  "Open Menu": {
    en: "Open Menu",
    es: "Abrir menú",
    sw: "Fungua menyu",
  },
  "Search for products...": {
    en: "Search for products...",
    es: "Buscar productos...",
    sw: "Tafuta bidhaa...",
  },
  Spanish: {
    en: "Spanish",
    es: "Español",
    sw: "Kihispania"
  },
  "Store Name": {
    en: "Royal Shee",
    es: "Royal Shee",
    sw: "Royal Shee",
  },
  Wishlist: {
    en: "Wishlist",
    es: "Lista de deseos",
    sw: "Orodha ya matamanio"
  },
  "Price: High to low": {
    en: "Price: High to low",
    es: "Precio: de mayor a menor",
    sw: "Bei: Juu hadi chini"
  },
  "Price: Low to high": {
    en: "Price: Low to high",
    es: "Precio: de menor a mayor",
    sw: "Bei: chini hadi juu"
  },
  "Latest arrivals": {
    en: "Latest arrivals",
    es: "Últimos arrivos",
    sw: "Bidhaa zilizo wasili hivi karibuni"
  },
  Trending: {
    en: "Trending",
    es: "Tendencias",
    sw: "Zinazovuma"
  },
  "Looks like your language doesn't match": {
    en: "Looks like your language doesn't match",
    es: "Parece que tu idioma no coincide",
    sw: "Inoonekena kama lugha yako haiambatani"
  },
  "Would you like to switch to $1?": {
    en: "Would you like to switch to $1?",
    es: "¿Quieres cambiar a $1?",
  },
  Yes: {
    en: "Yes",
    es: "Sí",
    sw: "Ndio"
  },
  No: {
    en: "No",
    es: "No",
    sw: "Hapana"
  },
  Close: {
    en: "Close",
    es: "Cerrar",
    sw: "Funga"
  },
  "Your cart is empty": {
    en: "Your cart is empty",
    es: "Tu carrito está vacío",
    sw: "Gari la ununuzi halina bidhaa"
  },
  "Add to cart": {
    en: "Add to cart",
    es: "Añadir al carrito",
    sw: "Ongezea kwenye gari la ununuzi"
  },
  Adding: {
    en: "Adding...",
    es: "Agregando...",
    sw: "Ongeza..."
  },
  "Added!": {
    en: "Added!",
    es: "¡Adicional!",
    sw: "Imeongezwa!"
  },
  "Sold out": {
    en: "Sold out",
    es: "No disponible",
    sw: "Imeuzwa"
  },
  "Quantity: $1": {
    en: "Quantity: $1",
    es: "Cantidad: $1",
    sw: "Kiwango : $1"
  },
  "Remove from cart": {
    en: "Remove from cart",
    es: "Eliminar del carrito",
    sw: "Toa kwenye gari la ununuzi"
  },
  "Subtract item": {
    en: "Subtract item",
    es: "Restar item",
    sw: "Ondoa kipengee"
  },
  "Add item": {
    en: "Add item",
    es: "Añadir item",
    sw: "Ongeza kipengee"
  },
  "Calculated at checkout": {
    en: "Calculated at checkout",
    es: "Calculado al pagar",
    sw: "Inahesabiwa wakati wa kuondoka"
  },
  "Proceed to checkout": {
    en: "Proceed to checkout",
    es: "Proceder a pagar",
    sw: "Endelea kulipia"
  },
  Subtotal: {
    en: "Subtotal",
    es: "Subtotal",
    sw: "Jumla ndogo",
  },
  Total: {
    en: "Total",
    es: "Total",
    sw: "Jumla"
  },
  Taxes: {
    en: "Taxes",
    es: "Impuestos",
    sw: "Kodi"
  },
  Shipping: {
    en: "Shipping",
    es: "Envío",
    sw: "Usafirishaji"
  },
  "Your wishlist is empty": {
    en: "Your wishlist is empty",
    es: "Tu lista de deseos está vacía",
    "sw": "orodha yako ya matamanio haina bidhaa"
  },
  "Remove from wishlist": {
    en: "Remove from wishlist",
    es: "Eliminar de la lista de deseos",
    sw: "Toa kutoka kwa orodha yako ya matamanio"
  },
  "Move to cart": {
    en: "Move to cart",
    es: "Mover al carrito",
    sw: "Sogeza kwa gari lako la ununuzi"
  },
  "Add to wishlist": {
    en: "Add to wishlist",
    es: "Añadir a la lista de deseos",
    sw: "Ongeza kwa orodha lako la matamanio"
  },

  MockCTAHeadline: {
    en: "Dessert dragée halvah croissant.",
    es: "Dessert dragée halvah croissant.",
  },
  MockCTADescription: {
    en: "Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake.",
    es: "Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake.",
  },
  MockCTALink: {
    en: "Read it here",
    es: "Leerlo aquí",
  },
};
