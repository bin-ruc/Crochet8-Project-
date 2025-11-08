function openModal(productId) {
  const modal = document.getElementById("productModal");
  const modalDetails = document.getElementById("modalDetails");
  
  let content = "";

  if (productId === "brown-shirt") {
    content = `
      <h2>Brown Aesthetic Streetwear Fashion Tattoo Inspired</h2>
      <img src="images/brown-shirt.jpg" alt="Brown Aesthetic Streetwear Shirt">
      <p>A tattoo-inspired design blending minimal urban streetwear and culture. Limited pre-order available.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRe8rX6UViGJlPSbl-H2b8Fe2RLL6Kq7bO9hqCAKKNW0j4tw/viewform?usp=header" target="_blank">Order Now</a>
      <p style="margin-top: 1rem; color: #b3b3b3;">More details available in the Google Form.</p>
    `;
  } else {
    content = `
      <h2>Coming Soon</h2>
      <img src="images/${productId}.jpg" alt="Coming Soon">
      <p>This product is currently in production. Stay tuned for drop updates!</p>
    `;
  }

  modalDetails.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("productModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
