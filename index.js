// DOM : Document Object Model
// DOM : Javascript가 html의 요소(태그)들을 Object로 가져온다.
// Javascript에서 hmtl을 객체로 바꾸어서 변경할 수 있다.

// querySelector는 노드의 첫 번째 자식을 반환한다.
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = 'red';
document.title = "I own you now";
