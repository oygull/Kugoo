type charProps = {
  charName: string,
  charOption: string
}

type productProps = {
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
  productImgsArr?: string[],
  productCategory?: string,
  productVersionsArr?: string[],
  productChar?: charProps[]
}

export default productProps;