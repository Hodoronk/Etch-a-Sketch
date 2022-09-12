const container = document.querySelector('.container');
const input = document.querySelector('.input');
const res = document.getElementById('#result');





let num = input.value * input.value;
for(i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);

}



let rowNum = input.value;
let pix = 500 / rowNum;
container.style.cssText = `grid-template-columns: repeat(${rowNum}, ${pix}px);`;

console.log(rowNum);
