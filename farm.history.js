export const HISTORY = [];

export function logFarm(snapshot) {
  HISTORY.push({ time: Date.now(), snapshot });
}
