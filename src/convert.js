function kelvinToFahr (temp) {
  return (9 / 5) * (temp - 273) + 32;
}

function kelvinToCelsius (temp) {
  return temp - 273;
}

export {
  kelvinToFahr,
  kelvinToCelsius
};
