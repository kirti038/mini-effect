//  1. I need to  get the current position of the mouse every time  it moves (x axis,y axis)
//  I need to set those x and y values to the  circular div 
//  ====================


// every time mouse we should get  notified = mouseMove listener
//  every time  listener gets notified,we need to get the values
//  for x and y axis  ,and then update it to the circle

 let circule=document.querySelector(".circule") 
 let btn = document.querySelector("#btn")
 

  
 window.addEventListener('mousemove', function(details){
     let x=details.clientX
     let y= details. clientY

       
      setTimeout(function(){
        circule.style.top=`${y}px`
        circule.style.left=`${x}px`
      },50)
     
 })
 
 btn.addEventListener( "click",function(){
  k1.reverse()
  setTimeout(()=>{
    gsap.to("img",{
      opacity:1,
      duration:1.2
     })
  },5000)
 })






 var k1=gsap.timeline();

 k1.from('#wrap' , {
  duration:5,
  scale:.7,
  ease:"Expo.easeInOut",
  opacity:0
 })

 .from('#white' , {
  duration:2,
  // scale:.7,
   width:0 ,

  ease:"Expo.easeInOut",
  // opacity:0
 },'-=3')
 .from('#black' , {
  duration:1.5,
  x:50,
  
  // scale:.7,
  ease:"Expo.easeInOut",
  opacity:0
 },'-=1')
.from('.linelem  #line1' , {
  duration:2,
  // scale:.7,
  width:0,
  ease:"Expo.easeInOut",
  opacity:0
 },'-=1')
 .from('#black  p' , {
  duration:1.5,
  // scale:.7,
  x:30,
  // width:0,
  ease:"Expo.easeInOut",
  opacity:0
 },'-=2')
 .from('#side' , {
 duration:2,
  y:30,
  // scale:.7,
  ease:"Expo.easeInOut",
  opacity:0
 })
 