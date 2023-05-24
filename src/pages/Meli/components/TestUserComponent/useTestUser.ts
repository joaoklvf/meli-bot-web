import { useState } from "react";
import { getUserTest } from "../../../../services/mercado-livre-service";

interface TestUserML {
  id: number,
  nickname: string,
  password: string,
  site_status: string
}

interface UseTestUserProps {
  token: string | null;
}

const handleUserTest = async (token: string | null) => {
  const testUser = await getUserTest(token);
  return testUser;
}

export const useTestUser = ({ token }: UseTestUserProps) => {
  const [testUser, setTestUser] = useState<TestUserML | null>(null);

  const handleOnGetUserTestClick = async () => {
    const newTestUser = await handleUserTest(token);
    setTestUser(newTestUser);
  }

  return { testUser, handleOnGetUserTestClick };
}