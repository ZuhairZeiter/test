// Function to simulate a ping request
function simulatePing() {
    const startTime = Date.now();
  
    setTimeout(() => {
      const endTime = Date.now();
      const ping = endTime - startTime;
      const pingElement = document.getElementById('ping');
      pingElement.innerText = `${ping} ms`;
  
      // Set color based on ping value
      if (ping >= 1 && ping <= 130) {
        pingElement.style.color = 'lightgreen';
      } else if (ping >= 131 && ping <= 155) {
        pingElement.style.color = 'yellow';
      } else {
        pingElement.style.color = 'red';
      }
    }, 100);
  }

// Function to update server status
function updateStatus() {
    // Here, we simulate the server status check.
    // In a real scenario, you would make an actual network request.
    const isOnline = true; // Simulate server being online
    const statusElement = document.getElementById('status');

    if (isOnline) {
        statusElement.className = 'status online';
        statusElement.innerHTML = '<p>Server is alive!</p>';
    } else {
        statusElement.className = 'status offline';
        statusElement.innerHTML = '<p>Server is offline</p>';
    }
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Theme';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Theme';
    }
}

// Initialize the status and ping updates
function initialize() {
    updateStatus();
    simulatePing();
    // Update the ping and status every 5 seconds
    setInterval(() => {
        simulatePing();
        updateStatus();
    }, 2000);

    // Add event listener to the theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Run the initialize function once the page is fully loaded
window.onload = initialize;