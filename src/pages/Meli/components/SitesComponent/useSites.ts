import { Dispatch, SetStateAction, useState } from "react"
import { requestSites } from "../../../../services/mercado-livre-service";

interface UseSiteProps {
  token: string | null;
}

const getSites = async (token: string, setSites: Dispatch<SetStateAction<string>>) => {
  const sites = await requestSites(token);
  setSites(sites);
}

export const useSites = ({ token }: UseSiteProps) => {
  const [sites, setSites] = useState('');
  const handleGetSites = () => {
    token && getSites(token, setSites);
  }

  return { sites, handleGetSites };
}