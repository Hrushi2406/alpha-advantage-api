import { IDailyData, IMetadata } from "../types";

export default function StockTable({
  metadata,
  dailyData,
}: {
  metadata: IMetadata;
  dailyData: IDailyData[];
}) {
  return (
    <div>
      <h4 className="text-2xl">{metadata?.symbol}</h4>
      <p className="text-gray-600 text-sm ">
        Last updated at {metadata?.lastRefreshed}
      </p>
      <div className="my-6"></div>

      <table className="w-full table-auto border-green-800">
        <thead className="w-full">
          <tr className="w-full">
            <th className="border ">Date</th>
            <th className="border ">Open</th>
            <th className="border ">High</th>
            <th className="border ">Low</th>
            <th className="border ">Close</th>
          </tr>
        </thead>

        <tbody>
          {dailyData?.map((data) => (
            <tr className="text-center ">
              <td className="border ">{data.date}</td>
              <td className="border ">{data.open}</td>
              <td className="border ">{data.high}</td>
              <td className="border ">{data.low}</td>
              <td className="border ">{data.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
