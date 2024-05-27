



//begin_animation_by_ratio(0.2);

const vert = document.querySelector(".anim-vertical");
const horiz = document.querySelector(".anim-horizontal");


export function begin_animation_by_ratio(ratio) {
  

 // const timer = setInterval(frame_vert, 3);
  let y = 0;
    

 /*  function frame_vert () {
 
     if (y>25) {setTimeout(()=>{y=0}, 1900)}           //maybe better to make this anim in css??
     else {y+=0.08;
  
          vert.style.height= y*0.06 + "rem";
          horiz.style.width= y*0.06 + "rem";
 
  
    }
 
   } */

}


function make_animation_invisible() {
  vert.style.borderWidth = 0;
  horiz.style.borderWidth = 0;
}
