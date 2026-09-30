import Link from "next/link";

export type Course = { image: string; alt: string; href: string };

export const courses: Course[] = [
  { image: "Course_Card_1.png", alt: "Learn Figma from Basic", href: "/404" },
  { image: "Course_Card_2.png", alt: "Build Digital Asset", href: "/course-detail" },
  { image: "Course_Card_3.png", alt: "The Power of Big Data", href: "/404" },
  { image: "Course_Card_4.png", alt: "Balancing Productivity and Health", href: "/404" },
  { image: "Course_Card_5.png", alt: "Mastering Money Management", href: "/404" },
  { image: "Course_Card_6.png", alt: "From Idea to Startup Success", href: "/404" },
];

export function CourseCards({ items = courses }: { items?: Course[] }) {
  return (
    <div className="course-cards-catalog-grid">
      {items.map((course, index) => (
        <Link href={course.href} className="catalog-card-item" key={`${course.image}-${index}`}>
          <img src={`/assets/${course.image}`} alt={course.alt} width={373} height={384} />
        </Link>
      ))}
    </div>
  );
}

export function FilterBar({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className="course-filter-bar">
        <div className="filter-actions-group">
          <button type="button" className="catalog-filter-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>Filter</span>
          </button>
          {!compact && (
            <>
              <button type="button" className="catalog-filter-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span>Level</span>
              </button>
              <button type="button" className="catalog-filter-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="6" r="3" />
                  <rect x="14" y="3" width="7" height="7" />
                  <polygon points="17.5 14 14 21 21 21 17.5 14" />
                </svg>
                <span>Category</span>
              </button>
            </>
          )}
        </div>
        <div className="filter-sort-group">
          <button type="button" className="catalog-sort-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" y1="10" x2="7" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="11" y2="14" />
              <line x1="21" y1="18" x2="15" y2="18" />
            </svg>
            <span>Most Relevant</span>
          </button>
        </div>
      </div>
      {!compact && (
        <div className="course-tags-row">
          {[
            "Featured",
            "Music",
            "Drawing & Painting",
            "Marketing",
            "Animation",
            "Social Media",
            "UI/UX Design",
            "Creative Marketing",
            "Cooking",
          ].map((tag, index) => (
            <button type="button" className={`course-tag-btn ${index === 0 ? "active" : ""}`} key={tag}>
              {tag}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
