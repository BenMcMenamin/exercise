function validateForm() {
  var fullName = document.getElementById('fullName');
  var address = document.getElementById('address');
  var email = document.getElementById('email');
  var telephone = document.getElementById('telephone');
  var cardNumber = document.getElementById('cardNumber');
  var cvcNumber = document.getElementById('cvcNumber');
  var expiryDate = document.getElementById('expiryDate');
  var validationMessage = document.getElementById('validationMessage');

  if (fullName.value === '' || address.value === '' || email.value === '' || telephone.value === '' || cardNumber.value === '' || cvcNumber.value === '' || expiryDate.value === '') {
    alert('Please fill in all fields.');
    return false;
  }

  if (!luhnCheck(cardNumber.value)) {
    validationMessage.innerText = 'Invalid card number.';
    validationMessage.classList.add('invalid');
    cardNumber.classList.add('invalid');
    return false;
  } else {
    validationMessage.innerText = 'Valid card.';
    validationMessage.classList.remove('invalid');
    validationMessage.classList.add('valid');
    cardNumber.classList.remove('invalid');
    cardNumber.classList.add('valid');
  }

  var cardType = getCardType(cardNumber.value);

  if (cardType === 'Visa') {
    alert('Valid Visa card.');
  } else if (cardType === 'AmericanExpress') {
    alert('Valid American Express card.');
  } else if (cardType === 'Mastercard') {
    alert('Valid Mastercard.');
  } else if (cardType === 'Discover') {
    alert('Valid Discover card.');
  } else {
    alert('Invalid card type.');
    cardNumber.classList.add('invalid');
    return false;
  }

  return true;
}

  
  function luhnCheck(cardNumber) {
    var sum = 0;
    var numDigits = cardNumber.length;
    var parity = numDigits % 2;
  
    for (var i = 0; i < numDigits; i++) {
      var digit = parseInt(cardNumber.charAt(i));
  
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
    }
  
    return sum % 10 === 0;
  }
  
  function getCardType(cardNumber) {
    var firstDigit = cardNumber.charAt(0);
    var firstTwoDigits = cardNumber.substring(0, 2);
  
    if (firstDigit === '4' && (cardNumber.length === 16 || cardNumber.length === 13)) {
      return 'Visa';
    } else if ((firstTwoDigits === '34' || firstTwoDigits === '37') && cardNumber.length === 15) {
      return 'AmericanExpress';
    } else if ((firstTwoDigits >= '51' && firstTwoDigits <= '55' || firstTwoDigits >= '2221' && firstTwoDigits <= '2720') && cardNumber.length === 16) {
      return 'Mastercard';
    } else if ((firstTwoDigits === '64' || firstTwoDigits === '65' || firstTwoDigits >= '6011' && firstTwoDigits <= '6269' || firstTwoDigits >= '6282' && firstTwoDigits <= '6288') && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
      return 'Discover';
    }
  
    return 'Unknown';
  }
  