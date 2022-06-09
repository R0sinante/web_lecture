// const cat = {
//     name:"mdol",
//     age:3,
//     sayMeow: function() {
//         console.log("Meow");
//     }
// }

// function sayHello() {
//     console.log("hello");
// }

// const sayHi = function() {
//     console.log("hello");
// }

// const plus2 = (num1,num2) => {return num1+num2};
// const plus3 = (num1,num2) => (num1+num2);

// const mutiply = num1 => num1*2;
// const Hi = () => {console.log("Hi")};   

// const h1Element = document.querySelector(".rap h1");

// function clickFn() {
// //    if (h1Element.classList.contains("clicked")) {
// //        h1Element.classList.remove("clicked");
// //    } else {
// //        h1Element.classList.contains("clicked");
// //    }
//     h1Element.classList.toggle("clicked");
// }

// h1Element.addEventListener("click", clickFn);

const loginInput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("#login-form button");

function submitFn(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(loginInput.value);  
    // if(loginInput.value.length > 15) {
    //     alert("이름이 너무 깁니다");
    // }
}

loginbutton.addEventListener("submit",submitFn );

