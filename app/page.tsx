"use client";

import queries from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const data = useQuery(queries.getRecipes);
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
