import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GENERATOR",
  description: "Generate categories and iamges links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <body>
        <div className="container mx-auto my-8 flex justify-center gap-8">
          <Link
            href={"/images"}
            className="rounded px-4 py-2 border border-green-700 uppercase hover:bg-green-950 transition-colors"
          >
            Images link Generator
          </Link>
          <Link
            href={"/categories"}
            className="rounded px-4 py-2 border border-green-700 uppercase  hover:bg-green-950 transition-colors"
          >
            Categories Generator
          </Link>
        </div>
        <div className="rounded-xl border-green-900 border-2  container m-auto my-8 p-8">
          {children}
        </div>
        <p className="text-center">Built by Bakri Hmouda</p>
      </body>
    </html>
  );
}
