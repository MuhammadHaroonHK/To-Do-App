let input=document.querySelector("#input");
let addbtn=document.querySelector("#add-btn");
let list=document.querySelector("#list");

addbtn.addEventListener(('click'), () => {
    if(input.value=='') {
        alert("Please fill the input")
    }else {   
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
}
input.value="";
storedata();
})

list.addEventListener(('click') , function(e) {
    if(e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        storedata();
    } else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        storedata();
    }
}, false);

function storedata() {
    localStorage.setItem("data" , list.innerHTML);
}

function offlindata() {
    list.innerHTML=localStorage.getItem("data");
}

offlindata();