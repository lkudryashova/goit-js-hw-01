function getShippingMessage(country, price, deliveryFee) {
  const message = `Shipping to ${country} will cost ${
    price + deliveryFee
  } credits!`;
  console.log(message);
  return message;
}

getShippingMessage('Australia', 120, 50);
getShippingMessage('Germany', 80, 20);
getShippingMessage('Sweden', 100, 20);
