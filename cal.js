let Soma5 = document.getElementById("Soma5");
let Soma4 = document.getElementById("Soma4");
let Soma3 = document.getElementById("Soma3");
let Soma2 = document.getElementById("Soma2");
let Soma1 = document.getElementById("Soma1");
let Sub5 = document.getElementById("Sub5");
let Sub4 = document.getElementById("Sub4");
let Sub3 = document.getElementById("Sub3");
let Sub2 = document.getElementById("Sub2");
let Sub1 = document.getElementById("Sub1");
let zerar = document.getElementById("zerar");
let proxRound = document.getElementById("proxRound");;
let res = document.querySelector("p");
let novoJogo = document.getElementById("novoJogo");
let result = 0;

Soma5.addEventListener("click", function () {
    result += 5;
    res.innerHTML = `${result}`
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

Soma4.addEventListener("click", function () {
    result += 4;
    res.innerHTML = `${result}`;
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

Soma3.addEventListener("click", function () {
    result += 3;
    res.innerHTML = `${result}`;
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

Soma2.addEventListener("click", function () {
    result += 2;
    res.innerHTML = `${result}`;
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

Soma1.addEventListener("click", function () {
    result++;
    res.innerHTML = `${result}`;
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

Sub5.addEventListener("click", function () {
    result -= 5;
    res.innerHTML = `${result}`
    if(result<0){
        result = 0;
        res.innerHTML = `${result}`;
    }
})

Sub4.addEventListener("click", function () {
    result -= 4;
    res.innerHTML = `${result}`;
    if(result<0){
        result = 0;
        res.innerHTML = `${result}`;
    }
})

Sub3.addEventListener("click", function () {
    result -= 3;
    res.innerHTML = `${result}`;
    if(result<0){
        result = 0;
        res.innerHTML = `${result}`;
    }
})

Sub2.addEventListener("click", function () {
    result -= 2;
    res.innerHTML = `${result}`;
    if(result<0){
        result = 0;
        res.innerHTML = `${result}`;
    }
})

Sub1.addEventListener("click", function () {
    result -= 1;
    res.innerHTML = `${result}`;
    if(result<0){
        result = 0;
        res.innerHTML = `${result}`;
    }
})

zerar.addEventListener("click", function () {
    result = 0;
    res.innerHTML = `${result}`
})

proxRound.addEventListener("click", function () {
    result += 2;
    res.innerHTML = `${result}`;
    if(result>10){
        result = 10;
        res.innerHTML = `${result}`;
    }
})

novoJogo.addEventListener("click", function(){
    result = 3;
    res.innerHTML = `${result}`;
})