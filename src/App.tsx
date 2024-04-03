import React from "react";
import "./App.css";
import InputForm from "./components/input-form";
import { ALPHAVANTAGE_APIKEY, APIURL } from "./config";
import Loader from "./components/loader";
import ErrorContainer from "./components/error-container";
import { IDailyData, IMetadata } from "./types";
import StockTable from "./components/stock-table";
import { parseErrors, parseMetadata, parseDailyData } from "./lib/parsers";

function App() {
  const [metadata, setmetadata] = React.useState<IMetadata>();
  const [dailyData, setdailyData] = React.useState<IDailyData[]>();
  const [symbol, setsymbol] = React.useState("IBM");
  const [isLoading, setisLoading] = React.useState(true);
  const [err, seterr] = React.useState("");

  const fetchData = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setisLoading(true);
    setsymbol("");

    const data = await fetch(
      `${APIURL}&symbol=${symbol}&apikey=${ALPHAVANTAGE_APIKEY}`
    ).then((resp) => resp.json());

    const err = parseErrors(data);

    if (err) {
      seterr(err);
    } else {
      const metadata = parseMetadata(data);
      const dailyData = parseDailyData(data);

      setmetadata(metadata);
      setdailyData(dailyData);
    }

    setisLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:mx-24 mx-4 my-12">
      <h1 className="text-3xl font-bold underline mb-8">
        Get daily time series data
      </h1>

      <InputForm
        symbol={symbol}
        onSymbolChange={(symbol) => setsymbol(symbol)}
        fetchData={fetchData}
      />

      <div className="my-6"></div>

      {isLoading ? (
        <Loader />
      ) : err ? (
        <ErrorContainer error={err} />
      ) : (
        <StockTable metadata={metadata!} dailyData={dailyData!} />
      )}
    </div>
  );
}

export default App;
