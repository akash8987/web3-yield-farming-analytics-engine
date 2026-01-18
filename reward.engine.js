export function calculateRewards(farm, amount, days) {
  console.log("Calculating farming rewards...");

  const reward = amount * farm.rewardRate * days;

  return {
    farm: farm.name,
    staked: amount,
    days,
    reward: reward.toFixed(4)
  };
}
