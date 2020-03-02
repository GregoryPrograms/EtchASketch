const paintColor = "#A52A2A";
const SKETCHSIZE = "576px";
const STARTDIM = 16;

const sketchboard = document.createElement('div');
sketchboard.style.cssText="margin:auto;height:" + SKETCHSIZE + ";width:"
                          + SKETCHSIZE + ";border:solid #D2691E;background-color:#B0B0B0;";
createGrid(STARTDIM);  //Creates a 16x16 grid
document.body.style.backgroundImage = "url(Assets/redPlasticBackground.jpg)";
document.body.appendChild(sketchboard);

var palette = document.createElement('div');

//Creates all elements on sketchboard, assigns them 'grid' class.
function createGrid(gridDim){
    for(var gridColIndex = 0; gridColIndex < gridDim; gridColIndex++){
        var sketchCol = document.createElement('div');
        sketchCol.style.cssFloat = "left";
        for(var gridRowIndex = 0; gridRowIndex < gridDim; gridRowIndex++){
            var gridBlock = document.createElement('div');
            gridBlock.style.height=(576 / gridDim) + "px";
            gridBlock.style.width=(576 / gridDim) + "px";
            gridBlock.addEventListener("mouseover", function (e) {
                e.target.style.background = paintColor;
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
    var grid_dim = prompt("Input your chosen grid dimensions" , STARTDIM);
    createGrid(grid_dim);
}
document.body.appendChild(clearBoard);