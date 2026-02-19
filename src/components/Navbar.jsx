import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import logo from "../assets/images/logo.png";
import { ICONS } from "@/icons/icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { drawerSocial } from "@/Data/homepageData";
import { Link } from "react-router-dom";
import { useCartContext } from "@/Context/Cartcontext";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ICONS.CHARTPIE,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: ICONS.CURSOR,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: ICONS.FINGERPRINT,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: ICONS.SQUARESPLUS,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ICONS.PATH,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: ICONS.PLAYCIRCLE },
  { name: "Contact sales", href: "#", icon: ICONS.PHONE },
];

export default function Navbar() {
  const { cart } = useCartContext();
  console.log(cart);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[99] w-full px-5 sm:px-0 ${
        scrolled
          ? "transition-all py-4 lg:py-0 m-auto duration-500 bg-[#fff] animate-[1s_ease-in-out_0s_normal_none_1_running_fadeInDown] shadow-[0_10px_15px_#1919191a]"
          : "py-[20px]"
      }`}
    >
      <div className="container mx-auto sm:px-10 lg:px-0">
        <nav
          aria-label="Global"
          className={`flex items-center justify-between max-w-full w-full lg:py-5 mx-auto lg:px-6`}
        >
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="w-auto h-14" />
            </Link>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center font-semibold text-[#777777] gap-x-1 text-base/6">
                Home
                <ICONS.DOWN
                  aria-hidden="true"
                  className="flex-none text-gray-400 size-5"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="text-gray-600 size-6 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="flex-none text-gray-400 size-5"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Features
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Product
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Ingredients
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Shop
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              News
            </a>
            <a
              href="#"
              className="font-semibold text-suxnix-text_body text-base/6"
            >
              Contacts
            </a>
          </PopoverGroup>
          <div className="flex items-center justify-center sm:gap-10">
            <div className="hidden text-suxnix-text_heading sm:block">
              <Link to="/cart">
                <ICONS.CART size={24} className="w-8 h-8" />
              </Link>
            </div>
            <div className="hidden text-suxnix-text_heading sm:block">
              <ICONS.SEARCH size={24} className="w-8 h-8" />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <div className="p-4 text-white rounded-full bg-suxnix-text_secondary">
                  <ICONS.GRID size={24} />
                </div>
              </button>
            </div>
            <div className="">
              <Drawer direction="right">
                <DrawerTrigger asChild className="hidden lg:flex">
                  <div className="p-4 text-white bg-green-600 rounded-full">
                    <ICONS.GRID size={24} />
                  </div>
                </DrawerTrigger>

                <DrawerContent className="p-[35px_67px_55px] flex flex-col">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="flex items-center justify-end w-full border-none shadow-none">
                        <Button variant="outline" className="w-12">
                          <ICONS.XMARK />
                        </Button>
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <h3 className="text-[43px] leading-[1.15] font-semibold uppercase text-suxnix-text_heading font-font_heading">
                    Getting all of the{" "}
                    <span className="text-suxnix-text_secondary">
                      Nutrients
                    </span>
                    you need simply cannot be done without supplements.
                  </h3>
                  <p>
                    Nam libero tempore, cum soluta nobis eligendi cumque quod
                    placeat facere possimus assumenda omnis dolor repellendu
                    sautem temporibus officiis
                  </p>

                  <DrawerFooter className="px-0 space-y-2">
                    <div className="text-3xl text-suxnix-text_heading">
                      <h3>+1 599 162 4545</h3>
                      <h3>info@example.com</h3>
                    </div>
                    <div className="">
                      <p>5689 Lotaso Terrace, Culver City, CA, United States</p>
                    </div>
                    <div className="flex gap-4">
                      {drawerSocial.map((item) => {
                        return (
                          <div
                            className="rounded-[50%] bg-[#0d9b4d29] text-suxnix-text_heading flex items-center justify-center w-10 h-10"
                            key={item.id}
                          >
                            <item.icon size={16} />
                          </div>
                        );
                      })}
                    </div>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-[99] bg-[#000] !opacity-[.6] visible" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[99] w-full p-6 overflow-y-auto bg-white max-w-[18.5rem] sm:max-w-[19rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="w-auto h-12" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <ICONS.XMARK aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Home
                    <ICONS.DOWN
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block py-2 pl-6 pr-3 font-semibold text-gray-900 rounded-lg text-sm/7 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
