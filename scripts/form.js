const products = [
    { id: "p1", name: "Smart Thermostat" },
    { id: "p2", name: "Wireless Doorbell" },
    { id: "p3", name: "Security Camera" },
    { id: "p4", name: "Smart Light Bulb" }
];

const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

// Get current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Get last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;