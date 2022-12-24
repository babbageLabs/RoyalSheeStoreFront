import {EcommerceProvider, formatPrice, FullProduct, ProductsResult} from "~/models/ecommerce-provider.server";
import Medusa from "@medusajs/medusa-js"
import {StoreProductsListRes, StoreProductsRes} from "@medusajs/medusa";
import {getTranslations} from "~/translations.server";
import {Decimal} from "decimal.js";
import {RequestResponseCache} from "~/models/request-response-cache.server";

export interface MedusaProviderOptions {
    cache?: RequestResponseCache;
    maxRetries: number;
    shop: string;
    apiKey?: string;
}

export function createMedusaProvider(options: MedusaProviderOptions): EcommerceProvider {
    const medusa = new Medusa({
        maxRetries: options.maxRetries,
        baseUrl: options.shop,
        apiKey: options.apiKey
    })


    return {
        async getCartInfo(locale, items) {
            let translations = getTranslations(locale, ["Calculated at checkout"]);

            // TODO
            let subtotal = new Decimal(0);
            let formattedSubTotal = formatPrice({
                amount: subtotal.toDecimalPlaces(2).toString(),
                currencyCode: 'KES',
            });

            return {
                formattedShipping: translations["Calculated at checkout"],
                formattedSubTotal: formattedSubTotal,
                formattedTaxes: translations["Calculated at checkout"],
                formattedTotal: formattedSubTotal,
                items: [],
            };
        },
        async getCategories(locale, count, nocache) {
            const collections = await medusa.collections.list()

            return collections.collections.map(col => ({
                name: col.title,
                slug: col.handle
            }))

        },
        async getCheckoutUrl(locale, items) {
            //TODO
            return ''
        },
        async getFeaturedProducts(locale) {
            let products = await medusa.products.list({
                limit: 30,
                offset: 0
            })

            return parseProducts(products).then(prods => prods.products)
        },
        async getPage(locale, slug) {
            return null
        },
        async getPages(locale) {
            return []
        },
        async getProduct(locale, slug, selectedOptions) {
            const product = await medusa.products.retrieve(slug)

            return parseProduct(product)
        },
        async getProducts(
            locale,
            category,
            sort,
            search,
            cursor,
            perPage = 30,
            page = 1,
            nocache
        ) {
            let products = await medusa.products.list({
                limit: perPage,
                offset: perPage * (page - 1)
            })

            return parseProducts(products)
        },
        async getSortByOptions(locale) {
            return []
        },
        async getWishlistInfo(locale, items) {
            return null
        }
    }
}

async function parseProducts(products: StoreProductsListRes): Promise<ProductsResult> {
    return {
        hasNextPage: true,
        products: products.products.map(prod => ({
            id: prod.id,
            title: prod.title,
            formattedPrice: "100",// TODO remove this hard code,
            // image: prod.images[0] || "",
            image: prod.thumbnail || "",
            slug: prod.id || "",
            defaultVariantId: prod.variants[0].title || ""
        }))
    }
}

async function parseProduct(product: StoreProductsRes): Promise<FullProduct> {
    return {
        defaultVariantId: "",
        descriptionHtml: "",
        formattedOptions: "",
        formattedPrice: "",
        id: product.product.id,
        image: product.product.thumbnail || product.product.images[0].url || "",
        selectedVariantId: "",
        slug: product.product.id,
        title: product.product.title,
        description: product.product.description || "",
        images: product.product.images.map(img => img.url),
        availableForSale: true, // TODO fix this hard code
        options: product.product.options.map(opt => ({
            name: opt.title,
            values: opt.values.map(o => o.value)
        }))
    }
}

