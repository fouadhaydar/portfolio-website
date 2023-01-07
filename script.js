// make the nav bar responsive
let bars = document.getElementById('bars')
let ulContainer = document.getElementById('content')
let h2s = document.querySelectorAll('#h2')

window.addEventListener("resize", function() {
  let windowWidth = window.innerWidth;
  if(windowWidth > 850) {
    ulContainer.style.height = 'fit-content'
  }
  else {
    ulContainer.style.height = '0px'
  }
  if(windowWidth < 750) {
    h2s.forEach(h2 => {
      h2.style.display = 'none'
    });
  }
  else {
    h2s.forEach(h2 => {
      h2.style.display = 'block'
    });
  }
});
let windowWidth = window.innerWidth
if(windowWidth < 750) {
  h2s.forEach(h2 => {
    h2.style.display = 'none'
  });
}
else {
  h2s.forEach(h2 => {
    h2.style.display = 'block'
  });
}
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