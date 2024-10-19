interface ProductsType {
  id: string;
  title: string;
  image: string;
  category: string;
  medida: string;
}

const products: ProductsType[] = [
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "1"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "2"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "3"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "4"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "5"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "BOX",
    id : "6"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "7"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "8"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "9"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "10"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "11"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "12"
  },
  {
    image: "./img/fotoscajas/MALETIN/maletin 5.png",
    title: "Budinera",
    medida: "23x8.5x8.5 | 24x10x10",
    category: "DESAYUNO",
    id : "13"
  },
]

export const findProduct = async (id: ProductsType["id"]) => {
  const product = await products.find(product => product.id === id);
  return product;
}

export default products
