import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto pt-20">{children}</main>
      </body>
    </html>
  );
}
