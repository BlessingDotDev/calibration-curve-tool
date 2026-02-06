// hooks/useRegression.js
// hooks/useRegression.js
import { useMemo } from "react";

export const useRegression = (points) => {
  return useMemo(() => {
    const filtered = points.filter(p => p.x !== "" && p.y !== "").map(p => ({
      x: Number(p.x),
      y: Number(p.y),
    }));

    if (filtered.length === 0) return { slope: 0, intercept: 0, r2: 0, regressionLine: [], filtered };

    const n = filtered.length;
    const sumX = filtered.reduce((a, p) => a + p.x, 0);
    const sumY = filtered.reduce((a, p) => a + p.y, 0);
    const sumXY = filtered.reduce((a, p) => a + p.x * p.y, 0);
    const sumXX = filtered.reduce((a, p) => a + p.x * p.x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const meanY = sumY / n;
    const ssTot = filtered.reduce((a, p) => a + Math.pow(p.y - meanY, 2), 0);
    const ssRes = filtered.reduce((a, p) => a + Math.pow(p.y - (slope * p.x + intercept), 2), 0);
    const r2 = 1 - ssRes / ssTot;

    const regressionLine = filtered.map(p => ({ x: p.x, y: slope * p.x + intercept }));

    return { slope, intercept, r2, regressionLine, filtered };
  }, [points]);
};

