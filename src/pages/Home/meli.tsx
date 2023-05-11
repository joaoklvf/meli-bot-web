import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getToken } from "../../services/mercado-livre-service";

export function Meli() {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const refreshToken = searchParams.get("code");

  useEffect(() => {
    const handleToken = async () => {
      if (!refreshToken)
        return;
      const tokenData = await getToken(refreshToken);
      setToken(tokenData.access_token);
    }
    handleToken();
  }, [refreshToken]);

  return (
    <div>
      <h2 className="text-3xl font-bold underline">
        Refresh Token: {refreshToken}
      </h2>
      <h2 className="text-3xl font-bold underline">
        Token: {token}
      </h2>
    </div>
  );
}