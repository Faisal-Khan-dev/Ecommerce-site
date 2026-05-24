import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, ProductFilters, Product } from "@/services/productService";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  selectedCategory: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  totalProducts: 0,
  totalPages: 0,
  currentPage: 1,
  selectedCategory: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters: ProductFilters, { rejectWithValue }) => {
    try {
      const response = await getProducts(filters);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalProducts = action.payload.totalProducts || 0;
        state.totalPages = action.payload.totalPages || 0;
        state.currentPage = action.payload.currentPage || 1;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedCategory, setCurrentPage, clearError } =
  productsSlice.actions;
export default productsSlice.reducer;
