// script.js
function filterCommands() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const commands = document.querySelectorAll(".command");
    const noResults = document.getElementById("noResults");
    let hasResults = false;

    commands.forEach(command => {
        const commandName = command.querySelector(".command-name").textContent.toLowerCase();
        const commandDesc = command.querySelector(".command-desc").textContent.toLowerCase();

        if (commandName.includes(input) || commandDesc.includes(input)) {
            command.style.display = "block";
            hasResults = true;
        } else {
            command.style.display = "none";
        }
    });

    noResults.style.display = hasResults ? "none" : "block";
}
