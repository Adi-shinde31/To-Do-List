var listCount = 0;

function addItemToList(){
     const itemName = document.getElementById("listId").value;
     if(itemName == "") return alert("Please Enter a task.");
     else{
          var list = document.createElement('li');
          list.innerText = itemName;
          document.getElementById("listView").append(list);
          listCount++;
          document.getElementById("countNumber").innerHTML = listCount;
          var deleteBtn = document.createElement("button");

          document.getElementById("listView").append(deleteBtn);
          list.appendChild(deleteBtn);

          deleteBtn.setAttribute("id", "deleteItem");
          deleteBtn.style.float = "right";
          deleteBtn.innerHTML = "Delete";

     }
}

var themes = document.getElementById("themes");
themes.onclick = function(){
     document.body.classList.toggle("darkTheme");
     if(document.body.classList.contains("darkTheme")){
          document.getElementById("moon").style.display="none";
          document.getElementById("sun").style.display="block";
          document.getElementById("sun").style.color="#fff";
     }
     else{
          document.getElementById("moon").style.display="block";
          document.getElementById("sun").style.display="none";
     }
}

// alert(document.body.clientHeight);