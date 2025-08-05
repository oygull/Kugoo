import {create} from "zustand";

 type charProps = {
  charName: string,
  charOption: string
}

export type productProps = {
  productId: number,
  productName: string,
  productPrice: number,
  productOldPrice: number,
  productBadge: string,
  productSpeed: string,
  productDuration: string,
  productElectricalCharge: string,
  productKilovat: string,
  productType: string,
  productVersionsArr?: string[],
  productImgsArr?: string[],
  productCategory?: string,
  productChar?: charProps[]
}

type ProductStore = {
  products: productProps[];
  basketProducts: productProps[];
  setProducts: (products : productProps[]) => void;
  addproductsToBasket: (product : productProps) => void;
  removeproductFromBasket: (id: number) => void;
  getTotalPrice: () => number;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  basketProducts: [],
  setProducts: (products) => set({products}),
  addproductsToBasket: (product) => set((state) => ({
    basketProducts: [...state.basketProducts, product],
  })),
  removeproductFromBasket: (id) => set((state) => ({
    basketProducts: state.basketProducts.filter((product) => product.productId !== id),
  })),

  getTotalPrice: () => {
    return get().basketProducts.reduce(
      (total, product) => total + product.productPrice , 0
    );
  }
}))