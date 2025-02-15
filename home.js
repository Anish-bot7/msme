var menu= document.querySelector(".container")

function show(){

    menu.style.left="0%"
    
}
function closebar(){
    menu.style.left="-20%"
}

let suggestion=[
    'chennai',
    'madurai',
    'trichy',
    'chengalpattu',
    'tirunelveli',
    'theni',

];

const resultsbox=document.querySelector(".results");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=suggestion.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
        
    }
    display(result);
    if(!result.length){
        resultsbox.innerHTML=' ';
    }
}
function display(result){
    const content=result.map((list)=>{
        return "<li onclick=seletinput(this)>" + list + "</li>";
    });

    resultsbox.innerHTML="<ul>" + content.join('') + "</ul>";

}
function seletinput(list){
    inputbox.value=list.innerHTML;
    resultsbox.innerHTML='';
}



