import {listingsInfo} from '../data/data.js'
import { favorite } from '../data/favorite.js';

const listContainer = document.querySelector('.listings-boxes-container');


    let boxHtml = '';

listingsInfo.forEach(info=>{
    boxHtml += `<div class="listings-box" data-Id="${info.id}">
    <img src="${info.image}" alt="">
    <div class="listing-info">
        <h3>$${info.Price}</h3>
        <p>${info.beedrooms} bds | ${info.squarefeet} | 2 ba</p>
        <p>${info.address}</p>
        <button data-name="${info.id}" class="view-more" >view more</button>
    </div>
    <div class="active-fav">
       <svg class="fav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
        <p>active</p>
    </div>
</div>`;
})
listContainer.innerHTML = boxHtml;

let listingBox = document.querySelectorAll('.listings-box');

listingBox.forEach(box=>{
    let favIcon = box.querySelector('.fav-icon')
    let favId = box.dataset.id;
   favIcon.addEventListener('click',()=>{
        
    favIcon.classList.toggle('added');
    
    let target;
    listingsInfo.forEach(info=>{
        if(favId === info.id){
            target =info;
        }
    })
    if(Array.from(favIcon.classList).includes('added')){
        favorite.push(target)
    }else{
        favorite.pop(target)
    }

   })
})
let closeBtn =  document.querySelector('.close-btn')
closeBtn.addEventListener('click',()=>{
    document.querySelector('.house-info-container').style.width ='0'
});

let targetView;

document.querySelectorAll('.view-more').forEach(btn=>{
    btn.addEventListener('click',()=>{
        let fullListings = ''
        let btnId = btn.dataset.name;
       listingsInfo.forEach(item=>{
        if(btnId == item.id){
            targetView = item;
        }
       })
       let {image,beedrooms,Price,squarefeet} = targetView;
       fullListings +=`   <div class="house-info-wrapper">
       <div class="house-info-images">
               <img class="main-img" src="${image}" alt="">
           <div class="house-side-images">
               <img src="../assets/pexels-expect-best-79873-323780.jpg" alt="">
               <img src="../assets/pexels-frans-van-heerden-201846-1438832.jpg" alt="">
               <img src="../assets/pexels-curtis-adams-1694007-6510950.jpg" alt="">
               <img src="../assets/pexels-curtis-adams-1694007-6510950.jpg" alt="">
               <img src="../assets/pexels-curtis-adams-1694007-6510950.jpg" alt="">
               <img src="../assets/pexels-curtis-adams-1694007-6510950.jpg" alt="">
               <img src="../assets/pexels-curtis-adams-1694007-6510950.jpg" alt="">
           </div>
       </div>
       <div class="house-info-wrapper-1">
           <div class="price-add">
               <h3 class="price">$${Price}</h3>
               <p>1250 highland dr,rockwall,TX75087</p>
           </div>
       </div>  
       <div class="house-info-wrapper-2">
           <div class="house-info">
               <div>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"/></svg>
                   <p>${beedrooms} bedroom</p>
               </div>
               <div>
                   <svg aria-hidden="true" data-prefix="far" data-icon="ruler" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-ruler fa-w-20 fa-7x"><path fill="currentColor" d="M635.7 179.2L543.2 16.3c-7.6-13.5-26.5-22-43.7-11.9L16 288.3c-15.3 9-20.6 28.9-11.7 44.5l92.5 162.9c7.6 13.4 26.5 22 43.7 11.9L624 223.7c15.3-9 20.5-28.9 11.7-44.5zm-505.4 278L53.9 322.5l46-27 34.2 60.3c2.2 3.9 7.1 5.2 10.9 3l26.6-15.6c3.8-2.2 5.1-7.2 2.9-11.1l-34.2-60.3 40.4-23.7 18.7 32.9c2.2 3.9 7.1 5.2 10.9 3l26.6-15.6c3.8-2.2 5.1-7.2 2.9-11.1l-18.7-32.9 40.4-23.7 34.2 60.3c2.2 3.9 7.1 5.2 10.9 3l26.6-15.6c3.8-2.2 5.1-7.2 2.9-11.1L302 176.8l40.4-23.7 18.7 32.9c2.2 3.9 7.1 5.2 10.9 3l26.6-15.6c3.8-2.2 5.1-7.2 2.9-11.1l-18.7-32.9 40.4-23.7 34.2 60.3c2.2 3.9 7.1 5.2 10.9 3l26.6-15.6c3.8-2.2 5.1-7.2 2.9-11.1L463.6 82l46-27 76.5 134.7-455.8 267.5z" class=""></path></svg>
                   <p>${squarefeet}</p>
               </div>
               <div>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zM176 288c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"/></svg>
                   <p>bedroom</p>
               </div>
               <div>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"/></svg>
                   <p>built in 2000</p>
               </div>
           </div>
           <div class="video-wrapper">
               <img src="../assets/video image.jpeg" alt="">
           </div>
           <div class="video-info">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe et debitis nostrum, in eaque quas obcaecati voluptate totam facilis atque ab minus. Minus, fugiat ipsa corrupti, obcaecati odio suscipit officiis quod at voluptatibus, eaque sint illo quidem. Ipsam velit possimus quam explicabo impedit soluta nulla at, vel fugiat perferendis.
           </div>
       </div>
       
   </div>`;
   document.querySelector('.house-info-wrapper').innerHTML = fullListings;
   document.querySelector('.house-info-container').style.width ='100%';
   let houseSideImages = document.querySelector('.house-info-container');

   let imgs = houseSideImages.getElementsByTagName('img');
   let mainImg = document.querySelector('.main-img')

   Array.from(imgs).forEach(img=>{
       img.addEventListener('click',()=>{
           mainImg.src = img.src;
       })
   })
    })
})
