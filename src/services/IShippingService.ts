export interface IShippingService {
  calculateCost(weight: number): number;
}