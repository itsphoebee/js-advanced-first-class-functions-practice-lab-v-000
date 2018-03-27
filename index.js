// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function (a,b){
    return a.revenue - b.revenue;
  });
};

const driversByName = function(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
}

const callback = function(agg, el, i, array){
  console.log('The aggregate up to this point is:', agg);
console.log("The current element's name is:", el.name);
console.log('The index of the current element is:', i);
console.log('----------------');
console.log(el.revenue);
  return agg + el.revenue;
};
const totalRevenue = function(drivers) {
  return drivers.reduce(callback, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / (drivers.length);
};
