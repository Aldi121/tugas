
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

tombol.addEventListener("click", () => {
    setTimeout(() => {
        gambar.classList.add("muncul");
        teks.classList.add("muncul");
    }, 30);
});


btn1.addEventListener("click", function () {
    tampilkanGambar("wizzy.jpg");
});

// Tombol 2
btn2.addEventListener("click", function () {
    tampilkanGambar("Random Stream.jpg");
});

// Tombol 3
btn3.addEventListener("click", function () {
    tampilkanGambar("gambar3.jpg");
});

const tombol = document.getElementById("tombol");
const semuaGambar = document.querySelectorAll(".gambar-item");

tombol.addEventListener("click", () => {
    setTimeout(() => {
        semuaGambar.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("muncul");
            }, index * 120); // animasi muncul satu per satu
        });
    }, 30);
});