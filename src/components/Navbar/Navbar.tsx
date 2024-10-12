"use client";

import useCart from "@/hooks/useCart";
import { useUser } from "@/hooks/useUser";
import { navbarHiddenUrl } from "@/utils/data";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextuiNavbar,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../../public/assets/logo/bake-n-treat.png";
import "./Navbar.css";
import { Londrina_Sketch as Font } from "next/font/google";

const font = Font({
  subsets: ["latin"],
  weight: ["400"],
});
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: user } = useUser();
  const { cart } = useCart();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <NextuiNavbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      maxWidth="xl"
      className={navbarHiddenUrl.includes(pathname) ? "hidden" : ""}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            className="flex items-center gap-2 active:scale-105 lg:active:scale-100 lg:hover:-translate-y-2 transition duration-500"
            href={"/"}
          >
            <Image
              src={Logo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full border-2 bg-white border-[#FF6F00] p-2"
            />
            <span className={font.className}>Bake N Treat</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-10 font-sans"
        justify="center"
      >
        {navItems.map((navItem) => (
          <NavbarItem key={navItem.link}>
            <Link
              href={navItem.link}
              className={`nav-link ${
                pathname === navItem.link && "active-link"
              }`}
            >
              {navItem.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="font-sans">
        {user?.id ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform font-sans"
                color="secondary"
                name={user?.name}
                size="sm"
                src={user?.image}
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              className="font-sans"
            >
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              <DropdownItem
                as={Link}
                href={user?.role === "admin" ? "/dashboard" : "/profile"}
                key={user?.role === "admin" ? "dashboardKey" : "profileKey"}
              >
                {user?.role === "admin" ? "Dashboard" : "Profile"}
              </DropdownItem>
              <DropdownItem as={Link} href={"/cart"} key="cart">
                Cart ({cart.length})
              </DropdownItem>
              <DropdownItem
                as={Button}
                key="logout"
                color="danger"
                onPress={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="/authentication"
              variant="solid"
              className="font-bold"
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item) => (
          <NavbarMenuItem key={item.link}>
            <Link className="w-full font-sans " href={item.link}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextuiNavbar>
  );
};

export default Navbar;
