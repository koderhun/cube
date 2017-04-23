let itemClass = 'slide-control__item';
let $btn = document.querySelectorAll('.' + itemClass);
let $cube = document.querySelector('.cube');

for(let i=0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', function(event) {
        console.log('test');
        $cube.classList.value =  'cube';
        if (this.classList.contains('slide-control__item_btn1')) {
            $cube.classList.add('cube_btn1');
        } else if (this.classList.contains('slide-control__item_btn2')) {
            $cube.classList.add('cube_btn2');
        } else if (this.classList.contains('slide-control__item_btn3')) {
            $cube.classList.add('cube_btn3');
        } else if (this.classList.contains('slide-control__item_btn4')) {
            $cube.classList.add('cube_btn4');
        }
        return false
    });
}
