"use client";

import Link from "next/link";
import { useState } from "react";
import { GridBackground, PageFrame, SiteFooter, SiteHeader } from "./site-shell";

type Tab = "about" | "lesson" | "reviews";

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const reviews = [
  { id: 1, alt: "Review by PurePearl Studio - 5 stars" },
  { id: 2, alt: "Review by Albert Flores - 5 stars" },
  { id: 3, alt: "Review by Cody Fisher - 5 stars" },
  { id: 4, alt: "Review by Brooklyn Simmons - 5 stars" },
];

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [activeFilter, setActiveFilter] = useState<string>("All rating");

  return (
    <PageFrame className="course-detail-page">
      {/* Top Wrapper: Solid blue background with white grid spanning header and hero */}
      <div className="detail-top-wrapper">
        <GridBackground className="detail-hero-grid" />
        <SiteHeader active="courses" />

        {/* Hero Content */}
        <div className="detail-hero-content">
          <div className="detail-hero-info">
            <h1 className="detail-course-title">Build Digital Asset: A Comprehensive Guide</h1>
            <p className="detail-course-subtitle">Unlock the Power of Digital Creation with Expert Guidance</p>
            <p className="detail-course-author">
              by <span className="author-highlight">purepearl studio</span>
            </p>

            {/* Pill Badges */}
            <div className="detail-badges-row">
              <div className="detail-badge-pill">
                <svg
                  className="badge-icon-blue"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#003be2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span>Intermediate</span>
              </div>
              <div className="detail-badge-pill">
                <svg
                  className="badge-icon-star"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#f59e0b"
                  stroke="#f59e0b"
                  strokeWidth="1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>4.8 (172 reviews)</span>
              </div>
              <div className="detail-badge-pill">
                <svg
                  className="badge-icon-blue"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#003be2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Share Button */}
          <button type="button" className="detail-share-btn" aria-label="Share course">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Content Area */}
      <main className="detail-columns-wrapper">
        {/* Left Column: Video & Detailed Information */}
        <div className="detail-left-col">
          {/* Video Thumbnail: dimensions 720x479 px */}
          <div className="detail-video-card">
            <img
              className="detail-video-thumbnail"
              src="/assets/video_thumbnail.png"
              alt="Build Digital Asset Video Thumbnail"
              width={720}
              height={479}
            />
            {/* Play button: dimensions 104x104 px */}
            <button type="button" className="detail-play-btn" aria-label="Play course preview video">
              <img src="/assets/play_button.png" alt="Play Button" width={104} height={104} />
            </button>
          </div>

          {/* Tabs: About, Lesson, Reviews */}
          <div className="detail-tabs-row" role="tablist">
            <button
              className={`detail-tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
              data-tab="about"
              role="tab"
              aria-selected={activeTab === "about"}
              type="button"
            >
              About
            </button>
            <button
              className={`detail-tab-btn ${activeTab === "lesson" ? "active" : ""}`}
              onClick={() => setActiveTab("lesson")}
              data-tab="lesson"
              role="tab"
              aria-selected={activeTab === "lesson"}
              type="button"
            >
              Lesson
            </button>
            <button
              className={`detail-tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
              data-tab="reviews"
              role="tab"
              aria-selected={activeTab === "reviews"}
              type="button"
            >
              Reviews
            </button>
          </div>

          {/* Tab 1: About Panel */}
          <div id="tab-about" className={`tab-content-panel ${activeTab === "about" ? "active" : ""}`}>
            {/* Description Section */}
            <section className="detail-description-section">
              <h2 className="detail-section-title">Description</h2>
              <p>
                Embark on an enlightening exploration into the world of digital creation with our comprehensive
                course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning
                experience invites you to delve deep into the intricacies of crafting impactful digital content. From
                laying the groundwork with foundational concepts to mastering advanced techniques, this guide is
                meticulously curated to empower you with the skills essential for navigating the dynamic landscape of
                digital asset creation.
              </p>
              <p>
                In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
                concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                effectively in the digital realm.
              </p>
              <p>
                As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the
                nuances of design principles that drive impactful creations. Uncover the secrets behind effective
                visual communication, exploring color theory, typography, and layout strategies that elevate your digital
                assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to
                apply these principles in practical scenarios.
              </p>
            </section>

            {/* Sneak Peak Section: pics dimension 167x125 px */}
            <section className="detail-sneak-peak-section">
              <h2 className="detail-section-title">Sneak Peak</h2>
              <div className="sneak-peak-container">
                <div className="sneak-peak-card">
                  <img src="/assets/sneak_peak_1.png" alt="Sneak Peak Preview 1" width={167} height={125} />
                </div>
                <div className="sneak-peak-card">
                  <img src="/assets/sneak_peak_2.png" alt="Sneak Peak Preview 2" width={167} height={125} />
                </div>
                <div className="sneak-peak-card">
                  <img src="/assets/sneak_peak_3.png" alt="Sneak Peak Preview 3" width={167} height={125} />
                </div>
                <div className="sneak-peak-card">
                  <img src="/assets/sneak_peak_4.png" alt="Sneak Peak Preview 4" width={167} height={125} />
                </div>
              </div>
            </section>

            {/* Key Points Section */}
            <section className="detail-key-points-section">
              <h2 className="detail-section-title">Key Points</h2>
              <ul className="key-points-checklist">
                {keyPoints.map((point) => (
                  <li key={point}>
                    <span className="point-check-badge" aria-hidden="true">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Tab 2: Lesson Panel */}
          <div id="tab-lesson" className={`tab-content-panel ${activeTab === "lesson" ? "active" : ""}`}>
            {/* Explore the Modules Section */}
            <section className="modules-explore-section">
              <h2 className="detail-section-title">Explore the Modules</h2>
              <p className="modules-intro-text">
                Immerse yourself in the course content as we break down each module into comprehensive lessons,
                providing practical insights and hands-on experiences.
              </p>
            </section>

            {/* Lesson List Section: Module icon dimensions 72x72 px */}
            <section className="lesson-list-section">
              <h2 className="detail-section-title">Lesson List</h2>
              <div className="modules-list">
                {modules.map((module) => (
                  <div className="module-item" key={module.title}>
                    <div className="module-icon-wrap">
                      <img src="/assets/module_icon.png" alt="Module Icon" width={72} height={72} />
                    </div>
                    <div className="module-content">
                      <h3 className="module-title">{module.title}</h3>
                      <p className="module-desc">{module.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lesson Content Section */}
            <section className="lesson-content-section">
              <h2 className="detail-section-title">Lesson Content</h2>
              <p className="lesson-section-desc">
                Engage with each lesson through captivating video content, detailed textual explanations, and
                interactive elements. Download resources, complete assignments, and test your understanding with
                quizzes.
              </p>
            </section>

            {/* Lesson Progress Tracking Section: dimensions 723x116 px */}
            <section className="lesson-progress-section">
              <h2 className="detail-section-title">Lesson Progress Tracking</h2>
              <p className="lesson-section-desc">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                through your learning journey.
              </p>
              <div className="learning-progress-card">
                <img
                  src="/assets/learning_progress_long.png"
                  alt="Learning Progress 55%"
                  width={723}
                  height={116}
                />
              </div>
            </section>
          </div>

          {/* Tab 3: Reviews Panel */}
          <div id="tab-reviews" className={`tab-content-panel ${activeTab === "reviews" ? "active" : ""}`}>
            {/* What Learners Are Saying Section */}
            <section className="reviews-overview-section">
              <h2 className="detail-section-title">What Learners Are Saying</h2>
              <p className="reviews-intro-text">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
                Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
                transformative journey of mastering digital asset creation.
              </p>

              {/* Ratings Card: dimensions 723x226 px */}
              <div className="ratings-card-wrapper">
                <img
                  src="/assets/ratings_card.png"
                  alt="Course Ratings: 4.7 out of 5 with rating breakdowns"
                  width={723}
                  height={226}
                />
              </div>
            </section>

            {/* Individual Reviews Section */}
            <section className="individual-reviews-section">
              <h2 className="detail-section-title">Individual Reviews:</h2>

              {/* Filter Rating Pills */}
              <div className="reviews-filter-row" role="group" aria-label="Filter reviews by rating">
                {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((pill) => (
                  <button
                    key={pill}
                    className={`review-filter-pill ${activeFilter === pill ? "active" : ""}`}
                    onClick={() => setActiveFilter(pill)}
                    type="button"
                  >
                    {pill}
                  </button>
                ))}
              </div>

              {/* Review Cards: dimensions 723x276 px */}
              <div className="review-cards-list">
                {reviews.map((r) => (
                  <div className="review-card-item" key={r.id}>
                    <img src={`/assets/review_${r.id}.png`} alt={r.alt} width={723} height={276} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column: 112 Lessons Card (dimensions 412x959 px) */}
        <div className="detail-right-col">
          <aside className="lessons-sidebar-card" aria-label="Course enrollment and lessons summary">
            {/* Top Lessons Header & List */}
            <div className="card-lessons-block">
              <h3 className="lessons-block-title">112 Lessons (24 hours)</h3>
              <div className="lessons-summary-list">
                <div className="lesson-summary-item">
                  <span className="lesson-idx">01</span>
                  <span className="lesson-name">Introduction to Digital Assets</span>
                  <span className="lesson-duration">12 mins</span>
                </div>
                <div className="lesson-summary-item">
                  <span className="lesson-idx">02</span>
                  <span className="lesson-name">Design Principles for Impact</span>
                  <span className="lesson-duration">21 mins</span>
                </div>
                <div className="lesson-summary-item">
                  <span className="lesson-idx">03</span>
                  <span className="lesson-name">Advanced Techniques in Digital Creation</span>
                  <span className="lesson-duration">16 mins</span>
                </div>
              </div>
              <a href="#" className="more-lessons-link">
                99 more videos
              </a>
            </div>

            {/* Pricing & Enrollment CTA */}
            <div className="card-enroll-block">
              <p className="enroll-lead-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
              <div className="price-row">
                <span className="price-amount">$25</span>
                <span className="price-cadence">/lifetime</span>
              </div>
              <button type="button" className="btn-enroll-submit">
                Enroll Now
              </button>
            </div>

            {/* This Course Includes List */}
            <div className="card-includes-block">
              <h4 className="includes-title">This course include</h4>
              <ul className="includes-features-list">
                <li>
                  <svg
                    className="inc-feature-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#003be2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Learning Resources</span>
                </li>
                <li>
                  <svg
                    className="inc-feature-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#003be2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span>Quality Lesson Videos</span>
                </li>
                <li>
                  <svg
                    className="inc-feature-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#003be2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>Certificate of Completion</span>
                </li>
                <li>
                  <svg
                    className="inc-feature-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#003be2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Private Consultation</span>
                </li>
              </ul>
            </div>

            {/* Creator Section */}
            <div className="card-creator-block">
              <div className="creator-id-row">
                <img
                  className="creator-profile-pic"
                  src="/assets/peral_studio.png"
                  alt="PurePearl Studio"
                  width={52}
                  height={52}
                />
                <div className="creator-info-text">
                  <h5 className="creator-brand-name">PurePearl Studio</h5>
                  <p className="creator-subtitle">Professional Creator</p>
                </div>
              </div>
              <p className="creator-prompt-text">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
              <Link href="/creator" className="btn-creator-profile">
                See Full Profile
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </PageFrame>
  );
}
