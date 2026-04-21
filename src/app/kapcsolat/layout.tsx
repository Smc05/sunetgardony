import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat | Sunset Apartment Gárdony",
  description:
    "Lépjen kapcsolatba velünk! Elérhetőségeink, üzenetküldő és térkép a Sunset Gardony apartmanhoz.",
};

export default function KapcsolatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
