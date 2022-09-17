
const container = document.querySelector('.container');
const res = document.querySelector('#myValue');
const input = document.querySelector('.input');
const rainbow = document.querySelector('#rainbow')
const clearButton = document.querySelector('#resButton');
let iVal;
let rainbowCheck = 0;


rainbow.addEventListener('click', function(e){ 
    if(rainbowCheck === 0){
        rainbowCheck = 1;
    }else if(rainbowCheck === 1){
        rainbowCheck =0
    }
});

function removeAllChildNodes(parent){       // removes all of container's children
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
        rainbowCheck = 0;
    }
}

function doThing(){
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
        }
        });

}
}
res.innerHTML = `${input.value} x ${input.value}`






// I can't manage to make input.addEventListener take doThing as a function, so instead I made it take the whole thing again. Need a fix for this
doThing();
input.addEventListener ('click', function(e){
    doThing();
});


clearButton.addEventListener('click', function(e){
    removeAllChildNodes(container);
    rainbowCheck = 0;
    doThing();
});
