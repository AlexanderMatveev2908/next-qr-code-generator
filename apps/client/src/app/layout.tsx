import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { genStoreSSR } from "@/core/store";
import Providers from "@/features/layout/shells/Providers";
import Toast from "@/features/layout/components/Toast/Toast";
import WrapWakeUp from "@/features/layout/shells/WrapWakeUp/WrapWakeUp";
import Header from "@/features/layout/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next PERN courses",
  description: "Next PERN App for courses development",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = genStoreSSR({});

  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen h-full w-full antialiased bg-[var(--white__sec)]`}
      >
        <Providers
          {...{
            preloadedState: store.getState(),
          }}
        >
          <Header />
          <Toast />

          <WrapWakeUp>{children}</WrapWakeUp>
        </Providers>
      </body>
    </html>
  );
}
