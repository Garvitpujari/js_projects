let arr=Array(9).fill(null);
let currentPlayer="X";
let result=document.querySelector(".result")
let gameover=false;
function checkWinner(){
    if(
    (arr[0]!=null && arr[0]==arr[1] && arr[1]==arr[2]) ||
    (arr[3]!=null && arr[3]==arr[4] && arr[4]==arr[5])||
    (arr[6]!=null && arr[6]==arr[7]&& arr[7]==arr[8]) ||
    (arr[0]!=null && arr[0]==arr[3] && arr[3]==arr[6]) ||
    (arr[1]!=null && arr[1]==arr[4] && arr[4]==arr[7]) ||
    (arr[2]!=null && arr[2]==arr[5] && arr[5]==arr[8]) ||
    (arr[0]!=null && arr[0]==arr[4] && arr[4]==arr[8]) ||
    (arr[2]!=null && arr[2]==arr[4] && arr[4]==arr[6]) 
    )   
     {
    // document.write(`Winner is ${currentPlayer}`);
        gameover=true;
        result.textContent=`The Winner is ${currentPlayer} `;
        result.classList.add("show");
  

    return;

    }
    
    else{
    if(!arr.some((e)=> e===null)) {
            gameover=true;
            result.textContent=`It's a draw ! `;
             result.classList.add("show");
    }
    }
    

}

function handleclick(el){
    if(gameover) return;
    const id=Number(el.id);
    if(arr[id]!=null) return;
    arr[id]=currentPlayer;
    el.innerText=currentPlayer;
    checkWinner();
    currentPlayer= currentPlayer=="X" ? 0:"X";   
  
}
let button=document.querySelector(".reset-btn");
button.addEventListener("click",()=>{
    result.classList.remove("show")
    arr=Array(9).fill(null);
    currentPlayer="X";
    gameover=false;

    let cells=document.querySelectorAll('.col')
    for(let cell of cells){
        cell.innerText="";
    }


})
