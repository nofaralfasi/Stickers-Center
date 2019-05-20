const firebaseConfig = {
    apiKey: "AIzaSyBrc5-k7DLBqBb_Sikwr7gjYuym9DTzePA",
    authDomain: "stickers-center-2019.firebaseapp.com",
    databaseURL: "https://stickers-center-2019.firebaseio.com",
    projectId: "stickers-center-2019",
    storageBucket: "stickers-center-2019.appspot.com",
    messagingSenderId: "561200702492",
    appId: "1:561200702492:web:ab68b68c290064a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const docUsersRef = firestore.doc("users/6");
const inputTextField = document.querySelector("#userEmailInput");
const submitEmailButton = document.querySelector("#submitEmailButton");
const addToCartButton = document.querySelector("#addToCartLoadButton");
const userEmailOutput = document.querySelector("#stayUpdatedOutput");

const docProductsRef = firestore.collection("products");
const outputName = document.querySelector("#productOutputName");
const loadDetailsButton = document.querySelector("#viewDetailsButton");
const mainImgSrc = document.querySelector("#productMainImageSrc");
const outputSku = document.querySelector("#sku");
const outputPrice = document.querySelector("#price");


var productRef,
    productName,
    productSku,
    productCategory,
    productPrice,
    numOfImgs,
    productImageSrc;

function setClickedProduct(id) {
    productRef = docProductsRef.doc(id);
    console.log("setClickedProduct function: id: ", id);
    productRef.get().then(function (doc) {
        if (doc.exists) {
            const productData = doc.data();
            console.log("productData: ", productData);
            productImageSrc = productData.imgSrc;
            productSku = id;
            productName = productData.name;
            productPrice = productData.price;
            productCategory = productData.category;
            numOfImgs = productData.imgsNum;

            outputName.innerHTML = productName;
            outputSku.innerHTML = "SKU: " + productSku;
            outputPrice.innerHTML = "US $" + productPrice;
            //document.getElementById("productOutputName").innerHTML = productName;
            //mainImgSrc.src = productImageSrc;
            document.getElementById("productMainImageSrc").src = productImageSrc;

            //var index = productImageSrc.indexOf('1');
            // var nextImg = productImageSrc.replace(1,2);
            // console.log("nextImg: ",nextImg);
            // document.getElementById("productImageSrc2").src = nextImg;
            var nextProductImageSrc = "productImageSrc1";
            var nextImg = productImageSrc;

            for (let i = 1, j = 2; i < numOfImgs; i++, j++) {
                nextImg = nextImg.replace(i, j);
                nextProductImageSrc = nextProductImageSrc.replace(i, j);
                console.log("nextImg: ", nextImg);
                document.getElementById(nextProductImageSrc).src = nextImg;
            }
            // prints info to confirm
            console.log("productSku: ", productSku);
            console.log("productName: ", productName);
            console.log("productImageSrc: ", productImageSrc);
        }
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
}

submitEmailButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I'm going to save " + textToSave + " to Firestore");
    docUsersRef.set({
        email: textToSave
    }).then(function () {
        console.log("Email saved!");
    }).catch(function (error) {
        console.log("Got an error", error);
    })
});

addToCartButton.addEventListener("click", function () {
    docUsersRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            userEmailOutput.innerText = "User Email is: " + myData.email;
        }
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
});



