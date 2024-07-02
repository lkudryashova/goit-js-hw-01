function makeTransaction(quantity, pricePerDroid) {
  const message = `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
  console.log(message);
  return message;
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
