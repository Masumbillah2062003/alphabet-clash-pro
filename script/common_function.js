function elementById(eventElement){
    const setClassChild = document.getElementById(eventElement);
    setClassChild.classList.add('hidden');

}

function elemenRemovetById(eventElement){
    const removeClassChild = document.getElementById(eventElement)
    removeClassChild.classList.remove('hidden');
}




function randomBgColor(elementId){
    const bgColor = document.getElementById(elementId);
    bgColor.classList.add('bg-orange-800');
    bgColor.classList.add('text-white')
}
function removerandomBgColor(elementId){
    const bgColor = document.getElementById(elementId);
    bgColor.classList.remove('bg-orange-800');
    bgColor.classList.remove('text-white')
}


function randomly(){
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetToArray = alphabetString.split('');

    const randomcal = Math.random() * 25;
    const IntegerNum = Math.round(randomcal);

    const alphabet = alphabetToArray[IntegerNum];
    return alphabet;
}


function geiTextElementValueById(elementId){
    const elementIdName = document.getElementById(elementId);
    const elementInnerText = elementIdName.innerText;
    const stringToNumber = parseInt(elementInnerText);
    return stringToNumber;
}
function setTextElementValuById(elementId, value){
    const elementIdName = document.getElementById(elementId);
    elementIdName.innerText = value;
}