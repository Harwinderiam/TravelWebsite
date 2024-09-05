const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

//For Toursim page

function showDetails(element) {
    // Find the parent card of the clicked image
    const card = element.closest('.card');
    
    // Toggle the visibility of the details section
    const details = card.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
document.querySelectorAll('.image-gallery').forEach(gallery => {
    let currentIndex = 0;
    const images = gallery.querySelectorAll('img');

    // Initialize the first image
    images[currentIndex].classList.add('active');

    // Function to show the next image
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Function to show the previous image
    function showPreviousImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Create arrow buttons
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('arrow', 'left');
    leftArrow.innerHTML = '&#10094;'; // Left arrow character
    leftArrow.onclick = showPreviousImage;
    gallery.appendChild(leftArrow);

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('arrow', 'right');
    rightArrow.innerHTML = '&#10095;'; // Right arrow character
    rightArrow.onclick = showNextImage;
    gallery.appendChild(rightArrow);
});

