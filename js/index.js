// --- Footer ---

// footer and add to body
const body = document.querySelector("body");
const footer = document.createElement("footer");
body.appendChild(footer);

// create year
const today = new Date();
const thisYear = today.getFullYear();

// create copyright text
const copyright = document.createElement("p");
copyright.innerHTML = `© ${thisYear} Nathaly`;
footer.appendChild(copyright);

// --- Skills ---

const skills = ["HTML", "CSS", "JavaScript", "Git", "Github", "VSCode", "SQL", "Tableau"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills [i];
    skillsList.appendChild(skill);
}