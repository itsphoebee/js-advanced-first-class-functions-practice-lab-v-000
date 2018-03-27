// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location) {
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
  return agg + el.revenue;
};
const totalRevenue = function(drivers) {
  return drivers.reduce(callback, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / (drivers.length);
};
