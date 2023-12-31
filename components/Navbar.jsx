"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvidersF = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setProvidersF();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
          alt="promptopia-logo"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* DESKTOP NAVIGATION */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              {" "}
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                height={37}
                width={37}
                alt="profile-picture"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            { providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                  >
                      Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
