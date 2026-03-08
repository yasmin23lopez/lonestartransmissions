import { getSiteSettings } from "@/sanity/lib/fetch";
import { FooterClient } from "./footer-client";

export async function Footer() {
  const settings = await getSiteSettings();
  return <FooterClient settings={settings} />;
}
