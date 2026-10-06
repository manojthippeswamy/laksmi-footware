/* =====================================================
   LAKSHMI FOOTWEAR
   Website JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("show");

    });

}


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ================= PRODUCT SEARCH ================= */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productGrid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");


function filterProducts() {

    if (!productGrid) {
        return;
    }


    const products =
        productGrid.querySelectorAll(".product-card");


    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";


    let visibleProducts = 0;


    products.forEach(function (product) {

        const productName =
            product.dataset.name.toLowerCase();


        const productCategory =
            product.dataset.category.toLowerCase();


        const matchesSearch =
            productName.includes(searchText);


        const matchesCategory =
            category === "all" ||
            productCategory === category;


        if (matchesSearch && matchesCategory) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (noResults) {

        if (visibleProducts === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}