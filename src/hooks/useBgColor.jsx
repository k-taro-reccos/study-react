import { useRouter } from "next/router";

const { useEffect, useMemo } = require("react");

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    // return router.pathname === "/" ? "lightblue" : "beige";
    switch (router.pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";
      default:
        return "";
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
