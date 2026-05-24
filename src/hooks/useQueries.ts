import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProducts, getProductBySlug, getCategories, ProductFilters, Product, ProductsResponse } from "@/services/productService";

// Fetch all products with optional filters
export const useProducts = (
  filters?: ProductFilters,
  enabled: boolean = true
): UseQueryResult<ProductsResponse, unknown> => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
    enabled,
  });
};

// Fetch single product by slug
export const useProduct = (
  slug: string,
  enabled: boolean = true
): UseQueryResult<Product, unknown> => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    enabled,
  });
};

// Fetch all categories
export const useCategories = (
  enabled: boolean = true
): UseQueryResult<string[], unknown> => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    staleTime: 1000 * 60 * 30, // 30 minutes
    enabled,
  });
};
