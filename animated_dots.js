
// Add animated dots to the education section
document.addEventListener('DOMContentLoaded', function() {
  const dotsContainer = document.querySelector('.animated-dots');
  const numberOfDots = 50;
  
  if (dotsContainer) {
    for (let i = 0; i < numberOfDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      
      // Random positions
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      dot.style.top = `${top}%`;
      dot.style.left = `${left}%`;
      
      // Random animation duration
      const animDuration = 20 + Math.random() * 40;
      dot.style.animation = `floatAnimation ${animDuration}s infinite ease-in-out`;
      
      // Random delay
      const delay = Math.random() * 5;
      dot.style.animationDelay = `${delay}s`;
      
      // Random size
      const size = 3 + Math.random() * 5;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      
      dotsContainer.appendChild(dot);
    }
  }
});



