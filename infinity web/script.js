document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav-item");
  const currentPage = window.location.pathname.split("/").pop();
  
  // Highlight the active link based on the current page
  navItems.forEach(navItem => {
    if ((navItem.id === "Home" && currentPage === "infinity.html") ||
        (navItem.id === "MyPokemonCards" && currentPage === "cards.html")) {
      navItem.classList.add("active");
    }
  });
  
  // Add an event listener to each navigation link
  navItems.forEach(navItem => {
    navItem.addEventListener("click", function() {
      const targetPage = this.id === "Home" ? "infinity.html" : "cards.html";
      window.location.href = targetPage;
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const items = document.querySelectorAll(".item");

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      
      items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      });
  });
});d



