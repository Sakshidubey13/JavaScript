const products_container = document.getElementById("products");
const searchbox = document.getElementById("searchbox");

let allProducts = [];

searchbox.addEventListener("input", () => {
  const searchInput = searchbox.value.toLowerCase();
  const filterProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchInput),
  );
  products_container.innerHTML = "";

  if (filterProducts.length === 0) {
    products_container.innerHTML = `<p style="text-align:center; color:red">
        ❌ not in store
         </p>`;
    //isme hmne jab koi match nhi mila toh usse hme yeh message dena h
  } else {
    Createproducts(filterProducts);
  }
});

const Createproducts = (products) => {
  products.forEach((product) => {
    const items = document.createElement("div");
    items.classList.add("product-card");
    items.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">

      <div class="product-info"> 
        <h3>${product.title}</h3>
        <p class="brand">${product.brand}</p>

        <div class="price-row">
          <span class="price">$ ${product.price}</span>
          <span class="rating">Rating: ${product.rating}</span>
          <span class="rating">stock: ${product.stock}</span>
        </div>

        <button  class = "cart-btn" >Add to Cart</button>
      </div>
        `;
    items.querySelector(".cart-btn").addEventListener("click", () => {
      addToCart({
        productimg: product.thumbnail,
        id: product.id,
        title: product.title,
        price: product.price,
        stock: product.stock,
      });
    });
    products_container.appendChild(items);
  });
};

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => {
      if (!res.ok) {
        throw new Error("API response not ok");
      }
      return res.json();
    })
    .then((data) => {
      allProducts = data.products; //store globally products
      Createproducts(allProducts);
    })
    .catch((error) => {
      console.log("Error Fetching products:", error);
      products_container.innerHTML = `
                <p style = "color:red; text-align:center;">
                    ❌ Products load nhi ho paaye. please try again.
                </p>
            `;
    });
};
/*
LocalStorage rule:

Data string me save hota hai

Object/array → JSON.stringify()

Read karte time → JSON.parse()
*/
function addToCart(product) {
  let cart = localStorage.getItem("cart");

  //agr cart empty h toh new array bnao
  if (!cart || cart === "undefined") {
    cart = [];
  } else {
    cart = JSON.parse(cart); //string me convert krnee ke baad abb mujhe isse read krwane ke liye abb mujhe js ke file json.parse me convert krte
  }
  // Step 3: check karo product pehle se cart me hai ya nahi
  const ExistingProduct = cart.find((items) => items.id === product.id);
  if (ExistingProduct) {
    ExistingProduct.qty += 1;
  } else {
    // agar nahi hai → new product add karo
    cart.push({
      productimg: product.productimg,
      id: product.id,
      title: product.title,
      price: product.price,
      qty: 1,
      stock: product.stock,
    });
  }
  // Step 4: updated cart wapas localStorage me save karo
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product Added To Cart !");
}
fetchProducts();
