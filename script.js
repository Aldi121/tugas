const btn1 = document.getElementById("satu");
const btn2 = document.getElementById("dua");
const btn3 = document.getElementById("tiga");

const gambar = document.querySelector(".gambar img");
const video = document.querySelector(".video video");

function ubahMedia(imgSrc, videoSrc) {
    // ubah gambar
    gambar.classList.remove("muncul");
    video.classList.remove("muncul");
    setTimeout(() => {
        gambar.src = imgSrc;
        gambar.classList.add("muncul");
        video.src = videoSrc;
        video.load();
        video.pause();
        video.classList.add("muncul");
    }, 100);
}

btn1.addEventListener("click", () => ubahMedia("wizzy.jpg", "gas.mp4"));
btn2.addEventListener("click", () => ubahMedia("Random Stream.jpg", "lele.mp4"));
btn3.addEventListener("click", () => ubahMedia("gambar3.jpg", "alpukat.mp4"));
