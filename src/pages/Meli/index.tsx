import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getToken, getUserTest } from "../../services/mercado-livre-service";

interface TestUserML {
  id: number,
  nickname: string,
  password: string,
  site_status: string
}

const handleToken = async (refreshToken: string | null) => {
  if (!refreshToken)
    return;
  const tokenData = await getToken(refreshToken);
  return tokenData.access_token;
}

const handleUserTest = async (token: string) => {
  const testUser = await getUserTest(token);
  return testUser;
}

export function Meli() {
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  const [testUser, setTestUser] = useState<TestUserML | null>(null);
  const refreshToken = searchParams.get("code");

  const handleOnGetTokenClick = async () => {
    const newToken = await handleToken(refreshToken);
    setToken(newToken);
  }

  const handleOnGetUserTestClick = async () => {
    const newTestUser = await handleUserTest(token);
    setTestUser(newTestUser);
  }

  return (
    <div className="m-5">
      <button type='button' onClick={handleOnGetTokenClick}>Obter token do Mercado Livre</button>
      <h2 className="text-3xl font-bold underline">
        Refresh Token: {refreshToken}
      </h2>
      <h2 className="text-3xl font-bold underline">
        Token: {token}
      </h2>
      {token && (
        <div>
          <button type='button' onClick={handleOnGetUserTestClick}>Obter usuário teste</button>
          <div className="mt-1" style={{ marginTop: '1rem' }}>
            {JSON.stringify(testUser)}
          </div>
        </div>
      )}
    </div>
  );
}