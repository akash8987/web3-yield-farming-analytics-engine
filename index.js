import { connectRPC } from "./rpc.client.js";
import { loadFarms } from "./farm.registry.js";
import { calculateRewards } from "./reward.engine.js";
import { analyzeAPY } from "./apy.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Yield Farming Analytics Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const farms = loadFarms();

const rewards = calculateRewards(farms[0], 1000, 30);
const apy = analyzeAPY(rewards);

generateReport(farms[0], rewards, apy);
