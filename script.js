
const container = document.querySelector('.container');
const res = document.querySelector('#result');
const input = document.querySelector('.input');
const rainbow = document.getElementsByClassName('.rainbow')
let rainbowCheck = 0;


// function rainbowFun(){
//     if(rainbowCheck === 0){
//         rainbowCheck === 1;
//         return rainbowCheck;
//     }else if(rainbowCheck === 1){
//         rainbowCheck === 0;
//         return rainbowCheck;
//     }
// }

// rainbow.addEventListener('click', rainbowFun(event));




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
});
