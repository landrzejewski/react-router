import React from 'react';
import { useSearchParams, Link, useLoaderData } from 'react-router-dom';

// Loader function to fetch products data
export async function productsLoader() {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock product data
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    description: `This is a description for product ${i + 1}`,
    category: ['Electronics', 'Clothing', 'Books', 'Home'][Math.floor(Math.random() * 4)]
  }));
}

function Products() {
  // Get search parameters from the URL
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get page and pageSize from URL parameters, with defaults
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
  
  // Get products data from loader
  const products = useLoaderData();
  
  // Calculate pagination
  const totalPages = Math.ceil(products.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);
  
  // Handle page change
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString(), pageSize: pageSize.toString() });
  };
  
  // Handle page size change
  const handlePageSizeChange = (event) => {
    const newPageSize = event.target.value;
    setSearchParams({ page: '1', pageSize: newPageSize });
  };
  
  return (
    <div className="page">
      <h1>Products</h1>
      
      <div className="pagination-info">
        <p>
          <strong>Current Page:</strong> {page} of {totalPages}
        </p>
        <p>
          <strong>Items Per Page:</strong> {pageSize}
        </p>
        <p>
          <strong>Showing:</strong> {startIndex + 1} - {Math.min(endIndex, products.length)} of {products.length} products
        </p>
      </div>
      
      <div className="page-size-control">
        <label htmlFor="pageSize">Items per page: </label>
        <select 
          id="pageSize" 
          value={pageSize} 
          onChange={handlePageSizeChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      
      <div className="products-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`} className="button">
              View Details
            </Link>
          </div>
        ))}
      </div>
      
      <div className="pagination-controls">
        <button 
          onClick={() => handlePageChange(page - 1)} 
          disabled={page === 1}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(p => Math.abs(p - page) < 3 || p === 1 || p === totalPages)
          .map((p, i, arr) => (
            <React.Fragment key={p}>
              {i > 0 && arr[i - 1] !== p - 1 && <span>...</span>}
              <button 
                onClick={() => handlePageChange(p)}
                className={p === page ? 'active' : ''}
              >
                {p}
              </button>
            </React.Fragment>
          ))
        }
        
        <button 
          onClick={() => handlePageChange(page + 1)} 
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
