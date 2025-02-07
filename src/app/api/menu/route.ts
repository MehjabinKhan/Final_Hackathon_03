import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Coffee", price: 1100, category: "Coffee", image: "/coffee1.jpeg" },
    { id: 2, name: "Coffee Ice Cream Sundae", price: 1000, category: "Coffee", image: "/coffee2.webp" },
    { id: 3, name: "Vanilla Iced Coffee", price: 1200, category: "Coffee", image: "/Coffee_Vanilla.jpg" },
    { id: 4, name: "Black Coffee", price: 500, category: "Coffee", image: "/coffee5.jpeg" },
    { id: 5, name: "Cappuccino", price: 700, category: "Coffee", image: "/coffee4.jpeg" },
    { id: 6, name: "Cold Coffee", price: 700, category: "Coffee", image: "/coffee7.jpeg" },
    { id: 7, name: "Dalgona Coffee", price: 900, category: "Coffee", image: "/Dalgonacoffee.jpg" },
    { id: 8, name: "Latte Macchiato", price: 1500, category: "Coffee", image: "/Coffee_latte_macchiato.webp" },
    { id: 9, name: "Red Sauce Pasta", price: 1000, category: "Pasta", image: "/Red_sauce_pasta.jpeg" },
    { id: 10, name: "Italian Pasta", price: 1200, category: "Pasta", image: "/Italian_pasta.jpeg" },
    { id: 11, name: "Cheese Pasta", price: 800, category: "Pasta", image: "/pasta3.jpeg" },
    { id: 12, name: "Alfredo Pasta", price: 1000, category: "Pasta", image: "/Pasta_Alfredo.jpeg" },
    { id: 13, name: "Masala Pasta", price: 900, category: "Pasta", image: "/Pasta_masala.jpeg" },
    { id: 14, name: "Salid Pasta", price: 1200, category: "Pasta", image: "/pasta6.jpeg" },
    { id: 15, name: "Tikka Pasta", price: 800, category: "Pasta", image: "/Pasta_Tikka.jpg" },
    { id: 16, name: "Vegan Pasta", price: 1000, category: "Pasta", image: "/Pasta_Vegan.jpg" },
    { id: 17, name: "BBQ Club Sandwich", price: 1000, category: "Sandwich", image: "/Sandwich_BBQ_club.jpg" },
    { id: 18, name: "Chicken Tikka Sandwich", price: 1200, category: "Sandwich", image: "/Sandwich_chicken_tikka.jpg" },
    { id: 19, name: "Egg Cheese Sandwich", price: 800, category: "Sandwich", image: "/sandwich3.jpeg" },
    { id: 20, name: "Extra Cheese Sandwich", price: 1000, category: "Sandwich", image: "/sandwich4.jpeg" },
    { id: 21, name: "Chicken Fajita Pizza", price: 1800, category: "Pizza", image: "/Pizza_chicken_fajita.webp" },
    { id: 22, name: "Tandoori Pizza", price: 2000, category: "Pizza", image: "/Pizza_tandoori.jpg" },
    { id: 23, name: "Afghani Pizza", price: 1600, category: "Pizza", image: "/pizza_afghani.jpg" },
    { id: 24, name: "Chicken Tikka Pizza", price: 1900, category: "Pizza", image: "/Pizza_chicken-tikka.jpg" },
    { id: 25, name: "Pepsi", price: 1000, category: "Soda", image: "/soda1.jpeg" },
    { id: 26, name: "Italian Lemon Soda", price: 1200, category: "Soda", image: "/Soda_italian_lemon.jpeg" },
    { id: 27, name: "Japaneese Soda", price: 800, category: "Soda", image: "/soda3.jpeg" },
    { id: 28, name: "Cherry Cream Soda", price: 1000, category: "Soda", image: "/Soda_Cherry_Cream-.webp" },
  ]);
}