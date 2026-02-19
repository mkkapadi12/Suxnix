const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, product, amount } = action.payload;
      let existingProduct = state.cart.find((curEle) => curEle.id === id);

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;

            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }

            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return {
              ...curElem,
            };
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let CartProduct = {
          id: id,
          name: product.name,
          amount,
          sub_total: amount * product.price,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, CartProduct],
        };
      }

    case "SET_INCREMENT":
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newIncrement = curEle.amount + 1;
          if (newIncrement >= curEle.max) {
            newIncrement = curEle.max;
          }

          return {
            ...curEle,
            amount: newIncrement,
            sub_total: newIncrement * curEle.price,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_DECREMENT":
      let updatedProduct2 = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newDecrement = curEle.amount - 1;
          if (newDecrement <= 1) {
            newDecrement = 1;
          }

          return {
            ...curEle,
            amount: newDecrement,
            sub_total: newDecrement * curEle.price,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct2,
      };

    case "REMOVE_ITEM":
      let updatedItem = state.cart.filter(
        (curItem) => curItem.id !== action.payload,
      );

      return {
        ...state,
        cart: updatedItem,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOAL_PRICE_ITEM":
      let { paying_amount, total_item, total_price, total_discount } =
        state.cart.reduce(
          (accumulator, curEle) => {
            let { amount, price } = curEle;

            accumulator.total_item += amount;
            accumulator.paying_amount += price * amount;
            accumulator.total_price += amount * price;

            return accumulator;
          },
          {
            total_item: 0,
            total_price: 0,
            paying_amount: 0,
            total_discount: 0,
          },
        );
      return {
        ...state,
        total_item: total_item,
        total_price: total_price,
        paying_amount: paying_amount,
        total_discount: total_discount,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
