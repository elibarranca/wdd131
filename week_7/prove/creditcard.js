  const form = document.querySelector('#cardForm');
const errors = document.querySelector('.errors');

function displayError(msg) {
  errors.textContent = msg;
}

function isCardNumberValid(number) {
  return number === '1234123412341234';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  displayError('');

  let errorMsg = '';

  const cardNumber = document.querySelector('#cardNumber').value.trim();
  const month = Number(document.querySelector('#month').value);
  const year = Number(document.querySelector('#year').value);

  if (!/^\d{16}$/.test(cardNumber)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += 'Card number is not valid\n';
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (
    year < currentYear ||
    (year === currentYear && month < currentMonth)
  ) {
    errorMsg += 'Card is expired\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  form.innerHTML = '<h2>Payment successful!</h2>';
});
