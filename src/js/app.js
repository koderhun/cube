let itemClass = 'slide-control__item';
let $btn = document.querySelectorAll('.' + itemClass);
let $cube = document.querySelector('.cube');

for(let i; i < $btn.length; i++) {
    $btn.addEventListener('click', function(event) {
        console.log('test');
        $cube.classList.value =  'cube';
        if (this.classList.contains('')) {
            $cube.classList.add(itemClass + '_btn1');
        } else if () {

        }
        return false
    });
}
