import { createContext, useState, useEffect } from "react";

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || []

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items))
  }, [items])

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

  const emptyBasket = () => {
    setItems([]);
  }

  const values = {
    items,
    setItems,
    addToBasket,
    removeToBasket,
    emptyBasket
  }

  return (
    <BasketContext.Provider value={values}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext;