import { useSearchParams } from "react-router-dom";
import { TestUserComponent } from "./components/TestUserComponent";
import { SitesComponent } from "./components/SitesComponent";
import { ProductsComponent } from "./components/ProductsComponent";
import { getLocalStorageRefreshToken, getLocalStorageToken, setLocalStorageRefreshToken, setLocalStorageToken } from "../../util/token";
import { useEffect } from "react";
import { getToken } from "../../services/mercado-livre-service";

const handleToken = async (refreshToken: string) => {
  const token = await getToken(refreshToken);
  setLocalStorageToken(token);
}

export function Meli() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const refreshToken = searchParams.get("code");
    if (refreshToken) {
      setLocalStorageRefreshToken(refreshToken);
      const localToken = getLocalStorageToken();
      // TODO: terminar

    }
  }, [searchParams]);

  return (
    <div className="p-5">
      <TestUserComponent
      />
      <div className="flex gap-4 mt-4 flex-col">
        <ProductsComponent
        />
        <SitesComponent
        />
      </div>
    </div>
  );
}