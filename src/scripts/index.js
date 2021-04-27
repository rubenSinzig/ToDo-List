// function for ToDo list
const addToList = () => {
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    //
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // adding 1 of 4 given color to the list item
    newLi.style.color = colorGen();
    // add the li with user input to ul
    document.querySelector(".result").appendChild(newLi);
    // cleaning the input field after user add
    document.querySelector("#userData").value = "";
    // declaring var & creat new elements
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    // adding text to the buttons
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    // Injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // Adding class
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
  } else {
    document.querySelector("#userData").placeholder = "Please Enter Item";
  }
};

// random color
const colorGen = () => {
  let result = "";
  let colorCodeArr = ["#fad176", "#f5708b", "#abd383", "#cec2ed"];
  result += colorCodeArr[Math.floor(Math.random() * colorCodeArr.length)];
  return result;
};
