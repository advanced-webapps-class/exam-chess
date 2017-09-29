console.log('chess');


var wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;


// 마크업을 코드로 찍어주기
for(var i=0; i < 16; i++){

  if(isWhite) {
    className = 'white';
  }
  else {
    className = 'black';
  }

  str += '<div class="'+ className +'"></div>';


  //한번씩 변경
  isWhite = !isWhite;

  if(i % 4 === 3 ){
    isWhite = !isWhite;
  }

}

wrap.innerHTML = str;


// DOM에 클릭 이벤트 할당

