const shareArrow = document.querySelector('.icon-container');
    const shareSet = document.querySelector('.share');

    shareArrow.addEventListener('click', function () {
      if (shareSet.style.display === "flex") {
        shareSet.style.display = "none";
      } else {
        shareSet.style.display = "flex";
      }
    });