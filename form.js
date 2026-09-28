// Array of products as specified in assignment requirements
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power converters", averagerating: 4.7 },
    { id: "fs-1987", name: "time warp generator", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Dynamically populate Product Name options
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Uses product id as value attribute
            option.textContent = product.name; // Uses product name as displayed text
            productSelect.appendChild(option);
        });
    }

    // Dynamic Footer Dates
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});
