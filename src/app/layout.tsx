"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Check for saved user preference or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) {
    // Avoid hydration mismatch by not rendering until mounted
    return (
      <html lang="en" className={inter.className}>
        <head />
        <body />
      </html>
    );
  }

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Web Developer Portfolio</title>
        <meta name="description" content="Modern web developer portfolio with advanced animations and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Web Developer Portfolio" />
        <meta property="og:description" content="Modern web developer portfolio with advanced animations and React" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <button
              aria-label="Toggle Dark Mode"
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>
        </header>
        <main className="pt-20 transition-opacity duration-700 ease-in-out">{children}</main>
      </body>
    </html>
  );
}
