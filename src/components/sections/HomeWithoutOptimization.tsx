"use client";

import React, { useState } from "react";
import MainButton from "../common/MainButton";

interface IProps {
  onIncrement: () => void;
}

// Sample sales data array
const salesData = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 150 },
  { id: 4, amount: 250 },
  { id: 5, amount: 300 },
];

// SalesDashboard component without optimization
function SalesDashboard() {
  const [itemsSold, setItemsSold] = useState(0);

  // Expensive computation that will re-run on every render
  const totalSales = salesData.reduce((total, sale) => total + sale.amount, 0);
  console.log("Calculating total sales without useMemo...");

  // Function recreated on every render, causing unnecessary re-renders in the child component
  const handleItemsSold = () => {
    setItemsSold((prevCount) => prevCount + 1);
  };

  console.log("SalesDashboard without useMemo/useCallback rendered");

  return (
    <div className="flex flex-col justify-center items-center border my-8 py-16 rounded-lg">
      <h2>Total Sales: ${totalSales}</h2>
      <h3>Items Sold: {itemsSold}</h3>
      <CounterButton onIncrement={handleItemsSold} />
    </div>
  );
}

// CounterButton component
function CounterButton({ onIncrement }: IProps) {
  console.log("CounterButton without useMemo/useCallback rendered");
  return (
    <MainButton
      action={onIncrement}
      text="Sell Item"
      size="small"
      className="mt-4"
    />
  );
}

// Home component that renders the SalesDashboard
export default function HomeWithoutOptimization() {
  return (
    <main>
      <h1 className="font-bold text-center text-2xl py-8 text-red-500">
        Not Optimized
      </h1>
      <SalesDashboard />
    </main>
  );
}
