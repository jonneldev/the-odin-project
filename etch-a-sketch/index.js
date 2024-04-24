const divContainer = document.querySelector("#div-container");
let gridSize = 16;

// Function to create the grid
function createGrid() {
    divContainer.innerHTML = ""; // Clear the existing grid
    
    for (let i = 0; i < gridSize * gridSize; i++) {

        // Check if grid size is not above 100
        if (gridSize > 100) {
            gridSize = prompt("Grid size must be <100, please input <100")
        }

        const screenWidth = window.innerWidth;
        const squareSize = (screenWidth / gridSize);
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square-div");
        squareDiv.style.width = squareSize + 'px';
        squareDiv.style.height = squareSize + 'px';
        divContainer.appendChild(squareDiv);

        // Add event listener for mouseover with closure
        squareDiv.addEventListener("mouseover", function() {
            let interactions = 255; // Initialize interactions for each squareDiv
            return function() {
                interactions -= 25.5;
                if (interactions < 0) {
                    interactions = 0; // Ensure opacity doesn't exceed 1
                }
                squareDiv.style.backgroundColor = 'rgb(' + interactions + ',' + interactions + ',' + interactions + ')';
            };
        }());
    }
}

// Initial creation of the grid
createGrid();

// Event listener for the button to change grid size
const editGrid = document.querySelector("#edit-grid");
editGrid.addEventListener("click", function newGrid() {
    gridSize = prompt("Please input new grid.");

    createGrid(); // Recreate the grid with the new gridSize
});
