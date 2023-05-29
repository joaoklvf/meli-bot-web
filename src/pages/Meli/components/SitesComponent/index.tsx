import { ResponsiveTable } from "../../../../components/ResponsiveTable";
import { useSites } from "./useSites";

interface SitesComponentProps {
  token: string | null;
}

export const SitesComponent = ({ token }: SitesComponentProps) => {
  const { sites, handleGetSites } = useSites({ token });

  return !token ? <></> :
    <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleGetSites}>Obter sites</button>
      <div className="mt-1 text-white">
        <ResponsiveTable data={sites} />
      </div>
    </div>
}