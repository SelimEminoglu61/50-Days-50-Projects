const circles=document.querySelectorAll(".circle");
const prevButton=document.querySelector("#prev");
const nextButton=document.querySelector("#next");
const progress=document.getElementById("progress");


prevButton.addEventListener("click",prevButtonClicked);
nextButton.addEventListener("click",nextButtonClicked);

let noneActive=0;
let active=0;

function prevButtonClicked(){

    circles.forEach((circle)=>{
        circle.classList.forEach((item)=>{
            if(item=='active'){
                active-=1;
            }
        })
    
    })
    noneActive=circles.length-active;
    progress.getAttribute("style");
    if(active==4){
        progress.style.width = "66.6667%";
        nextButton.removeAttribute("disabled");
        
    }
    else if(active==3){
        progress.style.width = "33.3333%";
    }
    else if(active==2){
        progress.style.width = "0%";
        prevButton.setAttribute("disabled","");
        active=0;
    }

}

function nextButtonClicked(){
   
    circles.forEach((circle)=>{
        circle.classList.forEach((item)=>{
            if(item=='active'){
                active+=1;
            }
        })
    })
    noneActive=circles.length-active;
    progress.getAttribute("style");
    if(noneActive==3){
        progress.style.width = "33.3333%";
        prevButton.removeAttribute("disabled");
        
    }
    else if(noneActive==2){
        progress.style.width = "66.6667%";
    }
    else if(noneActive==1){
        progress.style.width = "100%";
        nextButton.setAttribute("disabled","");
        active=5;
    }
    
}
