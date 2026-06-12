"use client";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CmZbzmSt5/?mibextid=wwXIfr",
    filled: true,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    filled: false,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    filled: false,
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    filled: false,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const NewsLetter = () => {
  return (
    <div className="border-y bg-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-5 md:flex-row">
        {/* Left — text */}
        <div className="shrink-0">
          <p className="text-sm font-bold text-foreground">Subscribe our Newsletter</p>
          <p className="mt-0.5 max-w-xs text-xs text-muted-foreground">
            Join 15,000+ wellness enthusiasts. Get weekly organic recipes, farming stories, and
            member-only discounts.
          </p>
        </div>

        {/* Center — input + button */}
        <div className="flex w-full max-w-md items-center overflow-hidden rounded-full border bg-white shadow-sm">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent px-5 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button className="bg-primary hover:bg-primary/90 m-1 rounded-full px-6 py-2 text-sm font-semibold text-white transition-colors">
            Subscribe
          </button>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, filled, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80 ${
                filled
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-foreground"
              }`}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
