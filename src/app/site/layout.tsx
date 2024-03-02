import Navigation from "@/components/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full relative">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default layout;
