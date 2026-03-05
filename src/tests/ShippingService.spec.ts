import { describe, it, expect } from "vitest";
import { ShippingService } from "../services/ShippingService";

describe("ShippingService", () => {

  const service = new ShippingService();

  it("Deberia ser un error si el peso es <= 0", () => {
    expect(() => service.calculateCost(0))
      .toThrow("El peso debe ser mayor a 0");
  });

  it("Deberia devolver 10000 para pesos entre 0 y 5", () => {
    expect(service.calculateCost(3)).toBe(10000);
  });

  it("Deberia devolver 20000 para pesos entre 5 y 20", () => {
    expect(service.calculateCost(10)).toBe(20000);
  });

  it("Deberia devolver 40000 para pesos entre 21 y 40", () => {
    expect(service.calculateCost(30)).toBe(40000);
  });

  it("Deberia devolver 50000 para pesos mayores a 40", () => {
    expect(service.calculateCost(50)).toBe(50000);
  });

});