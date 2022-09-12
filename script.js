const container = document.querySelector('.container');
const input = document.querySelector('.input');
const res = document.querySelector('#result');


input.oninput = function(){
    res.innerHTML = this.value;

}

let iVal = input.value;


let num = iVal * iVal;
for(i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);

}



let rowNum = iVal;
let pix = 500 / rowNum;
container.style.cssText = `grid-template-columns: repeat(${rowNum}, ${pix}px);`;

console.log(rowNum);
