document.addEventListener("DOMContentLoaded", function () {
  // Fetch 6 placeholder photos with titles
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("places-container");
      if (!container) {
        console.error('Container with id "places-container" not found in the DOM.');
        return;
      }
      
      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow-md overflow-hidden";

        card.innerHTML = `
          <img src="${item.url}" alt="Placeholder photo featuring ${item.title} as the main subject, displayed in a simple and calm environment, no visible text" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold">${item.title}</h3>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      const container = document.getElementById("places-container");
      if (container) {
        container.innerHTML = <p class="text-red-500">Failed to load data. Please try again.</p>;
      }
    });
});
