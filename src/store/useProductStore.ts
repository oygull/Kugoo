import {create} from "zustand";
import Product from "../components/Product";

export type productProps = {
  productId: number,
  productName: string,
  productPrice: number,
  productOldPrice: number,
  productBadge: string,
  productImg: any,
  productSpeed: string,
  productDuration: string,
  productElectricalCharge: string,
  productKilovat: string,
  productType: string,
}

type ProductStore = {
  products: productProps[];
  basketProducts: productProps[];
  setProducts: (products : productProps[]) => void;
  addproductsToBasket: (product : productProps) => void;
  removeproductFromBasket: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  basketProducts: [],
  setProducts: (products) => set({products}),
  addproductsToBasket: (product) => set((state) => ({
    basketProducts: [...state.basketProducts, product],
  })),
  removeproductFromBasket: (id) => set((state) => ({
    basketProducts: state.basketProducts.filter((product) => product.productId !== id),
  }))
}))