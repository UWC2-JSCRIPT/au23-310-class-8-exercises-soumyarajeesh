function animateBackgroundColor(duration) {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const rgbValue = Math.min(255, Math.floor((progress / duration) * 255));
      document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
  
      if (rgbValue < 255) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
  
  animateBackgroundColor(4500);