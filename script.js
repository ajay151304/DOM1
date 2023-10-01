/*
Write the code as per the youtuber does
Make the 3 rd element in the list have green background color
Make all the elements in the list have bold color font
*/

// const items = document.getElementsByClassName("list-group-item");

// items[2].style.backgroundColor = "green";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }
/* Add a new li element without the same class Name 
And try editing it with getelementsbyclassname and then by getelementbytagname
*/

// const li = document.getElementsByTagName("li");

// li[2].style.backgroundColor = "green";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
// }

/**
 
Make the 2nd item have green background color
Make the 3rd item invisible

 */
const li = document.getElementsByTagName("li");

li[1].style.backgroundColor = "green";

li[2].style.display = "none";
