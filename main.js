let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

 if(window.localStorage.getItem("color")){
    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach( (li) => {
        li.classList.remove('active');
       });
       document.querySelector(`[data-color=${ window.localStorage.getItem("color")}]`).classList.add('active')

  }else{
console.log("the is no color");
  }

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
       // console.log(e.currentTarget.dataset.color);
   
       e.currentTarget.classList.add('active');
       // add current color to local storage
       window.localStorage.setItem("color",e.currentTarget.dataset.color);
       //change background color
       exp.style.backgroundColor = e.currentTarget.dataset.color;
    })
})

