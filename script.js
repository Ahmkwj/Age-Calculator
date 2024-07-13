document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Show loading spinner
  document.getElementById('loading').classList.remove('hidden');
  
  // Simulate delay (10 seconds)
  setTimeout(function() {
    // Hide loading spinner
    document.getElementById('loading').classList.add('hidden');
    
    // Show result
    const ageInput = document.getElementById('ageInput').value;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('ageResult').textContent = ageInput;
  }, 30000); // 10 seconds in milliseconds
});
