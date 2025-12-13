const form = document.querySelector('#cardForm');

function displayError(msg) {
  document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();
  displayError('');

  let errorMsg = '';

  const cardNumber = document.querySelector('#cardNumber').value.trim();
  const expMonth = Number(document.querySelector('#month').value);
  const expYear = Number(document.querySelector('#year').value);

  // validate card number
  if (!/^\d{16}$/.test(cardNumber)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += 'Card number is not valid\n';
  }

  // validate expiration date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    errorMsg += 'Card is expired\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  form.innerHTML = '<h2>Payment successful. Thank you!</h2>';
}

form.addEventListener('submit', submitHandler);
