let username=document.querySelector("#user")
const easy=document.querySelector("#easy");
const medium=document.querySelector("#medium")
const hard=document.querySelector("#hard")
let get=document.querySelector("#get")


get.addEventListener("click",async ()=>{
    try{
        let response=await fetch(
            `https://alfa-leetcode-api.onrender.com/${username.value}/solved`
        )
        let data=await response.json();
        easy.innerText=data.easySolved;
        medium.innerText=data.mediumSolved;
        hard.innerText=data.hardSolved;    
        

    }
    catch(error){
        console.log(error);
    }
 
})
