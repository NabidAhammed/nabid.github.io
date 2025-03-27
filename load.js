
        // Function to toggle navigation
        function toggleNav() {
            var nav = document.querySelector('nav');
            nav.classList.toggle('nav-active');
        }


        const text = "Welcome! I am Nabid. A full stack web developer with SEO expertise"; // Text you want to display
        const typingSpeed = 70; // Speed of typing in milliseconds
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                document.getElementById("typing-effect").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }

        // Start the typing animation when the page loads
        window.onload = function() {
            typeWriter();
        };


        // Get all button elements
var buttons = document.querySelectorAll("button");

// Function to play sound
function playSound() {
    var audio = document.getElementById("button-sound");
    audio.play();
}

// Attach click event listener to each button
buttons.forEach(function(button) {
    button.addEventListener("click", playSound);
});
window.addEventListener('load', function() {
    // Page has finished loading, hide loader
    var loader = document.querySelector('.load');
    loader.style.display = 'none';
  });

  document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".fill");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level");
          entry.target.style.width = level + "%"; // Set width according to data-level
          entry.target.classList.add("loading");
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      });
    });
  
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  });
  