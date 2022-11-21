const ranges = document.querySelectorAll('.range input');
const rangesText = document.querySelectorAll('.range span:nth-of-type(2)');
const rgbResults = document.querySelectorAll('#rgb p span');
const hexResult = document.querySelector("#hex p");


document.body.style.backgroundColor = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`
rgbToHex()
function rgbToHex(){
    let hex = "#";
    ranges.forEach((element)=>{
        let hexValue = (+(element.value)).toString(16);
        if(hexValue.length > 1) hex += hexValue;
        else hex += `0${hexValue}`;
    })
    hexResult.innerHTML = hex
}

ranges.forEach((element, index)=> {
    rgbResults[index].innerHTML = ranges[index].value;
    rangesText[index].innerHTML = ranges[index].value;
    element.addEventListener('input', ()=>{
        rgbToHex()
        rgbResults[index].innerHTML = ranges[index].value;
        rangesText[index].innerHTML = ranges[index].value;
        document.body.style.backgroundColor = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
    })
});
console.log(rgbResults)