import { useSites } from "./useSites";

interface SitesComponentProps {
  token: string | null;
}

export const SitesComponent = ({ token }: SitesComponentProps) => {
  const { sites, handleGetSites } = useSites({ token });
  console.log('token', token);
  return !token ? <></> :
    <div className="mt-4">
      <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleGetSites}>Obter sites</button>
      <div className="mt-1">
        {JSON.stringify(sites)}
      </div>
    </div>
}