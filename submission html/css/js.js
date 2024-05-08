// Select the navigation element
const navList = document.querySelector('.nav_list ul');

// Add event listener to the navigation list
navList.addEventListener('click', function(event) {
  // Check if the clicked element is a list item (li)
  if (event.target.tagName === 'LI') {
    // Get the clicked list item
    const clickedItem = event.target;
    
    // Find the submenu element associated with the clicked item
    const subMenu = clickedItem.querySelector('.nav_list_riwayat');
    
    // Toggle the visibility of the submenu
    subMenu.classList.toggle('active');
  }
});
