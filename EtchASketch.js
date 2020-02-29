const sketchboard = document.createElement('div');
sketchboard.style.margin="auto";
sketchboard.style.height="576px";
sketchboard.style.width="576px";
sketchboard.style.border = "solid #0000FF";
sketchboard.style.backgroundColor = "#B0B0B0";
createGrid(16);  //Creates a 16x16 grid
document.body.style.backgroundImage = "url(Assets/redPlasticBackground.jpg)";
document.body.appendChild(sketchboard);

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
    var grid_dim = prompt("Input your chosen grid dimensions" , "16");
    createGrid(grid_dim);
}
document.body.appendChild(clearBoard);