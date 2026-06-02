function showInfo(){
    alert("Selamat datang di Sunpetal.cam! 🌻✨\nMari menjelajahi Sunpetal World kami.");
}

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const posisi = card.getBoundingClientRect().top;

        if(posisi < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
