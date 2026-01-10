// Get current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Get last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;