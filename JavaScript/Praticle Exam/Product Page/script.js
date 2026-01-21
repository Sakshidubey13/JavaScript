let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;

/* Save data to localStorage */

function saveLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}

/* Clear input fields */
function clearFields() {
  title.value = "";
  price.value = "";
  image.value = "";
  category.value = "";
  editId = null;
}

/* Add or Update Product */
function add_pkt() {
  let titleVal = title.value.trim();
  let priceVal = price.value.trim();

  if (!titleVal || !priceVal) {
    alert("Title and Price are required");
    return;
  }

  let product = {
    id: editId ? editId : Date.now(),
    title: titleVal,
    price: priceVal,
    image: image.value || "https://via.placeholder.com/80",
    category: category.value
  };

  if (editId) {
    products = products.map(p => p.id === editId ? product : p);
  } else {
    products.push(product);
  }

  saveLocal();
  clearFields();
  displayProducts(products);
}

/* Display Products */
function displayProducts(data) {
  productList.innerHTML = "";

  data.forEach(p => {
    productList.innerHTML = `
      <tr>
        <td><img src="${p.image}" class="product-img"></td>
        <td>${p.title}</td>
        <td>₹${p.price}</td>
        <td>${p.category}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editProduct(${p.id})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

/* Edit Product */
function editProduct(id) {
  let product = products.find(p => p.id === id);

  title.value = product.title;
  price.value = product.price;
  image.value = product.image;
  category.value = product.category;

  editId = id;
}

/* Delete Product */
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveLocal();
  displayProducts(products);
setTimeout(() => {
    products = products.filter(p => p.id !== id);
    saveLocal();
    displayProducts(products);
  }, 300);
}


// function deleteProduct(id) {
//   const row = event.target.closest("tr");
//   row.style.transition = "all 0.3s ease";
//   row.style.opacity = "0";
//   row.style.transform = "translateX(20px)";

//   setTimeout(() => {
//     products = products.filter(p => p.id !== id);
//     saveLocal();
//     displayProducts(products);
//   }, 300);
// }

/* Sort by Price */
function sortByPrice(type) {
  let sorted = [...products];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

/* Search and Filter */

function applyFilters() {
  let searchVal = search.value.toLowerCase();
  let catVal = filterCategory.value;

  let filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchVal) &&
    (catVal === "" || p.category === catVal)
  );

  displayProducts(filtered);
}

/* Load data on page load */
displayProducts(products);
