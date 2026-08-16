
// default tax rate applies to all products
const defaultTaxRate = 4.75;

// grocery tax rate when ctaegory is groceries 
const groceryTaxRate = 3;

// calculateTaz(price, category) deterine the rate that applies based on category

export function calculateTax(price: number, category: string): number {
  const rate = category === "groceries" ? groceryTaxRate : defaultTaxRate;
  const taxAmount = price * (rate / 100);
  return Math.round(taxAmount * 100) / 100;

}
