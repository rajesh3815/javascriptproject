let mylead=[]
const bton=document.getElementById("btn")
const inp=document.getElementById("inp-el")
const ulEl=document.getElementById("ul-el")
let delel=document.getElementById("del-el")
let savet=document.getElementById("sav-bt")
savet.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
     mylead.push(tabs[0].url)
     localStorage.setItem("locals",JSON.stringify(mylead))
     render(mylead)
    });
})
let lec=JSON.parse(localStorage.getItem("locals"))
if(lec){
    mylead=lec
    render(mylead)
}
function render(lead){
    let listitems=""
    for(let i=0;i<lead.length;i++){
    listitems+=`<li>
    <a href='${lead[i]}' target='blank'>${lead[i]}</a>
    </li>`
    }
    ulEl.innerHTML=listitems
    }
delel.addEventListener("dblclick",function del(){
    localStorage.clear("locals")
    mylead=[]
    ulEl.innerHTML=""
    render(mylead)
})

bton.addEventListener("click",function fun(){
    mylead.push(inp.value)
    inp.value=""
    localStorage.setItem("locals",JSON.stringify(mylead))
    render(mylead)
   
})


