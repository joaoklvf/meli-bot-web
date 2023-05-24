import { useTestUser } from "./useTestUser";

interface TestUserComponentProps {
  token?: string | null;
}

export const TestUserComponent = ({ token }: TestUserComponentProps) => {
  if (!token)
    return <></>;
  const { testUser, handleOnGetUserTestClick } = useTestUser({ token });
  return (
    <div className="mt-4">
      <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleOnGetUserTestClick}>Obter usuário teste</button>
      <div className="mt-1">
        {JSON.stringify(testUser)}
      </div>
    </div>
  );
}