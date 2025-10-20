const steps =["one", "two", "three"]

steps.forEach(function(step){
    console.log(step);
})

let myList= document.querySelector("#myList");

const stepsHTML = steps.map(listTemplate);

function listTemplate(item){
    return `<li> + ($item) +</li>`;
}

console.log(stepsHtml);
myList. innerHtml = stepsHtml.join(" ");



let grades =["A", "B", "C"];
let points;

let gpaPoints = grades.map(convert);
          
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
    console.log(gpaPoints);

    let totalPoints = gpaPoints.reduce(getTotal);

    function getTotal(total, item){
        return total + item;
    }

    console.log(TotalPoints);

    let gpaAverage = totalPoint/gpaPoints.length;

    console.log(gpaAverage);


    
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.lenght < 6;
})

console.log(shortWords);


const students = [
    {
    last: 'Andrus', 
    first: 'Aaron'
    },
    {
    last: 'Masa',
    first:'Manny'
    },
    {
    last: 'Tanda', 
    first: 'Tamanda'
    }
];
let container = document.querySelector("#studentContainer");
students.forEach(function(item){
    let name = document.create Element("div");}
    let html = `
    <span>${item.first}</span>
    <span>${item.last}</span>
`
    name.innerHtml = html;

          