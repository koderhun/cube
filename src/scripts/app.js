var $btn = document.querySelector('.slide-control__item');

$btn.addEventListener("click", function() {
    console.log('test');  
    event.preventDefoult();
})
