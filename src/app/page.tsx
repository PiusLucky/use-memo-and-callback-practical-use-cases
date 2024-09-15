import HomeWithOptimization from "@/components/sections/HomeWithOptimization";
// import HomeWithoutOptimization from "@/components/sections/HomeWithoutOptimization";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-center text-2xl py-8">
        React Concepts: Practical use-case for React.memo, useMemo and
        useCallback hooks
      </h1>

      <div className="mx-8">
        {/* <HomeWithoutOptimization /> */}
        <HomeWithOptimization />
      </div>
    </main>
  );
}
