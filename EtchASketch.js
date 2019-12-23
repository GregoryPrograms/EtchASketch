const GRID_DIM = 16; //Dimensions of the grid
const sketchboard = document.createElement('div');
sketchboard.style.height="1600px";
sketchboard.style.width="1600px";
var sketchArray = [];

//Creates all elements on sketchboard, assigns them 'grid' class.
for(var gridColIndex = 0; gridColIndex < GRID_DIM; gridColIndex++){
    var sketchRow = document.createElement('div');
    sketchRow.style.cssFloat = "left";
    for(var gridRowIndex = 0; gridRowIndex < GRID_DIM; gridRowIndex++){
        var gridBlock = document.createElement('div');
        gridBlock.style.height="50px";
        gridBlock.style.width="50px";
        gridBlock.style.border = "thick solid #0000FF";
        sketchArray.push(gridBlock);  
        sketchRow.appendChild(gridBlock);
    }
    sketchboard.appendChild(sketchRow);
}
document.body.appendChild(sketchboard);