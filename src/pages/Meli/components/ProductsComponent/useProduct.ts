import { Dispatch, SetStateAction, useState } from "react"
import { requestProduct } from "../../../../services/mercado-livre-service";

export interface PostProduct {
  token: string,
  authorName: string,
  bookTitle: string
}

interface UseProductProps {
  token: string
}

const postProduct = async (product: PostProduct, setProduct: Dispatch<SetStateAction<PostProduct>>) => {
  const newProduct = await requestProduct(product);
  setProduct(newProduct);
}

export const useProduct = ({ token }: UseProductProps) => {
  const [product, setProduct] = useState<PostProduct>({ authorName: '', bookTitle: '', token: token });

  const handlePostProduct = () => {
    if (!product)
      return;
    const newProduct = { ...product, token };
    postProduct(newProduct, setProduct);
  }

  return { product, setProduct, handlePostProduct };
}