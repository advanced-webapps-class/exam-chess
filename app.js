console.log('chess');


var wrap = document.querySelector('.wrap');
var str = '';

// 마크업을 코드로 찍어주기

for(var i=0; i < 16; i++){

  str += '<div class="black"></div>';
}

wrap.innerHTML = str;


// DOM에 클릭 이벤트 할당

