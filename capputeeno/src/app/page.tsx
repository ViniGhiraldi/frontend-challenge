"use client"

import { FilterBar } from "@/components/FilterBar";
import styles from './page.module.css';
import { ProductList } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar/>
        <ProductList/>
      </main>
    </QueryClientProvider>
  )
}
