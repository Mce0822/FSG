"use client";

const footerLinks = {
  Product: [
    { label: "Features", href: "#benefits" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M3 3v18h18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 16l4-8 4 4 5-9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                FullStack<span className="text-brand-400">Growth</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
              All-in-one CRM, marketing, and advertising platform built for busy
              business owners who want results, not complexity.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["X", "Li", "Fb", "Ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FullStackGrowth. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
