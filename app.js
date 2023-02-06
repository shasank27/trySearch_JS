const search = () => {
  let searchBox = document.getElementById("search-item").value.toUpperCase();
  let products = document.querySelectorAll(".product");

  for (let i = 0; i < products.length; i++) {
    let product = products[i].getElementsByTagName("h2")[0];

    if (product) {
      let productName = product.textContent;

      if (productName.toUpperCase().indexOf(searchBox) > -1) {
        products[i].style.display = "";
      } else products[i].style.display = "none";
    }
  }
};
