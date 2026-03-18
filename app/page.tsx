import axios from "axios";
import QuotesClient from "./QuotesClient";

export default async function Home() {
  const response = await axios.get("http://api.quotable.io/random");
  const initialQuote = response.data;

  return <QuotesClient quotesInitial={[initialQuote]} />;
}
