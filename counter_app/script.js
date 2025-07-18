let count=parseInt(localStorage.getItem('count'))||0;//use to retive value store at local storage
const countdisplay=document.getElementById("count");
const incbtn=document.getElementById("increment");
const decbtn=document.getElementById("decrement");
const resbtn=document.getElementById("reset");
incbtn.addEventListener('click',()=>{
    count++;
    updatedisplay();
});
decbtn.addEventListener('click',()=>{
    if(count>0){count--;
    updatedisplay();}
});
resbtn.addEventListener('click',()=>{
    count=0;
    updatedisplay();
});
function updatedisplay(){
    countdisplay.textContent= count;
    localStorage.setItem('count',count);//store count value locally 
    if (count < 0) {
    countdisplay.style.color = 'red';
} 
    else if (count > 0) {
    countdisplay.style.color = 'limegreen';
} else {
    countdisplay.style.color = 'red'; }
}
const displaytheme=document.getElementById("toggle-theme");
const savedtheme=localStorage.getItem("theme")||"light";
document.body.classList.add(`${savedtheme}-theme`);
const themebtn=displaytheme.addEventListener('click',()=>{
    if(document.body.classList.contains('dark-theme')){
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme','light-theme');
    }
    else{
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('dark-theme','dark-theme');
    }
});

updatedisplay();
