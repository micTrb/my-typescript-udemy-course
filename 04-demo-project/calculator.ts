// data
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalInterestEarned: number;
  totalContributions: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
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

  const annualResults: InvestmentResult[] = [];

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

function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`,
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
    );
    console.log("----------------------");
  }
}

const investmentData: InvestmentData = {
  initialAmount: 10000,
  annualContribution: 1000,
  expectedReturn: 0.2,
  duration: 15,
};

const results = calculateInvestment(investmentData);

printResults(results);
