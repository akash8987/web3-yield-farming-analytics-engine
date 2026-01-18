export function generateReport(farm, rewards, apy) {
  console.log("----- Yield Farming Report -----");
  console.log("Farm:", farm.name);
  console.log("Staked Amount:", rewards.staked);
  console.log("Days:", rewards.days);
  console.log("Reward Earned:", rewards.reward);
  console.log("Estimated APY:", apy.estimatedAPY);
  console.log("-------------------------------");
}
