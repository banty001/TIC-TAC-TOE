let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset_btn");
let msg=document.querySelector("#msg");
let new_game_btn=document.querySelector("#new_btn");
let msg_container=document.querySelector(".msg_container");

let turnO=true;//player x,player o

const win_patterens=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[6,7,8],[3,4,5]];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const reset_game= () => {
    turnO=true;
    enableBoxes();
    msg_container.classList.add("hide");
};
const disabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};

const show_winner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledBoxes();
     
};

const checkWinner =()=>{
    for(let patteren of win_patterens){
    //     console.log(patteren[0],patteren[1],patteren[2]);
    //     console.log( 
    //     boxes[patteren[0]].innerText,
    //     boxes[patteren[1]].innerText,
    //     boxes[patteren[2]].innerText
    //    );
       let pos1val=boxes[patteren[0]].innerText;
       let pos2val=boxes[patteren[1]].innerText;
       let pos3val=boxes[patteren[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("winner");
                show_winner(pos1val);
            }
        }
    }
};
new_game_btn.addEventListener("click",reset_game);
reset_btn.addEventListener("click",reset_game);