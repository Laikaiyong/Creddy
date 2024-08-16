"use client";

import WalletButtons from "@/components/aptos/WalletButton";
import { useEffect, useState } from "react";
import UserHome from "./UserHome";
import CompanyHome from "./CompanyHome";
import Brand from "@/components/custom/Brand";

enum UserRole {
  User = "User",
  Company = "Company",
}

export default function HomePage() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    let value = localStorage.getItem("userRole") || "";
    setUserRole(value);
    console.log({ value });
  }, []);

  return (
    <>
      <main className="bg-white text-black">
        <Navbar userRole={userRole} setUserRole={setUserRole} />
        {
          userRole === UserRole.User && (
            <UserHome />
          )
        }
        {
          userRole === UserRole.Company && (
            <CompanyHome />
          )
        }
      </main>
    </>
  );
}

function Navbar({ userRole, setUserRole }: {
    userRole: string,
    setUserRole: (role: string) => void
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="flex px-4 md:px-8 bg-white shadow-lg sticky top-0 z-50 w-full">
          <div className="flex justify-between items-center w-full">
            <Brand />
            <Toggle userRole={userRole} setUserRole={setUserRole} />
            <button
              className="md:hidden"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex items-center space-x-4`}
          >
            {userRole === UserRole.User && (
              <>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/credit">Credit</a>
                </li>
              </>
            )}
            {userRole === UserRole.Company && (
              <>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/balance">Balance</a>
                </li>
              </>
            )}
          </ul>
          <WalletButtons />
        </nav>
      </header>
    </>
  );
}


function Toggle(
    { userRole, setUserRole }: {
        userRole: string,
        setUserRole: (role: string) => void       
    }
) {
  const [isChecked, setIsChecked] = useState(userRole === UserRole.User);

  const handleCheckboxChange = () => {
    const newRole = isChecked ? UserRole.User : UserRole.Company; 
    setIsChecked(!isChecked);
    setUserRole(newRole);
    localStorage.setItem("userRole", newRole); // Update localStorage
  };

  return (
    <button
      onClick={handleCheckboxChange}
      className={`mx-4 px-5 py-3 text-white duration-150 rounded-full ${
        isChecked ? "bg-indigo-700" : "bg-indigo-600"
      } hover:bg-indigo-500 active:bg-indigo-700`}
    >
      {userRole === UserRole.User ? "Switch to Company" : "Switch to User"}
    </button>
  );
}