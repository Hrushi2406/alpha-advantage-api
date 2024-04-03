import { IDailyData, IMetadata } from "../types";

export const parseDailyData = (data: any): IDailyData[] => {
  const dailyData = data["Time Series (Daily)"] as Map<string, string>;

  const parsedData: IDailyData[] = [];

  Object.entries(dailyData).forEach(([key, value]) => {
    const temp = {
      date: key,
      open: value["1. open"],
      high: value["2. high"],
      low: value["3. low"],
      close: value["4. close"],
    };

    parsedData.push(temp);
  });

  return parsedData;
};

export const parseErrors = (data: any) => {
  const err = data["Error Message"];
  const errorInfo = data["Information"];

  if (err) return err;
  if (errorInfo) return errorInfo;

  return;
};

export const parseMetadata = (data: any): IMetadata => {
  const temp = data["Meta Data"];

  return {
    information: temp["1. Information"],
    symbol: temp["2. Symbol"],
    lastRefreshed: temp["3. Last Refreshed"],
    outputSize: temp["4. Output Size"],
    timeZone: temp["5. Time Zone"],
  };
};
