
const btn1 = document.getElementById("satu");
const btn2 = document.getElementById("dua");
const btn3 = document.getElementById("tiga");


const gambar = document.querySelector(".gambar img");


btn1.addEventListener("click", function () {
    gambar.src = "wisnu militer.jpg"; 
});

btn2.addEventListener("click", function () {
    gambar.src = "Random Stream.jpg";
});

btn3.addEventListener("click", function () {
    gambar.src = "gambar3.jpg";
});
