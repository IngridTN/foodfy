// const modalOverlay = document.querySelector('.modal-overlay');
const cards = window.document.getElementsByClassName('cards'); 

for (let card of cards) {
    card.addEventListener("click", function (){
        modalOverlay.classList.add('active')
    })
}

// document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay.classList.remove("active")
// })