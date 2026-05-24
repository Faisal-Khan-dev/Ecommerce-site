# State Management & API Setup Guide

## Project Structure

```
src/
├── lib/
│   └── axios.ts                 # Axios instance configuration
├── services/
│   ├── productService.ts        # Product API calls
│   └── authService.ts           # Authentication API calls
├── store/
│   ├── index.ts                 # Redux store configuration
│   ├── hooks.ts                 # Custom Redux hooks
│   └── slices/
│       ├── productsSlice.ts     # Products Redux slice
│       └── authSlice.ts         # Auth Redux slice
├── hooks/
│   └── useQueries.ts            # TanStack Query hooks
└── providers.tsx                # Redux & TanStack Query providers
```

## Features

### 1. **Axios Instance** (`src/lib/axios.ts`)
- Configured base URL from environment variables
- Request/Response interceptors
- Token management for authentication
- 30s timeout configuration
- Auto-adds Bearer token to requests

### 2. **Services** (`src/services/`)

#### Product Service
- `getProducts()` - Fetch all products with filters
- `getProductBySlug()` - Get single product
- `getCategories()` - Get all categories

#### Auth Service
- `login()` - User login
- `register()` - User registration
- `logout()` - User logout
- `getCurrentUser()` - Fetch current user

### 3. **Redux Toolkit** (`src/store/`)

#### Products Slice
- State: products, loading, error, pagination, selectedCategory
- Actions: setSelectedCategory, setCurrentPage, clearError
- Async Thunk: fetchProducts

#### Auth Slice
- State: user, isAuthenticated, loading, error, token
- Actions: logout, clearError
- Async Thunks: loginUser, registerUser, fetchCurrentUser

### 4. **TanStack Query Hooks** (`src/hooks/useQueries.ts`)
- `useProducts()` - Fetch products with filters
- `useProduct()` - Fetch single product
- `useCategories()` - Fetch categories

### 5. **Providers** (`src/providers.tsx`)
- Redux Store Provider
- TanStack Query Client Provider
- Configured with sensible defaults

## Usage Examples

### Using Redux with Async Thunks

```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProducts, setSelectedCategory } from '@/store/slices/productsSlice';

export function ProductList() {
  const dispatch = useAppDispatch();
  const { products, loading, selectedCategory } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ category: selectedCategory, limit: 10 }));
  }, [dispatch, selectedCategory]);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Using TanStack Query

```typescript
import { useProducts, useCategories } from '@/hooks/useQueries';

export function ProductShop() {
  const { data, isLoading, error } = useProducts({ limit: 20 });
  const { data: categories } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {data?.products.map(product => (
        <div key={product._id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Using Axios Directly

```typescript
import axiosInstance from '@/lib/axios';

const response = await axiosInstance.get('/products/all');
```

## Environment Variables

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## Token Management

Tokens are automatically:
- Saved to localStorage on login
- Added to all requests as Bearer token
- Cleared on logout
- Handled on 401 unauthorized responses

## Query Configuration

TanStack Query default settings:
- staleTime: 5 minutes
- gcTime: 10 minutes
- retry: 1
- refetchOnWindowFocus: false

## Recommendation

For this project:
- Use **Redux Toolkit** for global auth state
- Use **TanStack Query** for product data (with caching)
- Use **Axios** for all API calls
