const GRID_DIM = 16; //Dimensions of the grid
const sketchboard = document.createElement('div');
sketchboard.style.height="576px";
sketchboard.style.width="576px";
sketchboard.style.border = "solid #0000FF";
createGrid();
document.body.appendChild(sketchboard);

//Creates all elements on sketchboard, assigns them 'grid' class.
function createGrid(){
    for(var gridColIndex = 0; gridColIndex < GRID_DIM; gridColIndex++){
        var sketchCol = document.createElement('div');
        sketchCol.style.cssFloat = "left";
        for(var gridRowIndex = 0; gridRowIndex < GRID_DIM; gridRowIndex++){
            var gridBlock = document.createElement('div');
            gridBlock.style.height=(576 / GRID_DIM) + "px";
            gridBlock.style.width=(576 / GRID_DIM) + "px";
            gridBlock.addEventListener("mouseover", function (e) {
                e.target.style.background = 'blue';
            });  
            sketchCol.appendChild(gridBlock);
        }
        sketchboard.appendChild(sketchCol);
    }
}


//Buttons assigned to actions related to the sketchboard.
var clearBoard = document.createElement('button');
clearBoard.innerHTML = "Clear Board";
//On clicking the 'clear board' button, iterates through an array of the grids, setting all of their backgrounds to white.
clearBoard.onclick = function(){
    //sketchArray.forEach(function(gridBlock, index){
    //    gridBlock.style.background = 'white';
    //})
    sketchboard.textContent = '';
    createGrid();
}
document.body.appendChild(clearBoard);