export function monitorLiquidity(farm) {
  return {
    name: farm.name,
    liquidity: farm.totalLiquidity
  };
}
