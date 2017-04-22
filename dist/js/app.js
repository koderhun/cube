'use strict';

var itemClass = 'slide-control__item';
var $btn = document.querySelectorAll('.' + itemClass);
var $cube = document.querySelector('.cube');

for (var i; i < $btn.length; i++) {
    $btn.addEventListener('click', function (event) {
        console.log('test');
        $cube.classList.value = 'cube';
        if (this.classList.contains(itemClass)) {
            $cube.classList.add(itemClass + '_btn1');
        }
        return false;
    });
}
//# sourceMappingURL=app.js.map
