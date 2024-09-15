"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import MainButton from "../common/MainButton";
import CounterButtonMemoized from "../common/CounterButtonMemoized";

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

// SalesDashboard component with optimization using useMemo and useCallback
function SalesDashboardOptimized() {
  const [itemsSold, setItemsSold] = useState(0);

  // Expensive computation memoized with useMemo
  const totalSales = useMemo(() => {
    console.log("Calculating total sales with useMemo...");
    return salesData.reduce((total, sale) => total + sale.amount, 0);
  }, []);

  // Memoized function using useCallback
  // NOTE: useCallback memoizes a function to prevent it from being recreated on every render.
  // However, React still re-renders child components by default when the parent component re-renders,
  // even if the function is memoized (unless you tell React not to re-render the child).

  // const handleItemsSoldBad = () => {
  //   setItemsSold((prevCount) => prevCount + 1);
  // }; // The function is not memoized

  const handleItemsSold = useCallback(() => {
    setItemsSold((prevCount) => prevCount + 1);
  }, []); // The function is memoized

  console.log("SalesDashboard with useMemo/useCallback rendered");

  // useEffect(() => {
  //   handleItemsSoldBad();
  // }, [handleItemsSoldBad]);

  return (
    <div className="flex flex-col justify-center items-center border my-8 py-16 rounded-lg">
      <h2>Total Sales: ${totalSales}</h2>
      <h3>Items Sold: {itemsSold}</h3>
      <CounterButtonMemoized onIncrement={handleItemsSold} />
    </div>
  );
}

// CounterButton component
function CounterButton({ onIncrement }: IProps) {
  console.log("CounterButton with useMemo/useCallback rendered");
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
export default function HomeWithOptimization() {
  return (
    <main>
      <h1 className="font-bold text-center text-2xl py- text-green-500 uppercase">
        Optimized
      </h1>
      <SalesDashboardOptimized />
    </main>
  );
}
