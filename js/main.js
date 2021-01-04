// Back to top
function backToTop(){
    let btn = document.querySelector(".btn-up");
    
    window.onscroll = function(){
        scroll();
    };
    
    function scroll(){
        if(document.documentElement.scrollTop > 50){
            btn.style.display="block";
        }else{
            btn.style.display="none";
        }
    }
    
    btn.addEventListener("click", function(){
       document.documentElement.scrollTop = 0; 
    });
}

backToTop();