import { pharmacyData } from './pharmacyData.js';

const container = document.getElementById('medicine-list');
const searchInput = document.getElementById('medSearch');

// Function: Jo data display karega
function loadPharmacy(dataToDisplay) {
    let htmlMarkup = "";

    // Agar koi result na mile toh message dikhayein
    if (dataToDisplay.length === 0) {
        container.innerHTML = `<h3 style="width:100%; text-align:center; padding:20px;">Result not found 🥹!</h3>`;
        return;
    }

    dataToDisplay.forEach(item => {
        htmlMarkup += `
            <div class="med-card">
                <div class="med-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
                </div>
                <div class="med-info">
                    <span class="category-tag">${item.category}</span>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price-box">
                        <strong>Rs. ${item.price}</strong>
                        <button class="add-to-cart">Add +</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlMarkup;
}

// call the Pharmacy data to display on page load
loadPharmacy(pharmacyData);

// --- SEARCH LOGIC ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Jo user ne likha

    //Using filter to find matching items
    const filteredMeds = pharmacyData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm);
    });

    // filtered data load on display
    loadPharmacy(filteredMeds);
});