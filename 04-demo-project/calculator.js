"use strict";
// data
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    // object destructuring
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    // checks
    if (initialAmount < 0) {
        return "Initial Investment Amount must be at least zero";
    }
    if (duration <= 0) {
        return "No valid amount of years provided";
    }
    if (expectedReturn < 0) {
        return "Expected return must be at least zero";
    }
    let total = initialAmount;
    let totalContributions = 0; //total contributions
    let totalInterestEarned = 0; //total interest earned new value to be incremented
    const annualResults = [];
    //loop throught each year
    for (let i = 0; i < duration; i++) {
        //updating local variables
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
} // => result[]
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log("----------------------");
    }
}
const investmentData = {
    initialAmount: 10000,
    annualContribution: 1000,
    expectedReturn: 0.2,
    duration: 15,
};
const results = calculateInvestment(investmentData);
printResults(results);
