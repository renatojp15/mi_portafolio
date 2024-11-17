function highlight(project) {
    project.style.transform = "scale(1.05)";
    project.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
  }
  
  function removeHighlight(project) {
    project.style.transform = "scale(1)";
    project.style.boxShadow = "none";
  }