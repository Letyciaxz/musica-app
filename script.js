const musicBtn = document.getElementById("musicBtn");
const closeBtn = document.getElementById("closeBtn");

musicBtn.addEventListener("click", () => {

    musicBtn.classList.toggle("active");

    if(musicBtn.classList.contains("active")){
        navigator.vibrate?.(100);
    }

});