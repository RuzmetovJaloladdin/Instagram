const heartPath = document.querySelector('#heart-path');
let isRed = false;

heartPath.addEventListener('click', function() {
  if (isRed) {
    heartPath.style.fill = 'blue';
  } else {
    heartPath.style.fill = 'red';
  }
  isRed = !isRed;
});
