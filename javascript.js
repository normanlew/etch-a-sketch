// Create a grid for an etch-a-sketch.  As the mouse pointer is moved across the screen,
// it leaves a trail!

const GRID_LENGTH_AND_WIDTH = 600;

prompt_button = document.querySelector("#number");
prompt_button.style.marginBottom = "20px";

createGrid(16);

prompt_button.addEventListener("click", () => {
    document.querySelector("#the_grid").innerHTML = "";
    let dimension = prompt("Please enter the number of rows (maximum of 100): ");

    if (dimension > 100) {
        dimension = 100;
    }

    createGrid(dimension);
})

function createGrid(dimension) {
    let square_length_and_width = GRID_LENGTH_AND_WIDTH/dimension;
    const grid = document.querySelector("#the_grid");

    for (let j = 0; j < dimension; j++) {  
        const row = document.createElement("div");
        row.id = "row_" + j;
        row.style.display = "flex";
        for (let i = 0; i < dimension; i++) {
            const square = createSquare(square_length_and_width);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function createSquare(width_and_height) {
    const one_square = document.createElement("div");
    one_square.classList.add("square");
    one_square.style.backgroundColor = "yellow";
    one_square.style.width = width_and_height + "px";
    one_square.style.height = width_and_height + "px";
    one_square.style.opacity = 1;

    one_square.addEventListener("mouseenter", () => {
        if (one_square.style.backgroundColor === "yellow") {
            one_square.style.backgroundColor = "purple";
            one_square.style.opacity = .1;
        }
        else {
            if (one_square.style.opacity < 1) {
                one_square.style.opacity = Number(one_square.style.opacity) + .1;
            }
        }
    })
    return one_square;
}


