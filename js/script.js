/* hover */

let hover = document.querySelectorAll(".btn-more");
 let imageCategory = document.querySelectorAll(".category"); 
for(let i=0;i<hover.length;i++){
    hover[i].onmouseenter = function(){
        this.imageCategory.style.opacity = "0.5";
        this.imageCategory.style.cursor="pointer";
    }
    hover[i].onmouseleave = function(){
       this. imageCategory.style.opacity = "1";
    }
}