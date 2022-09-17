
const container = document.querySelector('.container');
const res = document.querySelector('#myValue');
const input = document.querySelector('.input');
const rainbow = document.querySelector('#rainbow')
const clearButton = document.querySelector('#resButton');
const colorPick = document.querySelector('#colorpicker');
const eraser = document.querySelector('#eraser');
let iVal;
let rainbowCheck = 0;
let targetVal


rainbow.addEventListener('click', function(e){ 
    if(rainbowCheck !== 1){
        rainbowCheck = 1;
    }
});


colorPick.addEventListener('input', colorWatcher);
function colorWatcher(e){
    rainbowCheck = 3;
    targetVal = e.target.value;
}
eraser.addEventListener('click', function(e){
    if(rainbowCheck !== 4){
        rainbowCheck = 4;
    }
})


function removeAllChildNodes(parent){       // removes all of container's children
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
        rainbowCheck = 0;
    }
}

function doThing(){
    rainbowCheck = 0;
    res.innerHTML = `${input.value} x ${input.value}`
    iVal = input.value;
    let num = iVal * iVal;
    let pix = 500 / iVal;
    container.style.cssText = `grid-template-columns: repeat(${iVal}, ${pix}px);`;

    if(container.childNodes !== 'undefined' || rainbowCheck === 1){ 
        removeAllChildNodes(container);
    }

for(let i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);
    newDiv.addEventListener('click', function(e){

        if(rainbowCheck === 0){
        e.target.style.background = 'black';}
        else if(rainbowCheck === 1){    
            newDiv.style.cssText = `background-color:${'#' + Math.floor(Math.random() * 16777215).toString(16)}`;
        }else if(rainbowCheck === 3){
            e.target.style.background = `${targetVal}`;
        }else if(rainbowCheck === 4){
            e.target.style.background = 'white';
        }
        });

}
}
res.innerHTML = `${input.value} x ${input.value}`



doThing();
input.addEventListener ('click', function(e){
    doThing();
});


clearButton.addEventListener('click', function(e){
    removeAllChildNodes(container);
    rainbowCheck = 0;
    doThing();
});
