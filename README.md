# React Router Tutorial

## Introduction to React Router

React Router is the standard routing library for React applications. It enables the implementation of dynamic, client-side routing in single-page applications (SPAs). Unlike traditional server-side routing, React Router allows your application to update the URL without making a request to the server for a new document.

### Why Use React Router?

- **Dynamic Routing**: Routes are defined as part of your component hierarchy, not in a centralized configuration.
- **Nested UI**: Routing is just component composition, so you can create complex UIs with nested routes.
- **History Management**: Provides seamless history management, allowing users to navigate with the browser's back and forward buttons.
- **Server-Side Rendering Support**: Works well with server-side rendering for improved SEO and initial load performance.

## Installation and Setup

To get started with React Router, you need to install it in your project:

```bash
npm install react-router-dom
```

Or if you're using Yarn:

```bash
yarn add react-router-dom
```

### Basic Setup

To set up React Router in your application, you need to wrap your app with a router component. React Router v6 provides several router components, but the most commonly used are:

- `BrowserRouter`: Uses the HTML5 history API for clean URLs
- `HashRouter`: Uses the hash portion of the URL (for legacy browsers)
- `MemoryRouter`: Keeps history in memory (useful for testing)

Here's how to set up the router in your main application file:

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

## Basic Routing

React Router v6 uses a declarative approach to routing. You define your routes using the `Routes` and `Route` components.

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
```

In this example:
- The `Routes` component acts as a container for all your route definitions
- Each `Route` component maps a URL path to a React component
- The `path="*"` route acts as a catch-all for any undefined routes (404 page)

## Route Parameters

Dynamic segments in your routes are called parameters. They allow you to capture values from the URL.

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:userId" element={<UserProfile />} />
    </Routes>
  );
}
```

In the `UserProfile` component, you can access the parameter using the `useParams` hook:

```jsx
// src/pages/UserProfile.jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
```

## Nested Routes

React Router v6 makes it easy to create nested routes, which are essential for complex UIs with multiple levels of navigation.

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import DashboardStats from './pages/DashboardStats';
import DashboardSettings from './pages/DashboardSettings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<DashboardOverview />} />
        <Route path="stats" element={<DashboardStats />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
}
```

In the parent component, you need to specify where the nested routes should render using the `Outlet` component:

```jsx
// src/pages/Dashboard.jsx
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
}

export default Dashboard;
```

## Layout Routes

Layout routes allow you to create consistent layouts across multiple routes.

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';

function App() {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
      {/* Admin layout routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  );
}
```

The layout components would use the `Outlet` component to render the nested routes:

```jsx
// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
```

## Index Routes

Index routes render at the parent's URL and are useful for default child routes.

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Renders at the "/" path */}
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
```

## Navigation

React Router provides several ways to navigate between routes.

### Link Component

The `Link` component is the primary way to navigate between routes:

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
```

### NavLink Component

The `NavLink` component is similar to `Link` but provides styling attributes when the link is active:

```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
```

### Programmatic Navigation

For programmatic navigation (e.g., after form submission), use the `useNavigate` hook:

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login logic
    const success = await loginUser(formData);
    
    if (success) {
      navigate('/dashboard'); // Navigate to dashboard after successful login
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
    </form>
  );
}
```

## Route Hooks

React Router provides several hooks to access routing information and functionality.

### useParams

Retrieves dynamic parameters from the current URL:

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  
  return <div>Product ID: {productId}</div>;
}
```

### useNavigate

Returns a function that lets you navigate programmatically:

```jsx
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/orders')}>
      View All Orders
    </button>
  );
}
```

### useLocation

Returns the current location object:

```jsx
import { useLocation } from 'react-router-dom';

function Analytics() {
  const location = useLocation();
  
  // Log page views
  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);
  
  return <div>Current page: {location.pathname}</div>;
}
```

### useSearchParams

Provides access to the query parameters in the URL:

```jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  
  return (
    <div>
      <h1>Products - {category}</h1>
      <button onClick={() => setSearchParams({ category: 'electronics' })}>
        Electronics
      </button>
      <button onClick={() => setSearchParams({ category: 'clothing' })}>
        Clothing
      </button>
    </div>
  );
}
```

### useMatch

Checks if the current URL matches a specific pattern:

```jsx
import { useMatch } from 'react-router-dom';

function AdminBadge() {
  const match = useMatch('/admin/*');
  
  return match ? <span className="admin-badge">Admin Area</span> : null;
}
```

## Protected Routes

Protected routes restrict access to certain routes based on authentication status or permissions.

```jsx
// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) {
    // Redirect to login page but save the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

export default ProtectedRoute;
```

Using the protected route component:

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}
```

## Query Parameters

Query parameters are useful for filtering, sorting, or pagination.

```jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get query parameters with defaults
  const page = parseInt(searchParams.get('page') || '1');
  const sort = searchParams.get('sort') || 'newest';
  const category = searchParams.get('category') || 'all';
  
  // Update query parameters
  const handleSortChange = (event) => {
    setSearchParams({
      page,
      sort: event.target.value,
      category
    });
  };
  
  const handleNextPage = () => {
    setSearchParams({
      page: page + 1,
      sort,
      category
    });
  };
  
  return (
    <div>
      <div>
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>
      
      {/* Product list */}
      
      <div>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}
```

## Route Configuration

For complex applications, you might want to define your routes in a separate configuration file.

```jsx
// src/routes/index.js
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import DashboardOverview from '../pages/DashboardOverview';
import DashboardStats from '../pages/DashboardStats';
import UserProfile from '../pages/UserProfile';
import NotFound from '../pages/NotFound';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <DashboardOverview />,
      },
      {
        path: 'stats',
        element: <DashboardStats />,
      },
    ],
  },
  {
    path: '/users/:userId',
    element: <UserProfile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
```

Then use the `useRoutes` hook to create your routing structure:

```jsx
// src/App.jsx
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  
  return element;
}

export default App;
```

## Lazy Loading Routes

For larger applications, you can improve performance by lazy loading routes using React's `lazy` and `Suspense`.

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Eagerly loaded components
import Home from './pages/Home';
import Loading from './components/Loading';

// Lazily loaded components
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
```

## Error Handling

React Router v6 provides an `ErrorBoundary` component to handle errors in your routes.

```jsx
// src/components/ErrorBoundary.jsx
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message || 'An unexpected error occurred'}</p>
      <button onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
  );
}

export default ErrorBoundary;
```

Using the error boundary with routes:

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/dashboard/*" 
        element={<Dashboard />} 
        errorElement={<ErrorBoundary />} 
      />
    </Routes>
  );
}
```

## Data Loading

React Router v6.4+ introduced a data loading API that allows you to load data before rendering a route.

```jsx
// src/pages/Products.jsx
import { useLoaderData } from 'react-router-dom';

// Loader function
export async function loader() {
  const response = await fetch('/api/products');
  
  if (!response.ok) {
    throw new Error('Failed to load products');
  }
  
  return response.json();
}

function Products() {
  const products = useLoaderData();
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
```

Configure the loader in your route definition:

```jsx
// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products, { loader as productsLoader } from './pages/Products';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/products',
    element: <Products />,
    loader: productsLoader,
    errorElement: <ErrorBoundary />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

## Best Practices

### 1. Organize Routes Logically

Group related routes together and use nested routes for hierarchical UIs.

### 2. Use Dynamic Imports for Code Splitting

Lazy load routes to improve initial load performance.

### 3. Implement Proper Error Handling

Use error boundaries to gracefully handle routing and data loading errors.

### 4. Create Reusable Layout Components

Use layout routes to maintain consistent UI across related routes.

### 5. Keep URLs Clean and Semantic

Use descriptive, hierarchical paths that reflect your application's structure.

### 6. Implement Proper Redirects

Use redirects for moved content or after form submissions.

```jsx
<Route path="/old-path" element={<Navigate to="/new-path" replace />} />
```

### 7. Handle Authentication Properly

Implement protected routes and maintain the user's intended destination after login.

### 8. Use Query Parameters for Filtering and Sorting

Keep UI state in the URL when appropriate to make states shareable and bookmarkable.

### 9. Implement Scroll Restoration

Restore scroll position when navigating back or to new routes.

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
```

### 10. Test Your Routes

Write tests for your routing logic to ensure it works as expected.

## Examples

### Basic Navigation Example

```jsx
// src/components/Navigation.jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
```

### Complete App with Authentication

```jsx
// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    setUser(userData);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
```

### Dynamic Routes with Data Loading

```jsx
// src/pages/ProductDetail.jsx
import { useParams, useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const response = await fetch(`/api/products/${params.productId}`);
  
  if (!response.ok) {
    throw new Error('Product not found');
  }
  
  return response.json();
}

function ProductDetail() {
  const product = useLoaderData();
  
  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
```
