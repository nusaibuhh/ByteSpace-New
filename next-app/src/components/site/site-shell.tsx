import Image from "next/image";
import Link from "next/link";

export function SiteHeader({ active }: { active: "home" | "courses" | "creator" }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          <Image src="/assets/Header_Logo.png" alt="ByteSpace" width={171} height={37} priority />
        </Link>
        <nav aria-label="Main navigation">
          <Link className={active === "home" ? "active" : ""} href="/">Home</Link>
          <Link className={active === "courses" ? "active" : ""} href="/course">Courses</Link>
          <Link className={active === "creator" ? "active" : ""} href="/creator">Creators</Link>
        </nav>
        <div className="header-actions">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join Us</Link>
          <Link href="#" className="bag-btn" aria-label="Shopping bag">
            <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l-1.5 13H6.5L5 8z" /><path d="M9 8V5a3 3 0 0 1 6 0v3" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function GridBackground({ className }: { className: string }) {
  return <div className={`grid-background ${className}`} aria-hidden="true"><Image src="/assets/Group 4.png" alt="" fill sizes="100vw" /></div>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link className="footer-logo" href="/"><Image src="/assets/footer_logo.png" alt="ByteSpace" width={171} height={37} /></Link>
            <p className="footer-newsletter-text">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="footer-newsletter-form" action="#"><input type="email" placeholder="Enter your email" aria-label="Enter your email" /><button type="submit" className="footer-search-btn">Search</button></form>
            <p className="footer-disclaimer">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-link-col"><Link href="#">Featured Courses</Link><Link href="#">Featured Categories</Link><Link href="#">Business</Link><Link href="#">IT</Link><Link href="#">Design</Link></div>
            <div className="footer-link-col"><Link href="#">Development</Link><Link href="#">Marketing</Link><Link href="#">Photography</Link><Link href="#">Finance</Link><Link href="#">Sport</Link></div>
            <div className="footer-link-col"><Link href="#">Become a Creator</Link><Link href="#">Affiliate Program</Link><Link href="#">Contact</Link><Link href="#">Help</Link><Link href="#">About</Link></div>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2023 ByteSpace. All rights reserved.</p><div className="footer-legal-links"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></div></div>
      </div>
    </footer>
  );
}

export function PageFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`page-container ${className}`}>{children}</div>;
}
