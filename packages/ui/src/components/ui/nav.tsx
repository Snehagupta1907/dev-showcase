"use client";
import { cn } from "@repo/ui/lib/utils";
import { buttonVariants } from "@repo/ui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  type LucideIcon,
} from "@repo/ui/components/ui/tooltip";


interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
  LinkComponent: React.ComponentType<any>;
  getPathname: () => string;
}

export function Nav({ links, isCollapsed, LinkComponent, getPathname }: NavProps) {
  const pathName = getPathname();

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <LinkComponent
                    href={link.href}
                    className={cn(
                      buttonVariants({
                        variant: link.href === pathName ? "default" : "ghost",
                        size: "icon"
                      }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </LinkComponent>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <LinkComponent
                key={index}
                href={link.href}
                className={cn(
                  buttonVariants({
                    variant: link.href === pathName ? "default" : "ghost",
                    size: "sm"
                  }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" && "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </LinkComponent>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
