import React from "react";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./_components/sidebar-nav";

export const metadata: Metadata = {
  title: "Settings",
  description: "Change apps appearance, profile details, etc.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings/profile",
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
  },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6 px-10 pb-16 pt-3 sm:pt-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <main className="flex-1 lg:max-w-2xl">{children}</main>
      </div>
    </div>
  );
}
