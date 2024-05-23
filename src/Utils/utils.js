export const calculateTaxRate = (annualIncome) => {
    // Implement tax rate calculation logic based on the provided image
    // Return the calculated tax rate
};

export const calculateCapitalGains = (purchasePrice, salePrice, expenses) => {
    return salePrice - purchasePrice - expenses;
};

export const calculateNetCapitalGains = (capitalGainsAmount, longTermDiscount, investmentType) => {
    if (investmentType === 'longTerm') {
        return capitalGainsAmount - longTermDiscount;
    }
    return capitalGainsAmount;
};

export const calculateTaxToPay = (netCapitalGains, taxRate) => {
    // Implement tax calculation logic based on the provided image
    // Return the calculated tax amount
};