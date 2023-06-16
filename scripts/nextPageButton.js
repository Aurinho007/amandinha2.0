const windowHeight = window.innerHeight;
const button = document.getElementById('next-page-button')

button.addEventListener('click', () => {
    window.scrollTo({
      top: window.pageYOffset + windowHeight,
      behavior: 'smooth'
    }); 
});


window.addEventListener('scroll', function() {
  if (isAtBottom()) {
    button.style.visibility = 'hidden'
  } else {
    button.style.visibility = 'visible'
  }
});

function isAtBottom() {
  const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  return pageHeight - (scrollPosition + windowHeight) < 10;

}

