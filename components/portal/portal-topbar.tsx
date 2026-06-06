import { ThemeToggle } from "@/components/theme-toggle";
import { UserMenu } from "@/components/portal/user-menu";

interface PortalTopbarProps {
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
}

export function PortalTopbar({ email, fullName, avatarUrl }: PortalTopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/75 px-6 backdrop-blur-md">
      <div className="text-sm text-muted-foreground">
        Portal de cliente · Spheres Systems
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserMenu email={email} fullName={fullName} avatarUrl={avatarUrl} />
      </div>
    </header>
  );
}
