// Write your code in this file!
function scuberGreetingForFeet(someDistance) {
if (someDistance <= 400) {
  return 'This one is on me!'
} else if
  (someDistance > 2000 && someDistance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (someDistance > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(someCity) {
if (someCity === 'NYC') {
  return  'Ok, sounds good.'
} else {
  return 'No go.'
}
}

function switchOnCharmFromTip(messageTip) {
  switch(messageTip) {
    case 'generous':
      return  'Thank you so much.';
    case 'not as generous':
      return  'Thank you.';
    case 'thanks for everything':
      return  'Bye.';
  }
  }
