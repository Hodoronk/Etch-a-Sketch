const container = document.querySelector('.container');
const input = document.querySelector('.input');


let num = input.value * input.value;
for(i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);

}


let rowNum = input.value;
container.style.cssText = `grid-template-columns: repeat(${rowNum}, 50px);`;
console.log(rowNum);
