import doctorsData from './data.js';
// --- Select Key Elements ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const tabButtons = document.querySelectorAll('.tab-btn');
const header = document.querySelector('header');

// --- 1. Hamburger Menu Functionality (for Mobile) ---
menuToggle.addEventListener('click', () => {
    // Nav menu show/hide
    navLinks.classList.toggle('show');

    // Animate the hamburger icon (Bars to X)
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');

    // Optional: Prevent scrolling when menu is open
    document.body.classList.toggle('no-scroll');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});


// --- 2. Tab Switching Logic (Hero Section) ---
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the currently active tab button
        const activeTab = document.querySelector('.tab-btn.active');

        // If the clicked button is already active, do nothing
        if (button === activeTab) return;

        // Remove active class from the current tab
        activeTab.classList.remove('active');

        // Add active class to the clicked tab
        button.classList.add('active');

        // You can add logic here to filter data based on tab selection
        console.log("Tab selected:", button.innerText);
    });
});


// --- 3. Optional: Header scroll effect ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// this is object collection of doctors data
const container = document.getElementById('doctors-container');

// Function renders the doctors data to the DOM
function displayDoctors() {
    container.innerHTML = doctorsData.map(dr => `
        <div class="dept-${dr.id} doctor-card-style">
            <div class="dr-img-box">
                <img src="${dr.pic}" alt="${dr.name}">
            </div>
            <h3>${dr.name}</h3>
            <p class="role">${dr.role}</p>
            <div class="dr-details">
                <span><i class="far fa-clock"></i> ${dr.time}</span>
                <span><i class="fas fa-money-bill-wave"></i> Fee: Rs.${dr.fees}</span>
            </div>
            <button class="book-btn">Book Appointment</button>
        </div>
    `).join('');
}

// call the Function
displayDoctors();