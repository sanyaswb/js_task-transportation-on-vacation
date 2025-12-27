/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscont = 20;
  const bigDiscont = 50;
  const dailyPrice = 40;
  const totalRentalPrice = days * dailyPrice;

  if (days >= 3 && days < 7) {
    return totalRentalPrice - smallDiscont;
  }

  if (days >= 7) {
    return totalRentalPrice - bigDiscont;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
