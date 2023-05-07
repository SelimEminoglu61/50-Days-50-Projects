const panel=document.querySelectorAll('.panel');


panel.forEach((item)=>item.addEventListener('click',panelClick));


function panelClick(){
    
    panel.forEach((item)=>{
        item.classList.remove("active");
    })

    panel.forEach((item)=>{
        if(item==this){
            item.classList.add("active");
        }
    })

}
