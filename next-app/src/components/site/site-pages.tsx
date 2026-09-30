import Image from "next/image";
import Link from "next/link";
import { CourseCards, FilterBar, courses } from "./catalog";
import { GridBackground, PageFrame, SiteFooter, SiteHeader } from "./site-shell";

export function HomePage() {
  return (
    <PageFrame>
      <GridBackground className="" /><SiteHeader active="home" /><main className="hero"><Image className="deco twist-yellow-left" src="/assets/twist_yellow.png" alt="" width={180} height={180} /><Image className="deco twist-white-left" src="/assets/twist_white.png" alt="" width={180} height={180} /><Image className="deco oval-white-left" src="/assets/oval_white.png" alt="" width={150} height={150} /><Image className="deco cylinder-yellow-right" src="/assets/cylinder_yellow.png" alt="" width={180} height={220} /><Image className="deco pyramid-white-right" src="/assets/pyramid_white.png" alt="" width={180} height={180} /><Image className="deco twist-white-right" src="/assets/twist_white_2.png" alt="" width={180} height={180} /><div className="hero-content"><h1>Get Access to Hundreds<br />Courses Available</h1><p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><form className="search-form" action="#"><div className="search-bar"><span className="search-icon" aria-hidden="true">⌕</span><input type="search" placeholder="Course, topic, creator" aria-label="Search courses" /></div><button type="submit" className="search-btn">Search</button></form></div><div className="visual-stage"><Image className="huge-yellow-oval" src="/assets/ring_yellow.png" alt="" width={600} height={600} /><Image className="student-boy" src="/assets/boy.png" alt="Student learning" width={360} height={500} /><Image className="card uiux-card" src="/assets/UIUX_course.png" alt="UI/UX Design course" width={260} height={180} /><Image className="card progress-card" src="/assets/Learning_progress.png" alt="Learning progress 55%" width={260} height={110} /><Image className="card students-card" src="/assets/Happy_students_white.png" alt="Happy students" width={260} height={110} /></div></main>
      <section className="courses-section"><div className="courses-header"><h2>Discover Your Passion,<br />Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p><div className="tags-container"><div className="tags-row">{["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"].map((tag, index) => <button type="button" className={`tag-pill ${index === 0 ? "active" : ""}`} key={tag}>{tag}</button>)}</div></div></div><CourseCards items={courses} /></section>
      <SiteFooter />
    </PageFrame>
  );
}

export function CoursePage() {
  return (
    <PageFrame className="courses-page">
      <div className="course-top-wrapper"><GridBackground className="course-hero-grid" /><SiteHeader active="courses" /><section className="course-hero-section"><div className="course-hero-content"><h1>Find Your Next Course</h1><form className="course-search-form" action="#"><div className="course-search-input-wrapper"><span className="search-icon" aria-hidden="true">⌕</span><input type="search" placeholder="Search" aria-label="Search courses" /></div><button type="submit" className="course-search-btn"><span>Courses</span><span aria-hidden="true">⌄</span></button></form></div></section></div>
      <main className="course-catalog-main"><div className="course-catalog-container"><FilterBar /><CourseCards items={[...courses, ...courses, ...courses]} /><nav className="catalog-pagination" aria-label="Course pagination"><button type="button" className="page-nav-arrow" aria-label="Previous page">‹</button>{[1, 2, 3, 4, 5].map((page) => <Link href="#" className={`page-number ${page === 1 ? "active" : ""}`} key={page}>{page}</Link>)}<button type="button" className="page-nav-arrow" aria-label="Next page">›</button></nav></div></main>
      <SiteFooter />
    </PageFrame>
  );
}

export function CreatorPage() {
  return (
    <PageFrame className="creator-page">
      <div className="creator-top-wrapper"><GridBackground className="creator-hero-grid" /><SiteHeader active="creator" /><section className="creator-hero-section"><div className="creator-hero-container"><div className="creator-profile-header"><Image className="creator-profile-avatar" src="/assets/creator_pfp.png" alt="PurePearl Studio Profile Picture" width={96} height={96} /><div className="creator-profile-headings"><div className="creator-title-row"><h1 className="creator-name-title">PurePearl Studio</h1><span className="creator-role-tag">Creator</span></div><p className="creator-role-subtitle">Passionate UI/UX, Web designer</p></div></div><p className="creator-intro-bio">Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive this creative journey. Let&apos;s explore and learn together!</p><div className="creator-action-bar"><div className="creator-metrics-group"><div className="creator-metric-badge"><span className="metric-val">3</span><span className="metric-lbl">Products</span></div><div className="creator-metric-badge"><span className="metric-val">12</span><span className="metric-lbl">Followers</span></div></div><button type="button" className="creator-hero-follow-btn">Follow</button></div></div></section></div>
      <main className="creator-catalog-main"><div className="creator-catalog-container"><FilterBar /><CourseCards items={courses} /></div></main>
      <SiteFooter />
    </PageFrame>
  );
}
