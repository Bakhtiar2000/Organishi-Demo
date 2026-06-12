import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = { isActive?: boolean } & React.ComponentProps<"button">;

const PaginationLink = ({ className, isActive, ...props }: PaginationLinkProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors",
      isActive
        ? "bg-primary font-semibold text-white"
        : "text-muted-foreground hover:bg-gray-100",
      props.disabled && "cursor-not-allowed opacity-50",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<"button">) => (
  <button
    aria-label="Go to previous page"
    className={cn(
      "flex h-8 items-center gap-1 rounded-md px-2 text-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <ChevronLeft size={14} />
    <span>Prev</span>
  </button>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<"button">) => (
  <button
    aria-label="Go to next page"
    className={cn(
      "flex h-8 items-center gap-1 rounded-md px-2 text-sm transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRight size={14} />
  </button>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-8 w-8 items-center justify-center text-muted-foreground", className)}
    {...props}
  >
    <MoreHorizontal size={14} />
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

/** Returns the page numbers (and "..." as null) to render for a given total/current. */
export function getPageRange(current: number, total: number): (number | null)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, null, total];
  if (current >= total - 3) return [1, null, total - 4, total - 3, total - 2, total - 1, total];
  return [1, null, current - 1, current, current + 1, null, total];
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
