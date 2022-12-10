function writeCards(arr, event) {
  const messages = []
  for (let i = 0; i < arr.length; i++) {

    const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    messages.push(greetingMessage)
  }

  return messages;
}

writeCards(["Guadalupe", "Ollie", "Ali"], "surprise");


function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}
