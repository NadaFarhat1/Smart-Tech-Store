var productName = document.getElementById('product-name');
var productPrice = document.getElementById('product-price');
var productCategory = document.getElementById('product-category');
var productDiscription = document.getElementById('product-Discription');
var searchInput = document.getElementById('searchInput');
var rowData = document.getElementById('rowData');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');

var tmp;

// الصورة المختارة من الجاليري
var selectedImage = "CRUD img/default.jpg";

// ================= Load Data =================
var productList;
if (localStorage.getItem('productList') != null) {
    productList = JSON.parse(localStorage.getItem('productList'));
    displayProduct(productList);
} else {
    productList = [];
}

// ================= Select Image =================
function selectImage(img) {
    document.querySelectorAll('.img-choice').forEach(i => {
        i.classList.remove('selected');
    });

    img.classList.add('selected');
    selectedImage = img.getAttribute('src');
}

// ================= Add Product =================
function addProduct() {
    var product = {
        name: productName.value,
        Price: productPrice.value,
        Cate: productCategory.value,
        Discrip: productDiscription.value,
        image: selectedImage
    };

    productList.push(product);
    localStorage.setItem('productList', JSON.stringify(productList));
    clearForm();
    displayProduct(productList);
}

// ================= Clear Form =================
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDiscription.value = "";

    selectedImage = "CRUD img/default.jpg";
    document.querySelectorAll('.img-choice').forEach(i => {
        i.classList.remove('selected');
    });
}

// ================= Display Products =================
function displayProduct(arr) {
    var box = ``;

    for (var i = 0; i < arr.length; i++) {
        box += `
        <div class="col-md-3">
            <div class="card mb-3">
                <img src="${arr[i].image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h2 class="h5">${arr[i].name}</h2>
                    <p class="text-secondary">${arr[i].Discrip}</p>
                    <p><strong>Category:</strong> ${arr[i].Cate}</p>
                    <p><strong>Price:</strong> ${arr[i].Price}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
                    <button onclick="setUpData(${i})" class="btn btn-outline-success btn-sm">Update</button>
                </div>
            </div>
        </div>`;
    }

    rowData.innerHTML = box;
}

// ================= Delete =================
function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem('productList', JSON.stringify(productList));
    displayProduct(productList);
}

// ================= Search =================
function searchProduct() {
    var searchArr = [];

    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            searchArr.push(productList[i]);
        }
    }

    displayProduct(searchArr);
}

// ================= Setup Update =================
function setUpData(index) {
    tmp = index;

    productName.value = productList[index].name;
    productPrice.value = productList[index].Price;
    productCategory.value = productList[index].Cate;
    productDiscription.value = productList[index].Discrip;
    selectedImage = productList[index].image;

    document.querySelectorAll('.img-choice').forEach(img => {
        img.classList.toggle('selected', img.src.includes(selectedImage));
    });

    updateBtn.classList.remove('d-none');
    addBtn.classList.add('d-none');

    scroll({ top: 0, behavior: 'smooth' });
}

// ================= Update Product =================
function updateProduct() {
    var product = {
        name: productName.value,
        Price: productPrice.value,
        Cate: productCategory.value,
        Discrip: productDiscription.value,
        image: selectedImage
    };

    productList[tmp] = product;
    localStorage.setItem('productList', JSON.stringify(productList));
    displayProduct(productList);
    clearForm();

    addBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');
}
