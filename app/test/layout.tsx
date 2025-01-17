import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon compte",
  description: "Description de la page mon compte",
};

export default function CompteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
