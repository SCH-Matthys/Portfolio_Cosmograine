const images = [
    "./../assets/img/illus/img (1).jpeg",
    "./../assets/img/illus/img (1).jpg",
    "./../assets/img/illus/img (2).jpg",
    "./../assets/img/illus/img (3).jpg",
    "./../assets/img/illus/img (4).jpg",
    "./../assets/img/illus/img (5).jpg",
    "./../assets/img/illus/img (6).jpg",
    "./../assets/img/illus/img (7).jpg",
    "./../assets/img/illus/img (8).jpg",
    "./../assets/img/illus/img (9).jpg",
    "./../assets/img/illus/img (10).jpg",
    "./../assets/img/illus/img (11).jpg",
    "./../assets/img/illus/img (12).jpg",
    "./../assets/img/illus/img (13).jpg",
    "./../assets/img/illus/img (14).jpg",
    "./../assets/img/illus/img (15).jpg",
    "./../assets/img/illus/img (16).jpg",
    "./../assets/img/illus/img (17).jpg",
    "./../assets/img/illus/img (18).jpg",
    "./../assets/img/illus/img (19).jpg",
    "./../assets/img/illus/img (20).jpg",
    "./../assets/img/illus/img (21).jpg",
    "./../assets/img/illus/img (22).jpg",
    "./../assets/img/illus/img (23).jpg",
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