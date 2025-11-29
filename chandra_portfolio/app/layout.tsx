import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandrashekar | Portfolio",
  description: "Software Development Engineer & AI/ML Engineer Portfolio",
};

const navItems = [
  { href: "/", label: "home" },
  { href: "/skills", label: "my skills" },
  { href: "/work", label: "my work" },
  { href: "/projects", label: "my projects" },
  { href: "/blog", label: "my blog" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">
            <div className="brand-mark">CR</div>
            <div className="brand-text-wrap">
              <span className="brand-name">chandrashekar r</span>
              <span className="brand-role">software dev • ai/ml engineer</span>
            </div>
          </div>
          <nav className="nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="main-shell">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} · chandra</span>
          <span>•</span>
          <span>bangalore · building data-driven systems</span>
        </footer>
      </body>
    </html>
  );
}
