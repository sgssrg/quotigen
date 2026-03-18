"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import QuotesClient from "./QuotesClient";

export default function Home() {
  const [quotes, setQuotes] = useState<{ content: string; author: string }[]>(
    [],
  );

  useEffect(() => {
    // Fetch quotes based on quantity
    axios
      .get(`http://api.quotable.io/quotes/random`)
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
    console.log(`page.tsx  ${quotes}`);
  }, []);

  return <QuotesClient quotesInitial={quotes} />;
}
