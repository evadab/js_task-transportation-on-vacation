/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCarDayCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= 7) {
    return rentCarDayCost * days - longTermDiscount;
  }

  if (days >= 3) {
    return rentCarDayCost * days - shortTermDiscount;
  }

  return days * rentCarDayCost;
}

module.exports = calculateRentalCost;
