function scuberGreetingForFeet (rideLength){
  if (rideLength <= 400){
  return 'This one is on me!'
} else if (rideLength > 2000 && rideLength < 2500) {
  return 'I will gladly take your thirty bucks.'
} else if (rideLength > 2500) {
  return 'No can do.'
}
}

function ternaryCheckCity (city) {
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else {
  return 'No go.'
  }
}


// let tipExpression = 'Thank you so much.'



function switchOnCharmFromTip (tipExpression) {
  switch (tipExpression) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}