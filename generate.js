// generate.js
import fs from "fs";

const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
const baseProducts = data.products;

let products = [];

for (let i = 0; i < 12; i++) {
  baseProducts.forEach((p, index) => {
    products.push({
      ...p,
      id: i * baseProducts.length + index + 1,
      price: p.price + Math.floor(Math.random() * 2000),
      rating: +(4 + Math.random()).toFixed(1)
    });
  });
}

fs.writeFileSync("db-full.json", JSON.stringify({ products }, null, 2));

console.log("✅ 120 products generated!");