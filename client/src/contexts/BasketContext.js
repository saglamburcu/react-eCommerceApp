import { createContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((items) => [data, ...items])
    };

    const filtered = items.filter((item) => item._id !== findBasketItem._id);

    setItems(filtered);
  };

  const removeToBasket = (product) => {
    const filteredItems = items.filter(item => item._id !== product._id);

    setItems(filteredItems);
  }


  const values = {
    items,
    setItems,
    addToBasket,
    removeToBasket
  }

  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext;