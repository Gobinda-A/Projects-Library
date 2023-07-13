const toggleButtons=document.querySelectorAll('.button.desc');
const contents=document.querySelectorAll('.description');

toggleButtons.forEach((button,index)=>{
    button.addEventListener('click',function(){
        if(contents[index].style.display==='none'){
        contents[index].style.display='block';
        button.innerText='Close Description';
        }
        else{
        contents[index].style.display='none';
        button.innerText='View Description';}
    });
});