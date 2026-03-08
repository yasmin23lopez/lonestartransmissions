import { getSiteSettings } from "@/sanity/lib/fetch";
import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  const settings = await getSiteSettings();
  return <NavbarClient settings={settings} />;
}
