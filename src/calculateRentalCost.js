/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const dailyPrice = 40;
  const totalRentalPrice = days * dailyPrice;

  if (days >= shortTerm && days < longTerm) {
    return totalRentalPrice - smallDiscount;
  }

  if (days >= longTerm) {
    return totalRentalPrice - bigDiscount;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
