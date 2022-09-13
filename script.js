
const container = document.querySelector('.container');
const res = document.querySelector('#result');
const input = document.querySelector('.input');
res.innerHTML = input.value;


function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let iVal;
input.addEventListener ('click', function(e){

    iVal = input.value;
    let num = iVal * iVal;
    let pix = 500 / iVal;
    container.style.cssText = `grid-template-columns: repeat(${iVal}, ${pix}px);`;
    res.innerHTML = input.value;

    console.log(container.childNodes);
    if(container.childNodes !== 'undefined'){ //if container already has children, we need to delete them so that they dont stack with each iteration
        removeAllChildNodes(container);
    }




    
for(let i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);
    console.log(i);
    newDiv.addEventListener('click', function(){
        newDiv.classList.toggle('rStyle');
        });

}



// container.style.cssText = `grid-template-rows: repeat${iVal}, ${pix}px`;

//rows compound each time aparently;
console.log(`ival at the very end is ${iVal}`);
console.log(`num at the end is ${num}`);


});

console.log(iVal);