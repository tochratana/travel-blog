const pins = [
  {
    id: 1,
    title: "Modern Minimalist Interior",
    author: "Interior Design Co",
    image:
      "https://plus.unsplash.com/premium_photo-1687984123129-1794500ac338?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1600188768149-f27db3bc6ef9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Mountain Landscape Photography",
    author: "Nature Shots",
    image:
      "https://images.unsplash.com/photo-1485289284810-303162a4add7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://media.istockphoto.com/id/1461433580/photo/serious-student-examining-notes-on-clipboard.jpg?s=1024x1024&w=is&k=20&c=jvonNG0YL7Wp2Ksv01a1InfGunZMou8W9HVICCu6S4w=",
  },
  {
    id: 3,
    title: "Stylish Summer Outfit Ideas",
    author: "Fashion Forward",
    image:
      "https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1636038692415-6276311a53cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Healthy Breakfast Bowl",
    author: "Food Enthusiast",
    image:
      "https://images.unsplash.com/photo-1622525124300-c6bde73bf96a?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1611199340099-91a595a86812?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "DIY Home Decor Projects",
    author: "Crafty Creator",
    image:
      "https://images.unsplash.com/photo-1489258205848-4b9651de165b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1579293676244-953f569610cd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Urban Photography",
    author: "City Explorer",
    image:
      "https://images.unsplash.com/photo-1525856331869-3d345509b9fb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1580852411004-1eccbaa0f21a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Abstract Art Collection",
    author: "Modern Artist",
    image:
      "https://images.unsplash.com/photo-1509715367195-b9a491f63d58?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1602677416173-f33f012bafd7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Workspace Setup Ideas",
    author: "Productivity Pro",
    image:
      "https://images.unsplash.com/photo-1678026777069-138834373d59?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://plus.unsplash.com/premium_photo-1664382465607-420346d391bd?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Beach Sunset Photography",
    author: "Travel Enthusiast",
    image:
      "https://images.unsplash.com/photo-1565627684002-13b8deb569e3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://plus.unsplash.com/premium_photo-1703630157294-e1e4631b4fe0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Architectural Wonders",
    author: "Design Appreciator",
    image:
      "https://plus.unsplash.com/premium_photo-1672316380345-2756f25e2481?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=3241&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Plant Styling Tips",
    author: "Urban Jungle",
    image:
      "https://images.unsplash.com/photo-1680695919961-9a47baa429ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://plus.unsplash.com/premium_photo-1661430897537-be7d7e9a9b57?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Autumn Forest Walk",
    author: "Nature Lover",
    image:
      "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1626105985454-c6aa0098615c?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Coffee Art Designs",
    author: "Barista Expert",
    image:
      "https://plus.unsplash.com/premium_photo-1701202021061-a592100ff668?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    title: "Night City Photography",
    author: "Urban Nights",
    image:
      "https://images.unsplash.com/photo-1569878698933-667997e71b11?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://plus.unsplash.com/premium_photo-1674777843441-04dd6cd672ee?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "Watercolor Painting Ideas",
    author: "Artist Community",
    image:
      "https://images.unsplash.com/photo-1575348021159-aa1d0d95eac5?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar:
      "https://images.unsplash.com/photo-1626105985445-6430a31f6f96?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// TODO fetch from array object
// Function to create pins
function createPins() {
  const gridElement = document.getElementById("masonry-grid");

  pins.forEach((pin) => {
    const pinElement = document.createElement("div");
    pinElement.className = "pin";

    // Create the HTML for the pin
    pinElement.innerHTML = `
			<img src="${pin.image}" alt="${pin.title}" class="pin-image">
			<div class="overlay"></div>
			<div class="pin-buttons">
				<button class="pin-button">⋯</button>
				<button class="pin-button">↗</button>
			</div>
			<button class="save-button">Save</button>
			<div class="pin-content">
				<h3 class="pin-title">${pin.title}</h3>
				<div class="pin-author">
					<img src="${pin.authorAvatar}" alt="${pin.author}" class="author-avatar">
					${pin.author}
				</div>
			</div>
		`;

    // Add event listeners
    pinElement.addEventListener("click", () => {
      console.log(`Pin clicked: ${pin.title}`);
    });

    // Append to grid
    gridElement.appendChild(pinElement);
  });
}

// Initialize pins when the page loads
document.addEventListener("DOMContentLoaded", () => {
  createPins();
});

// Add infinite scroll functionality
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    // Load more pins when user is close to bottom
    createPins();
  }
});
// TODO end of array object

// You'll need an API key from Unsplash
// Use your Unsplash Access Key from the image
// const unsplashAccessKey = "8VEUXKCvJnEJWorXWaXWMErj6m9xrd1p87KTEzFIBhM";

// async function fetchImages() {
//   try {
//     const response = await fetch(
//       `https://api.unsplash.com/photos/random?count=15&client_id=${unsplashAccessKey}`
//     );
//     const images = await response.json();
//     console.log(images);

//     return images.map((img) => ({
//       id: img.id,
//       title: img.alt_description || "Unsplash Image",
//       author: img.user.name,
//       image: img.urls.regular,
//       authorAvatar: img.user.profile_image.small,
//     }));
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     return []; // Return empty array on error
//   }
// }

// // Replace the createPins function with this
// async function loadPins() {
//   const pins = await fetchImages();
//   const gridElement = document.getElementById("masonry-grid");

//   pins.forEach((pin) => {
//     const pinElement = document.createElement("div");
//     pinElement.className = "pin";

//     pinElement.innerHTML = `
//             <img src="${pin.image}" alt="${pin.title}" class="pin-image">
//             <div class="overlay"></div>
//             <div class="pin-buttons">
//                 <button class="pin-button">⋯</button>
//                 <button class="pin-button">↗</button>
//             </div>
//             <button class="save-button">Save</button>
//             <div class="pin-content">
//                 <h3 class="pin-title">${pin.title}</h3>
//                 <div class="pin-author">
//                     <img src="${pin.authorAvatar}" alt="${pin.author}" class="author-avatar">
//                     ${pin.author}
//                 </div>
//             </div>
//         `;

//     gridElement.appendChild(pinElement);
//   });
// }

// // Initialize when page loads
// document.addEventListener("DOMContentLoaded", () => {
//   loadPins();
// });

// // Add infinite scroll functionality
// window.addEventListener("scroll", () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
//     // Load more pins when user is close to bottom
//     loadPins();
//   }
// });
