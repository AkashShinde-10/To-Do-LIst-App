const inputValue = document.getElementById("input");
const btn = document.getElementById("addbtn");
const parentList = document.getElementById("content");

function addContent(){
  if (inputValue.value.trim() === ""){
    alert("Please enter the value first");
  }
  else{
    const listItem = document.createElement("li");
    listItem.textContent = inputValue.value.trim();
    parentList.appendChild(listItem);
    
    const rmvbtn = document.createElement("button");
    rmvbtn.innerHTML = "Delete";
    listItem.appendChild(rmvbtn);
    inputValue.value = "";
    saveContent();
    
  }
}

parentList.addEventListener("click", function(e){
  if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
    saveContent()
  }
})

function saveContent(){
  localStorage.setItem("data", parentList.innerHTML)
}

function showContent(){
   parentList.innerHTML = localStorage.getItem("data");
}

showContent()

btn.addEventListener("click", addContent)

function keyhandle(e){
  if (e.key === 'Enter'){
    addContent();
  }
}