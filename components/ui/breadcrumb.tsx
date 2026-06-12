import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm">
      <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <ChevronRight size={13} className="text-muted-foreground" />
          {item.href ? (
            <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
