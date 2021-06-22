

function generateRandomCountryCode() {
  let min = Math.ceil(200);
  let max = Math.floor(299);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function generateRandomNumber(digits)
{
    let randomNumber = '';
    let i = 0;

    while (i < digits) {
      randomNumber += Math.floor(Math.random() * (10));
      i++;
    }

    return randomNumber;
}

function calculateCheckDigit(number)
{
    var weightFlag = true;
    var sum = 0;
    let stringNumber = number.toString();
    let numLength = stringNumber.length;
   


     for (let i = numLength - 1; i >= 0; i--) {
         sum += stringNumber[i] * ( weightFlag ? 3 : 1)
         weightFlag = !weightFlag;

    }
     
    let checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
}

function generateEAN(eanDigits)
{
    let countryCode = generateRandomCountryCode();
    let number = countryCode + generateRandomNumber(eanDigits - 4); // - 4 because 3 used for countryCode, 1 checkDigit
    let checkDigit = calculateCheckDigit(number);

    return number + checkDigit;
}

function EANgenerator(amount, eanDigits)
{
    if(amount > 1000)
    {
        return ['Please don not generate more than 1000 records at once'];
    }

    var eans = [];

    for (let i = 0; i < amount; i++) {   
        eans.push(generateEAN(eanDigits));
    }


    return eans;
}