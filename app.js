document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload on form submission
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Display data on the page
  document.getElementById('display-data').innerHTML = `
    <h3>Submitted Data:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${`*********`}</p>
  `;
  
  // Clear the input fields
  document.getElementById('signupForm').reset();
});