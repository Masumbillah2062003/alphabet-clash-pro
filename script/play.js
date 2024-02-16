function continuePlay(){
    const alphabetLetter = randomly();
    
    const alphabet = document.getElementById('alphabet-or-letter');
    alphabet.innerText = alphabetLetter;
    // console.log('current alphabet', alphabet.innerText)
    
    randomBgColor(alphabetLetter.toLowerCase());
}



function play(){
    elementById('firstSection');
    elementById('thirdSection');
    elemenRemovetById('secondSection');

    // score and life return update :
    setTextElementValuById('score', 0)
    setTextElementValuById('current-life', 5);


    continuePlay();
}


document.addEventListener('keyup', function(event){
    // console.log(event);
    const eventKey = event.key;
    // console.log('eventKey :', eventKey)

    if(eventKey == 'Escape'){
        gameOver()
    }


    const alphabetAddId = document.getElementById('alphabet-or-letter');
    const alphabetValue = alphabetAddId.innerText;
    const alphabetLowerCase = alphabetValue.toLowerCase();
    if(eventKey === alphabetLowerCase){

        //score :--
        const score = document.getElementById('score');
        const scoreInnerText = score.innerText;
        // console.log(typeof scoreInnerText) // string datatype;
        // string to number convert :
        const stringToNumber = parseInt(scoreInnerText);
        // console.log(typeof stringToNumber); // Number dataType
        const scoreResult = stringToNumber + 1;
        score.innerText = scoreResult;


        removerandomBgColor(alphabetLowerCase);
        continuePlay();
    }
    else{
        //life : --- // main Structure common_function.js এর মধ্যে 
        const life = geiTextElementValueById('current-life');
        const lifeResut = life - 1;
        setTextElementValuById('current-life', lifeResut);
        if(lifeResut === 0){

            gameOver();
            
            // Or :- 
            // elementById('secondSection');
            // elemenRemovetById('thirdSection');
        }
    }
});

function gameOver(){
    elementById('secondSection');
    elemenRemovetById('thirdSection');

    //get game score :
    const score = document.getElementById('score');
    const gameScoreValue = score.innerText;
    const scoreNum = Number(gameScoreValue);
    // console.log(typeof scoreNum);

    // set game score :
    const gameScore = document.getElementById('game-score');
    gameScore.innerText = scoreNum;

    // alphabet keyboard bg color clear :--
    const alphabetAddId = document.getElementById('alphabet-or-letter');
    const alphabetText = alphabetAddId.innerText;
    // console.log(alphabetText)
    const lowerCase = alphabetText.toLowerCase();

    //remove bg color :-- 
    removerandomBgColor(lowerCase);
}







// function handleKeyboardKeyUpEvent(event){
//     const eventKey = event.key;

//     // console.log(eventKey);

//     const currentAlphabet = document.getElementById('alphabet-or-letter');
//     const currentAlphabetInnerText = currentAlphabet.innerText;
//     const alphabetLower = currentAlphabetInnerText.toLowerCase();
//     // console.log(alphabetLower, eventKey);

//     if(eventKey === alphabetLower){
//         removerandomBgColor(alphabetLower);
//         continuePlay();
//     }
//     else{
//         console.log('No, you are false')
//     }
// }

// document.addEventListener('keyup', handleKeyboardKeyUpEvent)
