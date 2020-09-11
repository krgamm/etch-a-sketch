let generateGrid = () => {
  const gridContainer = document.querySelector("#grid-container");
  let gridSize = parseInt(prompt("Enter a number"));

  while (isNaN(gridSize)) {
    gridSize = parseInt(prompt("Enter a number"));
    if (gridSize === 0) {
      break;
    }
  }

  let squareSize = 960 / gridSize + "px";
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element", "inactive");
    gridElement.setAttribute(
      "style",
      "width: " + squareSize + "; height: " + squareSize + ";"
    );
    gridContainer.appendChild(gridElement);
  }
};

// Monitoring if grid is active or reset
let activeGrid = (currentState) => {
  elementList = document.querySelector("#grid-container").childNodes;
  let hexColor = randomColor();
  let hslColor = hexToHSL(hexColor);
  console.log(hslColor);
  if (currentState === true) {
    elementList.forEach((element) => {
      element.addEventListener("mouseenter", function (e) {
        if (e.target.classList.contains("inactive")) {
          element.style.backgroundColor = hexColor;
          element.classList.toggle("active");
          element.classList.toggle("inactive");
        } else if (e.target.classList.contains("active")) {
        }
      });
    });
  } else {
    elementList.forEach((element) => {
      element.classList.remove("active");
      element.classList.add("inactive");
      element.removeAttribute("style");
    });
    generateGrid();
    activeGrid(true);
  }
};

let randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

generateGrid();
activeGrid(true);

let reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {
  activeGrid(false);
});

// gridElement.forEach("grid-element", () => {
//   gridElement.addEventListener("mouseenter", function (e) {
//     e.gridElement.style.backgroundColor = "black";
//   });
// });
