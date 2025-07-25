const yearSpan = document.getElementById("currentyear");
const lastModifiedPara = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;