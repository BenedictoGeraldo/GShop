import { useRouter as useNextRouter } from "next/navigation";
import { progressBar } from "@/lib/nprogress";

export const useRouterWithProgress = () => {
  const router = useNextRouter();

  return {
    push: (href: string) => {
      progressBar.start();
      router.push(href);
    },
    replace: (href: string) => {
      progressBar.start();
      router.replace(href);
    },
    back: () => {
      progressBar.start();
      router.back();
    },
    forward: () => {
      progressBar.start();
      router.forward();
    },
    refresh: () => {
      progressBar.start();
      router.refresh();
    },
    prefetch: router.prefetch,
  };
};
