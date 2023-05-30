interface ResponsiveTableProps {
  data: any[];
}
export const ResponsiveTable = ({ data }: ResponsiveTableProps) => {
  return data.length > 0 ? (
    <div className="flex flex-col p-8 border-slate-700 border rounded-lg">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  {Object.keys(data[0]).map(key => (
                    <th key={key} scope="col" className="px-6 py-4">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((x, index) => (
                  <tr key={`${index}${x}`} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    {Object.values(x).map(value => (
                      <td key={`${index}${value}`} className="whitespace-nowrap px-6 py-4">{`${value}`}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : <></>;
}