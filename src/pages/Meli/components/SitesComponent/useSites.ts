import { Dispatch, SetStateAction, useState } from "react"
import { requestSites } from "../../../../services/mercado-livre-service";

const getSites = async (setSites: Dispatch<SetStateAction<string[]>>) => {
  const sites = await requestSites();
  setSites(sites);
}

export const useSites = () => {
  const [sites, setSites] = useState<string[]>([]);
  const handleGetSites = () => {
    getSites(setSites);
  }

  return { sites, handleGetSites };
}