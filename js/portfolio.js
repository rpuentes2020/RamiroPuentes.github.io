var filterCheckboxes;
var fList;

document.addEventListener("DOMContentLoaded", function() {   
    fList = document.getElementById("projectFilterUl");
    filterCheckboxes = fList.querySelectorAll('input[type="checkbox"]');
    filterCheckboxes.forEach((c)=>{
        c.addEventListener("click",filterProjects);
    })
  
    // $('.carousel .carousel-item').each(function(){
    //     var minPerSlide = 4;
    //     var next = $(this).next();
    //     if (!next.length) {
    //     next = $(this).siblings(':first');
    //     }
    //     next.children(':first-child').clone().appendTo($(this));
        
    //     for (var i=0;i<minPerSlide;i++) {
    //         next=next.next();
    //         if (!next.length) {
    //             next = $(this).siblings(':first');
    //           }
            
    //         next.children(':first-child').clone().appendTo($(this));
    //       }
    // });
    
});


  function filterProjects(){
    let filterBy=[];    
    filterCheckboxes.forEach((c)=>{
        if(c.checked){
            filterBy.push(c.dataset.filtertype);
        }
    });

    let projectCards = document.querySelectorAll(".card-item");
    let cardCnt = projectCards.length;
    let cnt = 0;
    projectCards.forEach((p)=>{
        let show = filterBy.some(className => p.classList.contains(className));
        
        if(show){
            p.classList.remove("d-none");
        }else{
            p.classList.add("d-none");
            cnt += 1;
        }

    })

    if(cnt == cardCnt){
        document.getElementById("no-results-found-card").classList.remove("d-none");
    }
    else{
        document.getElementById("no-results-found-card").classList.add("d-none");
    }

  }



