function customToggleDrop(){
    const toggleCustom = document.querySelector('.menu_custom');
    toggleCustom.classList.toggle('active')
}

function customToggleSide(){
    const toggleCustom = document.querySelector('.menu_side_custom');
    toggleCustom.classList.toggle('active')
}

// detail counter
var count = 1;
var countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}
