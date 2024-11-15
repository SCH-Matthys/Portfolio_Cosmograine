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

images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    container.appendChild(img);

});