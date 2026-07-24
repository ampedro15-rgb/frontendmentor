// DOM ELEMENTS
// I think the only thing I need is the share button
// Actually I need the popup menu itself as well

const shareButton = document.getElementById("share");
const popupMenu = document.getElementById("popup")

// Now add the listener for that button being clicked

shareButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    popupMenu.classList.toggle("hidden")
}

