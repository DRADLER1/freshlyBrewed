import { NavBar } from "@/components";
import "./globals.css";
import { Roboto } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Store",
  description: "School students teacher landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
