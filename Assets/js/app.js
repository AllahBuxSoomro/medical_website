// import { pharmacyData } from './pharmacyData.js';

// const grid = document.getElementById('medicine-grid');
// const searchInput = document.getElementById('medSearch');

// // Function: Cards ko screen par dikhane ke liye
// function displayMeds(data) {
//     grid.innerHTML = data.map(item => `
//         <div class="med-card">
//             <div class="med-img">
//                 <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150?text=Medicine'">
//             </div>
//             <div class="med-info">
//                 <span class="category-tag">${item.category}</span>
//                 <h3>${item.name}</h3>
//                 <p>${item.description}</p>
//                 <div class="price-box">
//                     <strong>Rs. ${item.price}</strong>
//                     <button class="add-btn">Add +</button>
//                 </div>
//             </div>
//         </div>
//     `).join('');
// }

// // Initial Load
// displayMeds(pharmacyData);

// Search Logic: User jab type karega
// searchInput.addEventListener('input', (e) => {
//     const value = e.target.value.toLowerCase();
//     const filteredData = pharmacyData.filter(item =>
//         item.name.toLowerCase().includes(value) ||
//         item.category.toLowerCase().includes(value)
//     );
//     loadPharmacy(filteredData);
// });


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

// Pehli baar saara data load karne ke liye
loadPharmacy(pharmacyData);

// --- SEARCH LOGIC ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); // Jo user ne likha

    // Data ko filter karein (Naam ya Category ke mutabiq)
    const filteredMeds = pharmacyData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm);
    });

    // Filtered data ko dubara load karein
    loadPharmacy(filteredMeds);
});