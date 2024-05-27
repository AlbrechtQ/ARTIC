
import { boosted_ids, ratios, better_rations_num } from "/boosted_IDs.js";
import {all_boosted_img_IDs} from "/all_boosted_img_IDs.js";



let a = 10;
let b = 10;

console.log("a is", a)
console.log("b is", b)

a = a + 1;
b = a;


console.log("a is now", a)
console.log("b is now", b)

let c = 10;
let d = 10;

c === d? console.log(true) : console.log(false)

//with arrays
console.log("---------------------------------")

let e = [1, 2];
let f = [1, 2];

let g = f;


e === f? console.log(true) : console.log(false)

g === f? console.log(true) : console.log(false)

e.push(3);
f.push(3);

console.log("e is now", e)
console.log("g is now", f)





/*

let base_url = "https://api.artic.edu/api/v1/artworks/"

let url = "https://api.artic.edu/api/v1/artworks/64818";
let i = 0;


const all_url = boosted_ids.map((element) => {return base_url + element});

const all_img_IDs = [];




function iterate_with_count(i) {

    setTimeout(() => {loop_through_urls(all_url[i]); console.log(all_url[i]); console.log(i) }, 500)


}


async function loop_through_urls(url) {



    async function get_chicago_api() {

     const response = await fetch(url);
     const data = await response.json();
     return data;
    }


    get_chicago_api().then((result) => {

     try {
        let current_img_ID = result.data.image_id;

        all_img_IDs.push(current_img_ID);
      } 
      catch(err) {console.log(err); all_img_IDs.push(1000);}

      i+=1;

      if (i<all_url.length){
      iterate_with_count(i);
      }
      else {console.log(JSON.stringify(all_img_IDs))};
    })



}



//iterate_with_count(i);


let n_ID = boosted_ids[0];
let n_image_ID = all_boosted_img_IDs[0];

console.log(n_ID);
console.log(n_image_ID);



/*

const height_div_width_ratio = [];


function iterate_with_count(i) {

    setTimeout(() => {loop_through_urls(all_url[i]); console.log(all_url[i]); console.log(i) }, 500)


}


async function loop_through_urls(url) {



    async function get_chicago_api() {

     const response = await fetch(url);
     const data = await response.json();
     return data;
    }


    get_chicago_api().then((result) => {

     try {  
       let height = result.data.dimensions_detail[0].height_cm;  console.log(height);
       let width = result.data.dimensions_detail[0].width_cm;    console.log(width);
       height_div_width_ratio.push(height/width);
      } 
      catch(err) {console.log(err); height_div_width_ratio.push(1000);}

      i+=1;

      if (i<all_url.length){
      iterate_with_count(i);
      }
      else {console.log(JSON.stringify(height_div_width_ratio))};
    })



}


let j = 0;



*/



/*
paintings_array.forEach( (element)=> {

    async function get_images() {                   
    const response = await fetch(element);
    const data = await response.json();
    return data;
      }

     get_images().then((result) => {


     const address_string = "https://www.artic.edu/iiif/2/"
     const full_address = address_string + result.data.image_id + default_add;  console.log(result.data.image_id);
     create_img_div(full_address);  }) 
   
    })





    async function get_chicago_api() {

      const response = await fetch(url);
      const data = await response.json();
      return data;
     }

     
    get_chicago_api().then((result) => {

console.log(result);
     })
 



     
function begin_animation_right_bottom_square(ratio) {

  switch (true) {
   case (ratio > 1):
     console.log("more");
     break;
   
   case (ratio < 1):
     console.log("less");
     break;
 
   case (ratio === 1):
     console.log("1");
     break;
  }
  console.log("heyyy")

   const timer = setInterval(frame_vert, 3);
   let y = 0;
 
 
   function frame_vert () {
 
     if (y>25) {setTimeout(()=>{y=0}, 1900)}
     else {y+=0.08;
         vert.style.height= y*0.06 + "rem";
         horiz.style.width= y*0.06 + "rem";}
 
   }
 
 }


 begin_animation_right_bottom_square(0.4);



 let fullstring = "https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/400,/0/default.jpg";






function img_link_higher_res (link) {
 
let string_pieces = link.split("/");
let string_pieces_changed = string_pieces.map((element)=> {if (element === "400,") {return "843,"} else {return element}})
let high_res_link = string_pieces_changed.join("/");
return high_res_link;
}

console.log(img_link_higher_res(fullstring));  */