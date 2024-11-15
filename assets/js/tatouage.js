const images = [
    "./../assets/img/tatoo/img (1).png",
    "./../assets/img/tatoo/img (2).png",
    "./../assets/img/tatoo/img (3).png",
    "./../assets/img/tatoo/img (4).png",
    "./../assets/img/tatoo/img (5).png",
    "./../assets/img/tatoo/img (6).png",
    "./../assets/img/tatoo/img (7).png",
    "./../assets/img/tatoo/img (8).png",
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