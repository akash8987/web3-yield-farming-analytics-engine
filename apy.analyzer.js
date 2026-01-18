export function analyzeAPY(rewards) {
  const dailyRate = rewards.reward / rewards.staked;
  const apy = dailyRate * 365 * 100;

  return {
    estimatedAPY: apy.toFixed(2) + "%"
  };
}
