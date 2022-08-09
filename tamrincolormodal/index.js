const input=document.getElementById("input");

const submit=document.getElementById("button");

submit.addEventListener("click", function onClick(event){
document.getElementById("background").style.backgroundColor=input.value;
console.log(input.value);
})


