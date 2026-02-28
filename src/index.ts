import readline from "readline";
import { ShippingService } from "./services/ShippingService";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const service = new ShippingService();

rl.question("Ingresa el peso del paquete (kg): ", (input) => {

  const weight = Number(input);

  try {
    const cost = service.calculateCost(weight);
    console.log(`Costo de envio: $${cost}`);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }

  rl.close();
});