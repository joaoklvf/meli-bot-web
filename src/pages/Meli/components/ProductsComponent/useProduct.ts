import { Dispatch, SetStateAction, useState } from "react"
import { requestProduct } from "../../../../services/mercado-livre-service";
import { getLocalStorageToken } from "../../../../util/token";

export interface PostProduct {
  token: string | null,
  authorName: string,
  bookTitle: string,
  id: number
}

const postProduct = async (product: PostProduct, setProduct: Dispatch<SetStateAction<PostProduct>>) => {
  const newProduct = await requestProduct(product);
  setProduct(newProduct);
}

export const useProduct = () => {
  const [product, setProduct] = useState<PostProduct>({ id: 0, authorName: '', bookTitle: '', token: '' });

  const handlePostProduct = () => {
    if (!product)
      return;

    const token = getLocalStorageToken();
    const newProduct = { ...product, token };
    postProduct(newProduct, setProduct);
  }

  return { product, setProduct, handlePostProduct };
}