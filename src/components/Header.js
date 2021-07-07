import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/*--------- First Top Nav-------------------------*/}
      <div className="first-top-nav flex items-center justify-between bg-amazon_blue p-1 flex-grow py-2">
        {/* Left Area */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <h1
            onClick={() => router.push("/")}
            src="../public/logo.png"
            className="cursor-pointer text-white py-2 px-5 font-bold uppercase"
          >
            Gebhaly
          </h1>
        </div>
        {/* Search Bar */}
        {/* <div className="hidden md:flex items-center h-10 rounded-md flex-grow flex-shrink cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div> */}
        {/* Right Area */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center text-black rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
