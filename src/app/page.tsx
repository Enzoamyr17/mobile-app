"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { HomeIcon, PackageIcon, ShoppingCart, Award, Info, Filter, PanelLeft, User } from "lucide-react";
import { Divider } from "@/components/Divider";
import { RecommendationCard } from "@/components/reco";
import { ProductCard } from "@/components/Product";
export default function Home() {

  const [leftOpen, setLeftOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);


  const NavMenu = [
    {
      id: 1,
      name: "Dashboard",
      href: "#",
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Products",
      href: "#",
      icon: PackageIcon,
    },
    {
      id: 3,
      name: "Group Order",
      href: "#",
      icon: ShoppingCart,
    },
    {
      id: 4,
      name: "Club Member",
      href: "#",
      icon: Award,
    },
    {
      id: 5,
      name: "About",
      href: "#",
      icon: Info,
    },
  ]

  const FilterMenu = [
    {
      id: 1,
      name: "Snacks",
      href: "#",
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Chocolates",
      href: "#",
      icon: HomeIcon,
    },
    {
      id: 3,
      name: "Drinks",
      href: "#",
      icon: HomeIcon,
    },
    {
      id: 4,
      name: "Milk",
      href: "#",
      icon: HomeIcon,
    },
  ]

  const ProductsMenu = [
    {
      name: "Nescafe Gold",
      price: 189,
      discount: 15, // 15% discount
    },
    {
      name: "Nescafe Original",
      price: 129,
      discount: 10,
    },
    {
      name: "Coffee Creamer",
      price: 89,
      discount: 5,
    },
    {
      name: "Pringles",
      price: 129,
      discount: 10,
    },
    {
      name: "Munchitos",
      price: 129,
      discount: 10,
    },
  ];
  

  return (
    <div className="relative min-h-screen">

      {/* Navigation Sidebar; LEFT SIDEBAR */}
      <Sidebar isOpen={leftOpen} toggleSidebar={() => setLeftOpen(!leftOpen)}>
        <div className="flex justify-between items-center p-4">
          <User className="size-10" />
          <h1 className="m-auto ml-4 text-xl font-semibold capitalize">
            Guest User
          </h1>
          <button
            onClick={() => setLeftOpen(!leftOpen)}
            className="transform p-2 text-black rounded-full transition-all duration-300"
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <Divider />
        <div className="flex flex-col gap-4 p-4">
          {/* bg-selected for active */}
          {NavMenu.map((item) => (
            <a key={item.id} href={item.href} className="flex py-2 pl-8 rounded-xl active:shadow-active">
              <item.icon className="size-6 my-auto" />
              <h1 className="my-auto pl-4 text-2xl font-medium">{item.name}</h1>
            </a>
          ))}
        </div>
      </Sidebar>

      {/* Navigation Sidebar; Filter SIDEBAR */}
      <Sidebar side="right" isOpen={filterOpen} toggleSidebar={() => setFilterOpen(!filterOpen)}>
        <div className="flex justify-between items-center p-4">
          <h1 className="m-auto ml-4 text-xl font-semibold capitalize">
            Filter
          </h1>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="transform p-2 text-black rounded-full transition-all duration-300"
            aria-label="Toggle Sidebar"
          >
            <Filter />
          </button>
        </div>
        <Divider />
        <div className="flex flex-col gap-4 py-4">
          {/* bg-selected for active */}
          {NavMenu.map((item) => (
            <a key={item.id} href={item.href} className="flex py-2 pl-8 rounded-xl active:shadow-active">
              <item.icon className="size-6 my-auto" />
              <h1 className="my-auto pl-4 text-2xl font-medium">{item.name}</h1>
            </a>
          ))}
        </div>
      </Sidebar>

      {/* Navigation Sidebar; Cart SIDEBAR */}
      <Sidebar side="right" isOpen={cartOpen} toggleSidebar={() => setCartOpen(!cartOpen)}>
        <div className="flex justify-between items-center p-4">
          <h1 className="m-auto ml-4 text-xl font-semibold capitalize">
            Cart
          </h1>
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="transform p-2 text-black rounded-full transition-all duration-300"
            aria-label="Toggle Sidebar"
          >
            <ShoppingCart />
          </button>
        </div>
        <Divider />
        <div className="flex flex-col gap-4">
          {/* bg-selected for active */}
          <h1>Cart Content</h1>
        </div>
      </Sidebar>

      {/* main content */}
      <div className="flex flex-col p-8 gap-8">

        {/* Header */}
        <div className="flex w-full">
          <div className="m-auto ml-0 justify-start">
            <button onClick={() => setLeftOpen(!leftOpen)}>
              <PanelLeft />
            </button>
          </div>
          <div className="m-auto">
          <h1 className="text-2xl font-semibold text-center">Chocomart 28</h1>
          </div>
          <div className="flex gap-4 m-auto mr-0 justify-end">
          <button onClick={() => setFilterOpen(!filterOpen)}>
            <Filter />
          </button>
          <button onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingCart />
          </button>
          </div>
        </div>

        {/* Recent Purchase */}
        <div className="m-auto flex flex-nowrap w-full md:w-[40rem] h-32 md:h-40 bg-choco-card rounded-lg overflow-hidden">
            {/* Image */}
            <div className="h-full aspect-square bg-blue-300"/>
            
            {/* Info */}
            <div className="flex flex-col w-full md:text-xl p-4">
              <h1>Nescafe Gold</h1>
              <div className="flex w-full justify-between">
                <p>3 Pieces</p>
                <p>+3 Items</p>
              </div>
              <button className="m-auto mb-0 bg-choco-greenbtn text-white rounded-lg px-6 py-1">
                <p>Order Again</p>
              </button>
            </div>
        </div>

        <Divider />

        {/* Recommendation */}
        <div className="flex gap-4 h-auto pb-6 -mb-6 overflow-x-scroll lg:overflow-x-hidden">
          <div className="flex flex-nowrap lg:flex-wrap gap-4 h-24 lg:h-auto px-4">
            {/* Recommendation Card */}
            {ProductsMenu.map((item) => (
              <RecommendationCard key={item.name} name={item.name} price={item.price} discount={item.discount} />
            ))}
          </div>
        </div>

        <Divider />

        {/* Products */}
        <div className="">
          <div className="m-auto max-w-[40rem] flex flex-wrap justify-start gap-4">
            {ProductsMenu.map((item) => (
              <ProductCard key={item.name} name={item.name} price={item.price} discount={item.discount} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
