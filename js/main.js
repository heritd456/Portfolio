window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const myBtn = document.getElementById("myBtn");
  if (myBtn) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}