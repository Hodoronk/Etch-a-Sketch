const container = document.querySelector('.container');
const res = document.querySelector('#result');



const input = document.querySelector('.input');
let iVal;
input.addEventListener ('click', function(e){
    iVal = input.value;
    console.log(`ival is ${iVal}`);
    let num = iVal * iVal;
    console.log(`num is ${num}`);



for(let i = 1; i <= num; i++){
    const newDiv = document.createElement('div');
    newDiv.id = 'r' + i;
    newDiv.classList = 'gridbox';
    container.appendChild(newDiv);
    console.log(i);

}

let pix = 500 / iVal;
let sidePix = pix / 4;
container.style.cssText = `grid-template-columns: repeat(${iVal}, ${pix}px);`;
// container.style.cssText = `grid-template-rows: repeat${iVal}, ${pix}px`;

//rows compound each time aparently;
console.log(`ival at the very end is ${iVal}`);
console.log(`num at the end is ${num}`);


});

console.log(iVal);
