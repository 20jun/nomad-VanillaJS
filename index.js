const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
        title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();


// && : 그리고
// || : 또는

// DOM : Document Object Model
// DOM : Javascript가 html의 요소(태그)들을 Object로 가져온다.
// Javascript에서 hmtl을 객체로 바꾸어서 변경할 수 있다.

// querySelector는 노드의 첫 번째 자식을 반환한다.
// const title = document.querySelector("#title");

// function handleClick() {
//     title.style.color = "blue";
// }
// // handleResize() <<== 괄호 붙일 시 자동 호출
// // handleResize <<== 함수를 즉시 호출하지 않고 사이즈 변경시에만 호출
// title.addEventListener("click", handleClick);

// https://developer.mozilla.org/ko/docs/Web/Events 이벤트 참조