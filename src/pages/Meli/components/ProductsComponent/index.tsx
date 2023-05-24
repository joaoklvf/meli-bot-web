import { useProduct } from "./useProduct";

interface ProductsComponentProps {
  token: string;
}

export const ProductsComponent = ({ token }: ProductsComponentProps) => {
  const { product, setProduct, handlePostProduct } = useProduct({ token });

  return !token ? <></> :
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Autor</label>
        <input onChange={(e) => setProduct(vl => ({ ...vl, authorName: e.target?.value }))} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Davi" />
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título do livro</label>
        <input onChange={(e) => setProduct(vl => ({ ...vl, bookTitle: e.target?.value }))} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="WEB para iniciantes" />
      </div>
      <button type='button' className='mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handlePostProduct}>Enviar produto</button>
      <div className="mt-1 text-white">
        {JSON.stringify(product)}
      </div>
    </div>
}