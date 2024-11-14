const readMoreBtn = document.getElementById("readMoreBtn");
const fullContent = document.querySelector(".content-full");
const summaryContent = document.querySelector(".content-summary");

// Event listener for button click
readMoreBtn.addEventListener("click", function () {
  if (fullContent.style.display === "none") {
    // Show full content and hide summary
    fullContent.style.display = "block";
    summaryContent.style.display = "none";
    readMoreBtn.textContent = "Read Less";
  } else {
    // Hide full content and show summary
    fullContent.style.display = "none";
    summaryContent.style.display = "block";
    readMoreBtn.textContent = "Read More";
  }
});
