function newItem () {


//1. Adding a new item to the list of items:
let li = $('<li></li>');  //  You can store each li element in a variable
  let inputValue = $('#input').val();
  li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $("#list").append(li);  // Call the id with # and then I select it with append
   }

//2. Crossing out an item from the list of items:
function crossOut() {
 		li.classList.toggle("strike");
 	}

li.on("dblclick", function crossOut() { //Using on instead of addEventListener.  first argument is dblclick and second is crossOut
  li.toggleClass("strike");
});

//3(i).  Adding the delete button "X":

let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
list.append(crossOutButton);

//3(ii).  Adding CLASS DELETE (DISPLAY: NONE) from the css:

crossOutButton.on("click", deleteListItem);  // running eventListener with .on on the crossOutButton function.  1st argument click 2nd deleteListItem function
function deleteListItem() {
li.addClass("delete");  // running hte delete class from css into the deleteListItem function
}

// 4. Reordering the items:
$('#list').sortable();

}
