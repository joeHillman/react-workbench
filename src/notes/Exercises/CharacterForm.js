changeColor = (str) => {
  if(myBtn.classList.contains("bg-color-default")) { myBtn.classList.toggle("bg-color-default") }
  if(!str) { myBtn.classList.toggle("bg-color-default") }
  else { myBtn.classList.toggle(`bg-color-${str}`) }
}
