// --- Footer ---

// Creates footer and add to body
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

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "VSCode", "SQL", "Tableau"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills [i];
    skillsList.appendChild(skill);
}

// --- Leave a Message Form ---

const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote:
    <span> ${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
    });

   // -- Github Repos -- 
   
   fetch("https://api.github.com/users/natpoca/repos")
   .then (function (response) {
    return response.json ();
   })
   .then(function (repositories) {
    console.log(repositories);

    const projectList = document.getElementById("projects-list");

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");

        const link = document.createElement("a");
        link.href = repositories[i].html_url;
        link.target = "_blank";
        link.innerText = repositories[i].name;

        project.appendChild(link);
        projectList.appendChild(project);
    }
   })
   .catch(function (error) {
    console.log("Error fetching repositories:", error);

    const projectSection = document.getElementById("projects");
    projectSection.innerHTML +=
    "<p>Sorry, something went wrong while loading projects.</p>";
   });