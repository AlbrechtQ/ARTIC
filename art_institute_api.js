import { boosted_ids, better_rations_num } from "/boosted_IDs.js";
import {all_boosted_img_IDs} from "/all_boosted_img_IDs.js";
import {begin_animation_by_ratio} from "/animation.js"



const body = document.querySelector("body");
const box = document.querySelector(".box");
const wrapper = document.querySelector(".img-wrapper");

const bottom = document.querySelector(".bottom-big");
const right = document.querySelector(".right-big");

const default_height = 12.5;
const default_width = 12.5;
const max_height = 28.55;
const max_width = 28.55;

const pixel_rem = 0.063;

const refresh_icon = document.querySelector(".refresh-icon");
const square_icon = document.querySelector(".square-icon");
const invert_icon = document.querySelector(".invert-icon");

const vert = document.querySelector(".anim-vertical");
const horiz = document.querySelector(".anim-horizontal");

const first_arrow_pieces = document.querySelectorAll(".first");
const second_arrow_pieces = document.querySelectorAll(".second");

const right_arrows = document.querySelectorAll(".span-right");
const bottom_arrows = document.querySelectorAll(".span-bottom");

const grey_container = document.querySelector(".grey-container");


const modal = document.querySelector(".modal");
const close_span = document.querySelector(".close");

const modal_menu =  document.querySelector(".modal-menu");
const modal_img = document.querySelector(".modal-img");
const modal_wrapper = document.querySelector(".modal-wrapper");

const artist = document.querySelector(".artist");
const date = document.querySelector(".date");
const line = document.querySelector(".line");
const title = document.querySelector(".title");
const place = document.querySelector(".place");
const category = document.querySelector(".category");
const description = document.querySelector(".description");

const vertical_line = document.querySelector(".linebox-vertical");


bottom.addEventListener('mousedown', initResize_height);
right.addEventListener('mousedown', initResize_width);

document.body.addEventListener('touchstart', ()=> console.log("touched"))

bottom.addEventListener('touchstart', initResize_height);
right.addEventListener('touchstart', initResize_width);

refresh_icon.addEventListener('click', refresh_with_same_ratio);
square_icon.addEventListener('click', back_to_square);
invert_icon.addEventListener('click', invert_ratio);


let default_add = "/full/400,/0/default.jpg";
let base_url = "https://api.artic.edu/api/v1/artworks/"
const all_url = boosted_ids.map((element) => {return base_url + element});

let i = 0;
let current_ratio = 1;            //when a change among these happens, it means that the boxed is being resized and a new search is triggered
let previous_ratio = 1;
let is_it_squared = true;


begin_animation_by_ratio(1)
display_paintings(1);


console.log(document.body.scrollHeight);

setInterval(() => {
    
    adjust_vertical_line_height();
    if (current_ratio == previous_ratio && is_it_squared == true) {
        console.log("do nothing"/* here timer aninamtion */)}

    else if (current_ratio === 1 && previous_ratio === 1 && is_it_squared === false) {
        restart_arrows();
        delete_all_wrapper_child_nodes(wrapper);
        display_paintings(current_ratio);
        is_it_squared = true;
        
    }
    else if (current_ratio !== previous_ratio) {
        make_rectangle_invisible();
        stop_arrows();
        delete_all_wrapper_child_nodes(wrapper);
        display_paintings(current_ratio);
        is_it_squared = false;
    previous_ratio = current_ratio;
    }
}, 110);


function adjust_vertical_line_height() {

    let wrapper_height_rem = (wrapper.clientHeight)*pixel_rem;

    vertical_line.style.height = (wrapper_height_rem - 12)+"rem";


}


  
  
function make_rectangle_invisible() {
    vert.style.borderWidth = 0;
    horiz.style.borderWidth = 0;
}

function restart_arrows() {

    right_arrows.forEach((element)=> {
        add_visibility(element);
       });
   
     bottom_arrows.forEach((element)=> {
         add_visibility(element);
       });
}

function stop_arrows() {

  right_arrows.forEach((element)=> {
     remove_visibility(element);
    });

  bottom_arrows.forEach((element)=> {
      remove_visibility(element);
    });

}


function remove_visibility(element) {

    element.style.animation = "none";
    element.style.borderBottomWidth = 0
    element.style.borderRightWidth = 0
}

function add_visibility(element) {

    setTimeout(()=> {
    element.style.animation = "animate";    
    element.style.animationDuration = 4 +'s';
    element.style.animationIterationCount = 'infinite';

    element.style.borderBottomWidth = 0.2 +'rem';
    element.style.borderRightWidth = 0.2 +'rem';

    first_arrow_pieces.forEach((element)=> {
        element.style.animationDelay = -0.2 + "s";
    })

    second_arrow_pieces.forEach((element)=> {
        element.style.animationDelay = -0.3 + "s";
    })
    }, 2000)

}



/////////////////box part


function initResize_height() {
    
    window.addEventListener('mousemove', Resize_height);
    bottom.addEventListener('touchmove', Resize_height_touch);
    
    window.addEventListener('mouseup', stopResize_heigth);
    bottom.addEventListener('touchend', stopResize_heigth);
    
}


function initResize_width() {

    window.addEventListener('mousemove', Resize_width);
    right.addEventListener("touchmove", Resize_width_touch);

    window.addEventListener('mouseup', stopResize_width);
    right.addEventListener("touchend", stopResize_width);
    
    

}

function Resize_width(e) {
      
    let new_width = (e.clientX - box.offsetLeft)*pixel_rem;
    if (new_width>max_width) {box.style.width = max_width + 'rem'}
    else if (new_width<default_width)  {box.style.width = default_width + 'rem'} else {box.style.width = new_width + 'rem'};

    box.style.height = default_height + "rem";
    
    let raw_ratio = default_height/Number((box.style.width).replace('rem',''));
    let two_decimal_ratio = Math.round(raw_ratio * 100) / 100;

    previous_ratio = current_ratio; 
    setTimeout(()=>{current_ratio = two_decimal_ratio; console.log("current", current_ratio); console.log("previous", previous_ratio);}, 100); 

  
}



function Resize_width_touch(e) {
      
      let new_width = (e.touches[0].clientX - box.offsetLeft)*pixel_rem;
      if (new_width>max_width) {box.style.width = max_width + 'rem'}
      else if (new_width<default_width)  {box.style.width = default_width + 'rem'} else {box.style.width = new_width + 'rem'};

      box.style.height = default_height + "rem";
      
      let raw_ratio = default_height/Number((box.style.width).replace('rem',''));
      let two_decimal_ratio = Math.round(raw_ratio * 100) / 100;

      previous_ratio = current_ratio; 
      setTimeout(()=>{current_ratio = two_decimal_ratio; console.log("current", current_ratio); console.log("previous", previous_ratio);}, 100); 

    
}


function Resize_height_touch(e) {
   

    let new_height = (e.touches[0].clientY - box.offsetTop)*pixel_rem;
    if (new_height>max_height) {box.style.height = max_height + 'rem'}
    else if (new_height<default_height)  {box.style.height = default_height + 'rem'} else {box.style.height = new_height + 'rem'};
    
    box.style.width = default_width + "rem";

    let raw_ratio = Number((box.style.height).replace('rem',''))/default_height;
    let two_decimal_ratio = Math.round(raw_ratio * 100) / 100;

    previous_ratio = current_ratio;  console.log("current", previous_ratio);
      setTimeout(()=>{current_ratio = two_decimal_ratio}, 100); console.log("previous", current_ratio);


}

function Resize_height(e) {
   

    let new_height = (e.clientY - box.offsetTop)*pixel_rem;
    if (new_height>max_height) {box.style.height = max_height + 'rem'}
    else if (new_height<default_height)  {box.style.height = default_height + 'rem'} else {box.style.height = new_height + 'rem'};
    
    box.style.width = default_width + "rem";

    let raw_ratio = Number((box.style.height).replace('rem',''))/default_height;
    let two_decimal_ratio = Math.round(raw_ratio * 100) / 100;

    previous_ratio = current_ratio;  console.log("current", previous_ratio);
      setTimeout(()=>{current_ratio = two_decimal_ratio}, 100); console.log("previous", current_ratio);


}




function stopResize_heigth(e) {
    window.removeEventListener('mousemove', Resize_height, false);
    
    bottom.removeEventListener('touchmove', Resize_height, false);
}

function stopResize_width(e) {
    window.removeEventListener('mousemove', Resize_width, false);
    
    right.removeEventListener('touchmove', Resize_height, false);
}







function retrieve_painting(painting_id) {

 let url = base_url + painting_id;

    async function get_painting_info() {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
  
       
   get_painting_info().then((result) => {
  
     console.log(result.data);
     title.innerHTML = result.data.title;
     date.innerHTML = result.data.date_start;
     line.innerHTML = result.data.artist_title;
     place.innerHTML = result.data.place_of_origin;
     category.innerHTML = result.data.category_titles[0];
     description.innerHTML = result.data.description;
     
    })
   
}









function create_img_div(link, id, ratio) {

    const new_card = document.createElement("div");
          new_card.classList.add("my-class");
          new_card.onerror = function() { this.style.display='none'};
          
          wrapper.append(new_card);
          
    new_card.addEventListener("click", ()=> retrieve_painting(id));
    new_card.addEventListener("click", ()=> {
        modal.style.display = "block"
        body.style.overflow = "hidden"
        modal_img.src = img_link_higher_res(link);

        modal_img.classList.remove("modal-img-vert");
        modal_img.classList.remove("modal-img-hor");

        modal_wrapper.classList.remove("modal-wrapper-hor");
        modal_wrapper.classList.remove("modal-wrapper-vert");
        
        if (ratio > 1.1) {
            modal_img.classList.add("modal-img-vert");
            modal_wrapper.classList.add("modal-wrapper-vert");
        }
        else { modal_img.classList.add("modal-img-hor");
               modal_wrapper.classList.add("modal-wrapper-hor");
       }
  
    
    });

    const new_img = document.createElement("img");
    new_img.onerror = function() { this.style.display='none'};

   
   fit_description_by_ratio(ratio)
      
    if (ratio > 1.1) {
          new_img.classList.add("img2");}
    else { new_img.classList.add("img1");}

    new_img.dataset.imgid = id;
    new_img.src = link; console.log(link);
    new_card.append(new_img);
       

}

function fit_description_by_ratio(ratio) {
    if (ratio>1.1) {description.style.maxHeight = "54%"} else { description.style.maxHeight = "42%"
        }
}





function img_link_higher_res (link) {
 
    let string_pieces = link.split("/");
    let string_pieces_changed = string_pieces.map((element)=> {if (element === "400,") {return "843,"} else {return element}})
    let high_res_link = string_pieces_changed.join("/");
    return high_res_link;
}


function display_paintings(ratio) {


    delete_all_wrapper_child_nodes(wrapper);
    let range_values = ratio_sorter_lower_upper_range(ratio);

    let paintings_array = []
    let image_array = []

    better_rations_num.forEach((element, index) => {
      if (element > range_values[0] && element < range_values[1]) {
        

        
        paintings_array.push(all_url[index]);
        image_array.push(all_boosted_img_IDs[index]);

        

    
    }
    });

    const shuffled_image_array = shuffle(image_array);



    shuffled_image_array.forEach( (element)=> {


       let general_index = all_boosted_img_IDs.indexOf(element);
       let id = boosted_ids[general_index];
       


      const address_string = "https://www.artic.edu/iiif/2/"
      const full_address = address_string + element + default_add;  
      create_img_div(full_address, id, ratio); 

    
    }) 
     
}



function ratio_sorter_lower_upper_range(ratio) {
    let low = ratio - 0.045;
    let high = ratio + 0.045;
    return [low, high]
}



function delete_all_wrapper_child_nodes(parent) {
    
    let all_images = document.querySelectorAll(".img1");
    all_images.forEach(item => item.remove());
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




function shuffle (array) { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 



function refresh_with_same_ratio() {
 display_paintings(current_ratio);

}


function back_to_square() {
    
    box.style.height = default_height + "rem";
    box.style.width = default_width + "rem";
    is_it_squared = true;
    current_ratio = 1;
    previous_ratio = 1;
    display_paintings(1);
    
    restart_arrows();
}


function invert_ratio() {

    let h = box.style.height;
    let w = box.style.width;


    let inverted_ratio_raw = 1/current_ratio;
    let inverted_ratio = Math.round(inverted_ratio_raw * 100) / 100;
    current_ratio = inverted_ratio;
    previous_ratio = inverted_ratio;

    box.style.height = w;
    box.style.width = h;
    display_paintings(current_ratio);
}

function delete_modal_infos() {

    title.innerHTML = "";
    date.innerHTML = "";
    line.innerHTML = "";
    place.innerHTML = "";
    category.innerHTML = "";
    description.innerHTML = "";
}




//modal




close_span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "visible"
  delete_modal_infos();
}

window.onclick = function(event) {
  if (event.target == modal || event.target == info_modal || event.target == faq_modal) {
    modal.style.display = "none";
    info_modal.style.display = "none";
    faq_modal.style.display = "none";
    body.style.overflow = "visible"
    delete_modal_infos();
  }
}


//info modal

const info_modal = document.querySelector(".info-modal");
const info_close_span = document.querySelector(".info-close");
const info_links = document.querySelectorAll(".open-info-modal")


info_close_span.onclick = function() {
    info_modal.style.display = "none";
    body.style.overflow = "visible"
  }




info_links.forEach((element) => {
    element.addEventListener("click", ()=> {
        info_modal.style.display = "block"
        body.style.overflow = "hidden"
     })
    
});

//faqmodal 



const faq_modal = document.querySelector(".faq-modal");
const faq_close_span = document.querySelector(".faq-close");
const faq_links = document.querySelectorAll(".open-faq-modal")


faq_close_span.onclick = function() {
    faq_modal.style.display = "none";
    body.style.overflow = "visible"
  }




faq_links.forEach((element) => {
    element.addEventListener("click", ()=> {
        faq_modal.style.display = "block"
        body.style.overflow = "hidden" })
    
});

