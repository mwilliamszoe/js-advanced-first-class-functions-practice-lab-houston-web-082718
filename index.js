// Code your solution in this file!
// drivers.forEach(function logDriverNames(name){
//     console.log(name)
// })

const logDriverNames = function(array){
    array.forEach(function(array){
        console.log(array.name)
    })
}

const logDriversByHometown = function(drivers, hometown){
    drivers.forEach(function(drivers){
        if (drivers.hometown === hometown){
            console.log(drivers.name)
        }
    })
}

const driversByRevenue = function(drivers){
 return drivers.slice().sort(function (d1, d2){
     return d1.revenue - d2.revenue
 })
}

// function driversByName(arrayOfDrivers){
//     arrayOfDrivers.slice().sort(function(a, b){
//         let nameA = arrayOfDrivers.name.toUpperCase()
//         let nameB = arrayOfDrivers.name.toUpperCase()
//         if(nameA < nameB){
//             return 1
//         }
//         return 0
//     })
// }


//   const driversByName = 
  
//   function driversByName(drivers){
//     return drivers.sort(function(a, b) {
//         var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//         var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
      
//         // names must be equal
//         return 0;
//       });
//   }

  const driversByName = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
  };

  
//   const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];

const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

  const averageRevenue = function(drivers){
      return totalRevenue(drivers)/drivers.length;
  }
