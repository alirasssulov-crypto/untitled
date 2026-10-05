import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Ethics from "./components/Ethics";
import About from "./components/About";
import Footer from "./components/Footer";


export default function App() {
  const [cart, setCart] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-white font-sans text-ink antialiased">
      <Header cartCount={cart} onCartClick={() => alert("Cart")} />

      <main>
        <Hero />
        <Collection />
        <Ethics />
        <About />
      </main>

      <Footer />
    </div>
  );
}