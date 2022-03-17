teams = [ "Maguire" , "Fred", "Pique", "Pedri" , "Xavi" , "Messi" , "Aguerooooo" , "Neymar" , "Pogba", "Pep", "Jose", "Klopp" ]

amount = 4;

let shuffle = teams.sort(() => Math.random() - 1);

function groupArray(teamArray , divider){
    let index = 0;
    let arrayLength = teamArray.length;
    let sortArray = [];

    for (index = 0; index < arrayLength ; index += divider){
        divide = teamArray.slice(index, index + divider);
        sortArray.push(divide);
    }
    return sortArray;
}

let teamSelection = groupArray(shuffle, amount);
console.log(teamSelection);

const input = document.getElementById("userInput");
const sums = document.getElementById("teamSelected");
const output = document.getElementById("output");
const buttons = document.getElementById("buttons");

function getInputValue(){
    output.innerHTML = "";
    const values = input.value;
    const total = sums.value;
    let player = values.split(",");


    let random = person.sort( () => Math.random() - 1);
    console.log(random)

    function group(array, size){
        if (array.length <= size){
            return [array];
        }
    }
}