const btnUp = document.getElementById("btn-up");
const btnDown = document.getElementById("btn-down");


const slides = Array.from(document.querySelectorAll(".slide"));
const slidesId = [];
slides.forEach(el => {
    slidesId.push(el.id);
});

let ini = 0;



btnUp.addEventListener("click",function() {
    if(ini>0){
        // console.log(slidesId[ini-1])
        window.location.href = '#'+slidesId[ini-1]
        ini--;
    }
})

btnDown.addEventListener("click",function() {
    if(ini<slides.length-1){
        // console.log(slidesId[ini+1])
        window.location.href = '#'+slidesId[ini+1]
        ini++;
    }
})



