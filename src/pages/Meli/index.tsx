import { useSearchParams, useNavigate } from "react-router-dom";
import { SitesComponent } from "./components/SitesComponent";

import { getLocalStorageToken, setLocalStorageRefreshToken, setLocalStorageToken } from "../../util/token";
import { useEffect } from "react";
import { getToken } from "../../services/mercado-livre-service";

export function Meli() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToken = async () => {
      const refreshToken = searchParams.get("code");

      if (refreshToken) {
        setLocalStorageRefreshToken(refreshToken);
        let token = getLocalStorageToken();
        if (!token) {
          token = await getToken(refreshToken);
          setLocalStorageToken(JSON.stringify(token!));
        }
        console.log('token', token);
      }
      else
        navigate('/')
    }
    handleToken();

  }, []);

  return (
    <div className="p-5">
      <div className="flex gap-4 mt-4 flex-col">
        <SitesComponent />
      </div>
    </div>
  );
}