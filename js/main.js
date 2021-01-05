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
function menuMobile(){
    const btn = document.querySelector(".btn-mobile");
    const nav = document.querySelector(".nav");
    console.log(btn);
    
    btn.addEventListener('click', function(){
                         nav.classList.toggle("mobile");
                         });
}

backToTop();
menuMobile();