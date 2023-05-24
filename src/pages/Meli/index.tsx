import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getToken } from "../../services/mercado-livre-service";
import { TestUserComponent } from "./components/TestUserComponent";
import { SitesComponent } from "./components/SitesComponent";
import { ProductsComponent } from "./components/ProductsComponent";


const handleToken = async (refreshToken: string | null) => {
  if (!refreshToken)
    return;
  const tokenData = await getToken(refreshToken);
  return tokenData.access_token;
}

export function Meli() {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const refreshToken = searchParams.get("code");

  const handleOnGetTokenClick = async () => {
    const newToken = await handleToken(refreshToken);
    setToken(newToken);
  }

  const handleOnInvalidarTokenButtonClick = () => {
    setToken('token_invalido');
  }

  return (
    <div className="p-5">
      <div className="flex gap-x-2">
        <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleOnGetTokenClick}>Obter token do Mercado Livre</button>
        <button type='button' className='bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded' onClick={handleOnInvalidarTokenButtonClick}>Invalidar token</button>
      </div>
      <h2 className="text-2xl font-bold">
        <u>Refresh Token</u>: {refreshToken}
      </h2>
      <h2 className="text-2xl font-bold">
        <u>Token:</u> {token}
      </h2>
      <TestUserComponent
      />
      <div className="flex gap-4 mt-4">
        <ProductsComponent
          token={token}
        />
        <SitesComponent
          token={token}
        />
      </div>
    </div>
  );
}