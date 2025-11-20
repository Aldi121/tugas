
const btn1 = document.getElementById("satu");
const btn2 = document.getElementById("dua");
const btn3 = document.getElementById("tiga");


const gambar = document.querySelector(".gambar img");

function tampilkanGambar(src) {
    gambar.classList.remove("muncul"); 

    // Tunggu sedikit agar efek fade bisa restart
    setTimeout(() => {
        gambar.src = src;
        gambar.style.display = "block"
        gambar.classList.add("muncul");
    }, 50);
}


btn1.addEventListener("click", function () {
    tampilkanGambar("wisnu militer.jpg");
});

// Tombol 2
btn2.addEventListener("click", function () {
    tampilkanGambar("Random Stream.jpg");
});

// Tombol 3
btn3.addEventListener("click", function () {
    tampilkanGambar("gambar3.jpg");
});