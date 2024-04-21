// Update the current year
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Display the last modified date
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last modified: " + document.lastModified;
