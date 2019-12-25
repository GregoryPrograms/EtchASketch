const GRID_DIM = 16; //Dimensions of the grid
const sketchboard = document.createElement('div');
sketchboard.style.height="576px";
sketchboard.style.width="576px";
sketchboard.style.border = "solid #0000FF";
var sketchArray = [];

//Creates all elements on sketchboard, assigns them 'grid' class.
for(var gridColIndex = 0; gridColIndex < GRID_DIM; gridColIndex++){
    var sketchCol = document.createElement('div');
    sketchCol.style.cssFloat = "left";
    for(var gridRowIndex = 0; gridRowIndex < GRID_DIM; gridRowIndex++){
        var gridBlock = document.createElement('div');
        gridBlock.style.height="36px";
        gridBlock.style.width="36px";
        gridBlock.addEventListener("mouseover", function (e) {
            e.target.style.background = 'blue';
          });
        //gridBlock.style.border = "solid #0000FF";
        sketchArray.push(gridBlock);  
        sketchCol.appendChild(gridBlock);
    }
    sketchboard.appendChild(sketchCol);
}
document.body.appendChild(sketchboard);