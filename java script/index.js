// this is for autoplay of slides 
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
    counter = 1;
    }
}, 5000);

const container = document.querySelector('.container')
const emoji = document.querySelector('.emoji')
const textarea = document.querySelector('.textarea')
const btn1 = document.querySelector('.btn1')
emoji.addEventListener('click',(e)=>{
    if(e.target.className.includes('emoji')) return;

    textarea.classList.add('textarea--active');
    btn1.classList.add('btn1--active');
})

container.addEventListener('mouseleave',()=>{

    textarea.classList.remove('textarea--active')
    btn1.classList.remove('btn1--active')

})

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});