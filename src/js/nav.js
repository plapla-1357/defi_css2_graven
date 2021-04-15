const app = document.querySelector(".activable")

app.addEventListener("click" , () =>{
  console.log("clicked")
  app.classList.toggle("active")
})