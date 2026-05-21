async function loadProducts() {

  const response = await fetch("http://localhost:5000/products");

  const products = await response.json();

  const productsDiv = document.getElementById("products");

  products.forEach(product => {

    productsDiv.innerHTML += `
    
      <div class="card">
      
        <img src="${product.image}">
        
        <h3>${product.name}</h3>
        
        <p>₹${product.price}</p>
        
        <button>Add to Cart</button>
      
      </div>
    `;
  });
}

loadProducts();