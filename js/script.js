var listCount = 0;

function addItemToList() {
     const itemName = document.getElementById("listId").value;
     if (itemName == "") return alert("Please Enter a task.");
     else {
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
          deleteBtn.style.padding = "5px";
          deleteBtn.style.fontFamily = "Roboto Slab', serif;";
          deleteBtn.innerHTML = "Delete";

          deleteBtn.onclick = function () {
               list.remove();
               listCount--;
               document.getElementById("countNumber").innerHTML = listCount;
          }
     }
     console.log(document.getElementById("listId").value ="");
}

var themes = document.getElementById("themes");

themes.onclick = function () {
     var playSound = new Audio('sounds/Tick.mp3');
     playSound.play();
     document.body.classList.toggle("darkTheme");
     if (document.body.classList.contains("darkTheme")) {
          document.getElementById("moon").style.display = "none";
          document.getElementById("sun").style.display = "block";
          document.getElementById("sun").style.color = "#fff";
     }
     else {
          document.getElementById("moon").style.display = "block";
          document.getElementById("sun").style.display = "none";
     }
}