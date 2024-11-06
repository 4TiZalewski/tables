// @ts-check
const button = document.querySelector("#createTable");
const display = document.querySelector(".display");

if (button && display) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (button.classList.contains("yellow")) {
            button.classList.add("blue");
            button.classList.remove("yellow");
            button.textContent = "Generuj tabelę";
            
            while (display.firstChild) {
                display.removeChild(display.firstChild);
            }

            display.classList.add("hidden");
        } else {
            button.classList.add("yellow");
            button.classList.remove("blue");
            button.textContent = "Usuń tabelę";

            users.forEach((row) => {
                const rowElement = document.createElement("tr");

                row.forEach((element) => {
                    const tableDataElement = document.createElement("td");
                    const textNode = document.createTextNode(element.toString());

                    tableDataElement.appendChild(textNode);
                    rowElement.appendChild(tableDataElement);
                });

                display.appendChild(rowElement);
            });

            display.classList.remove("hidden");
        }
    });
} else {
    console.error("No button!");
}