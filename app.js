const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const moon = document.querySelector("body")

const hLink = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
  hLink.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  })
  
  moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })