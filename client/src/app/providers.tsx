"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
});

const ProvidersBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor?.href && !anchor.target) {
        const url = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);

        if (
          url.pathname !== currentUrl.pathname ||
          url.search !== currentUrl.search
        ) {
          NProgress.start();
        }
      }
    };

    const handleRouteChange = () => {
      NProgress.start();
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
};
export default ProvidersBar;
