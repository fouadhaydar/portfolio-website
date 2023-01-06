// make the nav bar responsive
let bars = document.getElementById('bars')
let ulContainer = document.getElementById('content')

window.addEventListener("resize", function() {
  let windowWidth = window.innerWidth;
  if(windowWidth > 850) {
    ulContainer.style.height = 'fit-content'
  }
  else {
    ulContainer.style.height = '0px'
  }
});

bars.addEventListener('click',()=>{
    let closed = ulContainer.offsetHeight
    console.log(closed)
    if(closed == '0') {
      ulContainer.style.height = '300px'
    }
    else {
      ulContainer.style.height = '0px'
    }
})