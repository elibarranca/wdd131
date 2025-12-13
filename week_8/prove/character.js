const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 40,
    image: "https://elibarranca.github.io/wdd131/week_8/images/snortleblat.jpg",
 
    attack: function () {
        character.health -=20;
        // the chatacter loses 20 pints when it is attacked
        if (character.health <= 0) {
          character.health = 0;
          alert('Your character has died!💀');
        }
      }
  };

console.log(aCourse.name);

document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

document.querySelector("img").setAttribute("src", aCourse.logo);
document.querySelector("img").setAttribute("alt", "JS Logo");
document.querySelector("img").style.width = "100px";

console.log(aCourse.sections[0].roomNum);


aCourse.enrollStudent();

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});




