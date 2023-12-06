document.addEventListener('DOMContentLoaded', function() {
    // Get the maintenance notice element by its ID
    const maintenanceNotice = document.getElementById('maintenance-notice');
  
    // Set a timeout to hide the notice after 5 seconds (5000 milliseconds)
    setTimeout(function() {
      maintenanceNotice.style.display = 'none'; // Hide the notice
    }, 5000);
  });