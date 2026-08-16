

// function calculateDiscount(price, discountPercentage)
export function calculateDiscount(price: number, discountPercentage: number): number {
  const discountAmount = price * (discountPercentage / 100);
  return Math.round(discountAmount * 100) / 100;
}