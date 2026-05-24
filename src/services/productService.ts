import axiosInstance from "@/lib/axios";

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  stock: boolean;
  images: string[];
  ratings: number;
  numReviews: number;
  reviews: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
  totalProducts?: number;
  totalPages?: number;
  currentPage?: number;
}

export interface ProductFilters {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
}

// Get all products with filters
export const getProducts = async (filters?: ProductFilters): Promise<ProductsResponse> => {
  const params = new URLSearchParams();

  if (filters?.page) params.append("page", String(filters.page));
  if (filters?.limit) params.append("limit", String(filters.limit));
  if (filters?.category) params.append("category", filters.category);
  if (filters?.search) params.append("search", filters.search);
  if (filters?.minPrice) params.append("minPrice", String(filters.minPrice));
  if (filters?.maxPrice) params.append("maxPrice", String(filters.maxPrice));
  if (filters?.sort) params.append("sort", filters.sort);

  const response = await axiosInstance.get<ProductsResponse>(
    `/products/all?${params.toString()}`
  );
  return response.data;
};

// Get single product by slug
export const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/products/${slug}`);
  return response.data;
};

// Get categories
export const getCategories = async (): Promise<string[]> => {
  const response = await axiosInstance.get<ProductsResponse>(
    "/products/all?limit=1000"
  );
  const categories = [
    ...new Set(
      response.data.products
        .map((p) => p.category)
        .filter((cat) => cat && cat.trim() !== "")
    ),
  ] as string[];
  return categories;
};
