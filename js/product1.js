// zoom
var magnifying_area = document.getElementById("magnifying_area");
var mainImg = document.getElementById("mainImg");

magnifying_area.addEventListener("mousemove",function(event){
clientX = event.clientX - magnifying_area.offsetLeft
clientY = event.clientY - magnifying_area.offsetTop

mWidth = magnifying_area.offsetWidth
mHeight = magnifying_area.offsetHeight

clientX = clientX / mWidth * 100
clientY = clientY / mHeight * 100

mainImg.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(3)'


  // mainImg.style.transform = 'translate(-50%, -50%) scale(2)'
});

magnifying_area.addEventListener("mouseleave",function(){
  mainImg.style.transform = 'translate(-50%, -50%) scale(1)'
  });



