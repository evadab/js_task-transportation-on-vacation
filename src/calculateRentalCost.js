/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RentCarDayCost = 40;

  if (days >= 7) {
    return RentCarDayCost * days - 50;
  } else if (days >= 3) {
    return RentCarDayCost * days - 20;
  } else {
    return days * RentCarDayCost;
  }
}

module.exports = calculateRentalCost;
