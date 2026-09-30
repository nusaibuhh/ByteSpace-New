import Image from "next/image";
import Link from "next/link";
import { GridBackground, PageFrame, SiteFooter, SiteHeader } from "./site-shell";

export default function NotFoundPage() {
  return <PageFrame className="not-found-page"><div className="not-found-top-wrapper"><GridBackground className="not-found-hero-grid" /><SiteHeader active="home" /><section className="not-found-hero-section"><div className="not-found-graphic"><Image src="/assets/404.png" alt="404 Error" width={936} height={480} priority /></div><div className="not-found-content-box"><div className="not-found-heading-wrap"><h1 className="not-found-title">The page you are looking for doesn&apos;t exist</h1></div><p className="not-found-desc">Try to use a correct url or go back to homepage to start again</p><Link href="/" className="btn-back-home">Back to Home</Link></div></section></div><SiteFooter /></PageFrame>;
}
