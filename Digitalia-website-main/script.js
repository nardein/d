const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".navmenu");

const CloseButton = document.querySelector(".navclose");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

if(CloseButton){
    CloseButton.addEventListener('click', () =>{
        offScreenMenu.classList.toggle("active")
    })
}