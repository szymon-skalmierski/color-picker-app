const box = document.querySelector('.box');
const rangesText = document.querySelectorAll('.range span:nth-of-type(2)');
const rgbResults = document.querySelectorAll('#rgb p span');
const hexResult = document.querySelector("#hex p");
const colorInput = document.querySelector(".color-input input");
let ranges = document.querySelectorAll('.range input');

function rgbToHex(source){
    let hex = "#";
    source.forEach((element)=>{
        let hexValue = (+(element.value)).toString(16);
        if(hexValue.length > 1) hex += hexValue;
        else hex += `0${hexValue}`;
    })
    hexResult.innerHTML = hex;
    return hex;
}
colorInput.value = rgbToHex(ranges);

console.log(document.body.style.backgroundColor)
if(sessionStorage.getItem('rgb')){
    let rgb = sessionStorage.getItem('rgb').split(',');
    ranges.forEach((rangeInput, index)=>{
        rangeInput.value = rgb[index];
    })
}

box.addEventListener('input', ()=>{
    sessionStorage.setItem('rgb', [ranges[0].value, ranges[1].value, ranges[2].value]);
});
colorInput.addEventListener('input', ()=>{
    if(colorInput.value.length===4){
        ranges.forEach((val, index)=>{
            val.value = parseInt(colorInput.value[index+1], 16);
        })
    } else {
        ranges.forEach((val, index)=>{
            val.value = parseInt(colorInput.value.slice(1+index*2, 1+index*2+2), 16);
        })
    }
    ranges.forEach((element, index)=> {
        rgbToHex(ranges)

        rgbResults[index].innerHTML = ranges[index].value;
        rangesText[index].innerHTML = ranges[index].value;
        document.body.style.backgroundColor = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
    });
})


document.body.style.backgroundColor = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;

rgbToHex(ranges)

ranges.forEach((element, index)=> {
    rgbResults[index].innerHTML = ranges[index].value;
    rangesText[index].innerHTML = ranges[index].value;
    element.addEventListener('input', ()=>{
        rgbToHex(ranges)

        rgbResults[index].innerHTML = ranges[index].value;
        rangesText[index].innerHTML = ranges[index].value;
        document.body.style.backgroundColor = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
    })
});