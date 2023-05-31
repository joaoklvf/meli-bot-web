import { useSearchParams, useNavigate } from "react-router-dom";
import { getLocalStorageRefreshToken, getLocalStorageToken, setLocalStorageRefreshToken } from "../../util/token";
import { useEffect } from "react";


export function Meli() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToken = async () => {
      const localStorageToken = getLocalStorageToken();
      const localStorageRefreshToken = getLocalStorageRefreshToken();

      if (localStorageToken && localStorageRefreshToken) {
        navigate('/questions');
        return;
      }

      const refreshToken = searchParams.get("code");
      if (refreshToken) {
        setLocalStorageRefreshToken(refreshToken);
        navigate('/questions');
      }
      else
        navigate('/')
    }
    handleToken();

  }, []);

  return <></>;
}