const grid = document.querySelector("#the_grid");
// grid.style.display = "flex";
// grid.style.flexDirection = "column";



function createSquare() {
    const one_square = document.createElement("div");
    one_square.classList.add("square");
    one_square.style.backgroundColor = "yellow";
    one_square.style.width = "50px";
    one_square.style.height = "50px";
    one_square.style.borderColor = "black";
    one_square.style.borderWidth = "1px";
    // one_square.style.margin = "10px";
    one_square.style.borderStyle = "solid";

    one_square.addEventListener("mouseenter", () => {
        one_square.style.backgroundColor = "pink";
    })
    return one_square;
}

for (let j = 0; j < 16; j++) {  
    const row = document.createElement("div");
    row.id = "row_" + j;
    row.style.display = "flex";
    for (let i = 0; i < 16; i++) {
        const square = createSquare();
        row.appendChild(square);
    }
    grid.appendChild(row);
}

grid.appendChild(row);



