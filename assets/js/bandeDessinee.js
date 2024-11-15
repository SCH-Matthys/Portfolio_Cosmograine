const images = [
    "./../assets/img/bd/img (1).jpeg",
    "./../assets/img/bd/img (2).jpeg",
    "./../assets/img/bd/img (3).jpeg",
    "./../assets/img/bd/img (1).jpg",
    "./../assets/img/bd/img (2).jpg",
    "./../assets/img/bd/img (3).jpg",
    "./../assets/img/bd/img (4).jpg",
    "./../assets/img/bd/img (5).jpg",
    "./../assets/img/bd/img (6).jpg",
    "./../assets/img/bd/img (7).jpg",
    "./../assets/img/bd/img (8).jpg",
];
const container = document.getElementById("images-container");

images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.addEventListener("click", () =>{
        showImage(index);
    })
    container.appendChild(img);
});

const containerShow = document.getElementById("container-show-image");
const imageToShow = document.getElementById("show-image");
const btnClose = document.getElementById("btn-close");
const btnPrev = document.getElementById("btn-left");
const btnNext = document.getElementById("btn-right");
let currentIndex = 0; 

function showImage(index){  
    currentIndex = index;
    imageToShow.src = images[currentIndex];
    containerShow.classList.remove("hidden");
}

function closeImage(){
    containerShow.classList.add("hidden");
}

btnClose.addEventListener("click", closeImage);
containerShow.addEventListener("click", (event) => {
    if(event.target === containerShow){
        closeImage();
    }
})

btnPrev.addEventListener("click", () =>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageToShow.src = images[currentIndex];
});

btnNext.addEventListener("click", () =>{
    currentIndex = (currentIndex + 1) % images.length;
    imageToShow.src = images[currentIndex]; 
});