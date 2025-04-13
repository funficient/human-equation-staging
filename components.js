  // Load the header component
fetch('__header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-container').innerHTML = data;

  // Dynamically set the active class after the header is loaded
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    // Remove the active class from all links
    link.classList.remove('nav-item-active');

    // Add the active class only to the matching link
    if (link.href === window.location.href) {
      link.classList.add('nav-item-active');
    }
  });
});


  

  //Load Footer
fetch('__footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer-container').innerHTML = data;
});







  
