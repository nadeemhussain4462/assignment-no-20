// Assignment no 20 Events
// Question no 1


document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display data on the page
    document.getElementById("display-data").innerHTML = `
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
  });

//   Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
// Question no 2

function showMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}