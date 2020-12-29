"use strict";

console.log("its working");
let notesObj = [];
//if user adds a note add it to the local storage
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});
//show notes
showNotes();
function showNotes() {
  //   console.log("we are here");
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="notes--card card mx-2 my-2 yellow" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card ${index + 1}</h5>
            <p class="card-text">
              ${element}
            </p>
            <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-dark">Delete</button>
          </div>
        </div>
        
        `;
  });
  let noteElm = document.getElementById("notes");
  if (notesObj.length !== 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = `nothing to show yet, use the "add notes" section above to add notes`;
  }
}
// deleting the card

function deleteNote(index) {
  //   console.log(`i am deleting ${index}`);
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", function () {
  let inputVal = searchBox.value.toLowerCase();
  //   console.log(inputVal);
  let notecards = document.getElementsByClassName("notes--card");
  Array.from(notecards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

//additional features
// add title
// add modal
// add the important note feature
//so on....
