let getPics=document.querySelector(".button-area");
let display=document.querySelector(".display-area");

getPics.addEventListener("click",function(){
    
    fetch("https://aws.random.cat/meow")
.then(function(apidata){
return apidata.json()

}).then(function(data){


    display.innerHTML=`<img src="${data.file}"/>`



    // let htm=`
    // <img src="${data.file}"/>
    // `
    // display.insertAdjacentHTML("afterbegin",htm);
})
    
    

    
})

