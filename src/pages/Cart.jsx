import React, { useEffect } from "react";
import AmountCartToggle from "@/components/AmountCartToggle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartContext } from "@/Context/Cartcontext";
import { ICONS } from "@/icons/icons";
import styled from "styled-components";
import ShopButton from "@/helper/ShopButton";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    setDecrement,
    setIncrement,
    removeItem,
    total_price,
    total_discount,
    paying_amount,
  } = useCartContext();
  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <main className="">
        <div>
          <section className="py-[120px] mt-[110px]">
            <div className="max-w-full sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1320px] mx-auto px-4 container">
              {cart.length === 0 ? (
                <div className="text-center">
                  <Link
                    to={"/shop"}
                    className="text-lg font-medium hover:underline text-suxnix-text_primary"
                  >
                    Countinue Shopping
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-10 sm:gap-0 md:flex-row md:items-start md:justify-start">
                  {/* cart product */}
                  <div className="w-[66.67%] px-3">
                    <Table>
                      <TableHeader>
                        <TableRow className="!font-semibold text-suxnix-text_heading text-base border-black !border-b-[2px]">
                          <TableHead className="w-[150px]" />
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="">Quentity</TableHead>
                          <TableHead className="">Subtotal</TableHead>
                          <TableHead className=""></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cart.map((cart) => (
                          <TableRow
                            key={cart.id}
                            className="text-base font-medium"
                          >
                            <TableCell className="">
                              <img src={cart.image} alt="" />
                            </TableCell>
                            <TableCell className="text-base font-medium text-suxnix-text_heading">
                              {cart.name}
                            </TableCell>
                            <TableCell>TK {cart.price}</TableCell>
                            <TableCell className="">
                              <AmountCartToggle
                                amount={cart.amount}
                                setDecrese={() => setDecrement(cart.id)}
                                setIncrese={() => setIncrement(cart.id)}
                              />
                            </TableCell>
                            <TableCell>
                              TK {cart.sub_total.toFixed(2)}
                            </TableCell>
                            <TableCell className="">
                              <button onClick={() => removeItem(cart.id)}>
                                <ICONS.XMARK className="w-6 h-6 text-suxnix-text_primary" />
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    {/* Apply coupon */}
                    <div className="flex gap-4 w-[50%] px-[10px]">
                      <Input
                        type="text"
                        className="p-[25px] text-base text-suxnix-text_heading border-none rounded-full shadow-none focus-visible:ring-0 bg-[#f5f5f5]"
                        placeholder="Coupon code"
                      />
                      <ShopButton path={""} size="sm" title={"Apply Coupon"} />
                    </div>
                  </div>
                  {/* cart totals */}
                  <div className="w-[33.33%] px-3">
                    <div className="p-5 space-y-3 border">
                      <div className="pb-3 border-b-2">
                        <h1 className="text-2xl font-semibold">Cart Totals</h1>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b-2">
                        <span className="text-base font-semibold text-suxnix-text_heading">
                          Subtotal
                        </span>
                        <span className="text-base font-semibold text-suxnix-text_heading">
                          {/* <ICONS.INDIANRUPEE className="inline" size={17} /> */}
                          TK {total_price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-3 border-b-2">
                        <span className="text-base font-semibold text-suxnix-text_heading">
                          Total
                        </span>
                        <span className="text-xl font-semibold text-suxnix-text_heading">
                          {/* <ICONS.INDIANRUPEE className="inline" size={17} /> */}
                          TK {paying_amount.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full">
                        <ShopButton
                          size={"md"}
                          title={"Proceed To Checkout"}
                          path={"/"}
                          className="!w-full text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Cart;
