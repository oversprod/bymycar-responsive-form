/** CUSTOM JAVASCRIPT FOR BYMYCAR FORMS **/

const checkbox = document.getElementById('legalCheck1');

const box = document.getElementById('legalBox1');

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
});