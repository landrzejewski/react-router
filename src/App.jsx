import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import DashboardStats from './pages/DashboardStats';
import DashboardSettings from './pages/DashboardSettings';
import NotFound from './pages/NotFound';
import LoadingFallback from './components/LoadingFallback';
import { productsLoader } from './pages/Products';
import './App.css';

// Lazy loaded components
const Products = lazy(() => import('./pages/Products'));
const Settings = lazy(() => import('./pages/Settings'));

// Product detail loader
async function productDetailLoader({ params }) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return mock product data
  return {
    id: params.productId,
    name: `Product ${params.productId}`,
    price: Math.floor(Math.random() * 100) + 10,
    description: `This is a detailed description for product ${params.productId}. It includes all the specifications and features of this amazing product.`,
    features: [
      'High quality materials',
      'Durable construction',
      'Modern design',
      'Easy to use'
    ],
    rating: (Math.random() * 5).toFixed(1),
    reviews: Math.floor(Math.random() * 500)
  };
}

// Create the router with all routes
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Basic routes
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      
      // Products routes with loader
      {
        path: 'products',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
        ),
        loader: productsLoader
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
        loader: productDetailLoader
      },
      
      // Lazily loaded routes
      {
        path: 'settings',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Settings />
          </Suspense>
        )
      },
      // Nested routes
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardOverview />
          },
          {
            path: 'stats',
            element: <DashboardStats />
          },
          {
            path: 'settings',
            element: <DashboardSettings />
          }
        ]
      },
      
      // 404 route - must be last
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

// App component is no longer needed with RouterProvider
function App() {
  return <Outlet />;
}

export default App;

/*
// routes.tsx
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Layout = lazy(() => import('./components/Layout'));

const loader = async () => {
  // Example loader function
  return { data: 'some loaded data' };
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        loader,
        element: (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

 */