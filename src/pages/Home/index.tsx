export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-5">
        Faça a autenticação para usar o sistema.
      </h1>
      <a
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=4052850536369657&redirect_uri=${import.meta.env.VITE_BASE_API_URL}/meli`}>
        Autenticar no Mercado Livre
      </a>
    </div>
  );
}