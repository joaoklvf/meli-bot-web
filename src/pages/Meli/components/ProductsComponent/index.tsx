import { useProduct } from "./useProduct";

interface ProductsComponentProps {
  token: string;
}

export const ProductsComponent = ({ token }: ProductsComponentProps) => {
  const { product, setProduct, handlePostProduct } = useProduct({ token });

  return !token ? <></> :
    <div className="mt-4">
      <div>
        <label htmlFor="autor">Autor</label>
        <input type="text" name="autor" onChange={(e) => setProduct(vl => ({ ...vl, authorName: e.target?.value }))}/>
      </div>
      <div>
        <label htmlFor="titulo">Título do livro</label>
        <input type="text" name="titulo" onChange={(e) => setProduct(vl => ({ ...vl, bookTitle: e.target?.value }))} />
      </div>
      <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handlePostProduct}>Enviar produto</button>
      <div className="mt-1">
        {JSON.stringify(product)}
      </div>
    </div>
}