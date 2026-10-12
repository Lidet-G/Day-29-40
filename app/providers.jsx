"use client";

import { CartProvider } from "./cart/CartContext";

export function Providers({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}