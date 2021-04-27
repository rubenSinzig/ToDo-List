// function for ToDo list
const addToList = () => {
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
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
