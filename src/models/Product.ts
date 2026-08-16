import { calculateDiscount } from "../utils/discountCalculator";

// STEP 1: define product class
export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;

  //write the constructor 
  constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
  }


  //displayDetails 
  displayDetails(): string {
    return `Product: ${this.id}, Title ${this.title}, description: ${this.description}, category: ${this.category}, price: ${this.price}, rating: ${this.rating}`;
  }

  //getPriceWithDiscount()
  getPriceWithDiscount(): number {
    const discountAmount: number = calculateDiscount(this.price, this.discountPercentage);
    const finalPrice: number = this.price - discountAmount;

  return finalPrice;
  }
}
