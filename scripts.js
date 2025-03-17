let isLoggedIn = false; // Track login state
let accountName = ""; // Track account name

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Function to handle the "About Us" button click
function showAboutUs() {
    alert('About Us: Acesta este un site de încercare.');
}

// Function to show the Account modal
function showAccount() {
    const modalOverlay = document.getElementById('modal-overlay');
    const accountModal = document.getElementById('account-modal');
    const loginMessage = document.getElementById('login-message');

    modalOverlay.style.display = 'block';
    accountModal.style.display = 'block';
    switchTab('login'); // Default to Log In tab

    // Show login message if logged out
    if (!isLoggedIn) {
        loginMessage.style.display = 'block';
    } else {
        loginMessage.style.display = 'none';
    }
}

// Function to show the Settings modal
function showSettings() {
    const modalOverlay = document.getElementById('modal-overlay');
    const settingsModal = document.getElementById('settings-modal');
    modalOverlay.style.display = 'block';
    settingsModal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modals = document.querySelectorAll('.modal');
    modalOverlay.style.display = 'none';
    modals.forEach(modal => modal.style.display = 'none');
}

// Function to switch tabs in the Account modal
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(`${tabName}-tab`).style.display = 'block';
}

// Function to handle Log In
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) {
        isLoggedIn = true;
        accountName = email.split('@')[0]; // Set account name to the part before @
        updateUI();
        alert(`Logged in successfully!`);
        closeModal();
    } else {
        alert('Please enter your email and password.');
    }
}

// Function to handle Sign Up
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (email && password) {
        alert(`Signed up successfully!`);
        closeModal();
    } else {
        alert('Please enter your email and password.');
    }
}

// Function to handle Google login
function loginWithGoogle() {
    alert('Logging in with Google...');
    isLoggedIn = true;
    accountName = "Google User"; // Placeholder for Google login
    updateUI();
    closeModal();
}

// Function to handle Facebook login
function loginWithFacebook() {
    alert('Logging in with Facebook...');
    isLoggedIn = true;
    accountName = "Facebook User"; // Placeholder for Facebook login
    updateUI();
    closeModal();
}

// Function to update UI based on login state
function updateUI() {
    const loggedInContent = document.getElementById('logged-in-content');
    const loggedOutContent = document.getElementById('logged-out-content');
    const accountNameElement = document.getElementById('account-name');

    if (isLoggedIn) {
        loggedInContent.style.display = 'block';
        loggedOutContent.style.display = 'none';
        accountNameElement.textContent = accountName; // Display account name
    } else {
        loggedInContent.style.display = 'none';
        loggedOutContent.style.display = 'block';
        accountNameElement.textContent = ""; // Clear account name
    }
}

// Function to save settings
function saveSettings() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    alert(`Settings saved:\nName: ${name}\nAddress: ${address}`);
    closeModal();
}

// Function to clear search input
function clearSearch() {
    document.getElementById('search-input').value = "";
}

// Initialize UI
updateUI();