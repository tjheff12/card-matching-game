
function test(){
    const arr = ["1,2","1,1"]

    console.log(arr.includes("1,0"));
}

//initialize cards
function initCards(){
    //variables in case I want to add ability to customize game size;
    const numOfRows = 4;
    const numOfCols = 4;


    //create first array
    const cards = new Array(numOfRows);

    //create double array
    for (let i = 0; i < cards.length; i++) {
        cards[i] = new Array(numOfCols);
    }

    //list of available positions to add a value to
    const availablePositions = [];
    for (let i = 0; i < numOfRows; i++){
        for(let j = 0; j < numOfCols; j++){
            availablePositions.push([i,j]);
        }
    }
    //number of positions left to assign
    let positionsLeft = numOfCols * numOfRows;

    //randomly assign values to all cards
    while(positionsLeft != 0){
        const cardValue = positionsLeft/2;

        const index = Math.floor(Math.random() * availablePositions.length);
        const pos1 = availablePositions[index]
        availablePositions.splice(index, 1);

        const index2 = Math.floor(Math.random() * availablePositions.length);
        const pos2 = availablePositions[index2];
        availablePositions.splice(index2, 1);

        cards[pos1[0]][pos1[1]] = cardValue;
        cards[pos2[0]][pos2[1]] = cardValue;
        
        positionsLeft -= 2;
    }





    return cards;
}


function displayCards(cards, pos1, pos2){
    for(let i = 0; i < cards.length; i++){
        for(let j = 0; j < cards[i].length; j++){
            if(i === pos1 && j === pos2){
                process.stdout.write(cards[i][j] + " ");
            } else {
                
            }
        }
        console.log();
    }
}

function main(){
    
    cards = initCards();

    displayCards(cards, pos1, pos2);
    console.clear();
}

main()