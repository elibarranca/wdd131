const PI = 3.14;
let radius = 3; //let is the right keyword to make a variable, not var

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

const one = 1;
const two = "2";

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

                  
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block


//-------------------------------------------------


<label for="webdevlist">Choose One:</label>
<select name="code" id="webdevlist">
    <option>Choose One:</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
</select>          


  

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})

const image = document.querySelector('img');
image.setAttribute("src", "images/html_css_js.png");
image.setAttribute("alt", "HTML, CSS, JS logo");
                
document.body.className = "blue"; //changes the body class to blue, which is defined in the css file            