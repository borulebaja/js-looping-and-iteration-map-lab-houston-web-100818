function lowerCaseDrivers(drivers) {
  let d = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return d;
}

function nameToAttributes(drivers) {
  let d = drivers.map(function(driver) {
    const first = driver.split(" ")[0];
    const last = driver.split(" ")[1];
    return { firstName: first, lastName: last };
  });
  return d;
}

function attributesToPhrase(drivers) {
  let d = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return d;
}
