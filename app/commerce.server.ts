import { createShopifyProvider } from "./models/ecommerce-providers/shopify.server";
import { createMedusaProvider } from "./models/ecommerce-providers/medusa.server";
import { createSwrRedisCache } from "./models/request-response-caches/swr-redis-cache.server";
import redisClient from "./redis.server";
import * as process from "process";

enum StoreProviders {
  Medusa = 'medusa',
  Shopify = 'shopify'
}

let commerce
const storeProvider = process.env.STORE_PROVIDER
if (!storeProvider) {
  throw new Error(
      "STORE_PROVIDER environment variable is not set"
  );
}

switch (storeProvider) {
  case StoreProviders.Shopify:
    if (!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      throw new Error(
          "SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set"
      );
    }

    commerce = createShopifyProvider({
      shop: process.env.SHOPIFY_STORE!,
      storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      maxAgeSeconds: 60,
      cache: createSwrRedisCache({
        redisClient,
      }),
    });
    break
  case StoreProviders.Medusa:
    if (!process.env.MEDUSA_STORE) {
      throw new Error(
          "MEDUSA_STORE environment variable is not set"
      );
    }
    commerce = createMedusaProvider({
      apiKey: process.env.MEDUSA_API_KEY,
      shop: process.env.MEDUSA_STORE,
      maxRetries: 3
    })
    break
  default:
    throw new Error(
        "STORE_PROVIDER environment variable is not valid"
    );
}
export default commerce;
