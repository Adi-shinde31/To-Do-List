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
     }
}