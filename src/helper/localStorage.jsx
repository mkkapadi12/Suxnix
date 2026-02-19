export const getCartData = () => {
  let localCartData = localStorage.getItem("suxnixcart");
  const parseData = JSON.parse(localCartData);
  if (!Array.isArray(parseData)) return [];
  return parseData;
};

export const setCartData = (cart) => {
  return localStorage.setItem("suxnixcart", JSON.stringify(cart));
};
