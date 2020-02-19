// Your code goes here
const imgTran = document.querySelectorAll("img");

imgTran.forEach( x => {
    x.addEventListener("mouseover", function(event){
        event.target.style.margin = "20px";
    })
})