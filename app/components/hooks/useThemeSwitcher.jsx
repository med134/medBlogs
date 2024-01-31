"use client";
import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(darkModeMediaQuery.matches ? "dark" : "light");

  useEffect(() => {
    const handleChange = () => {
      const newMode = darkModeMediaQuery.matches ? "dark" : "light";
      setMode(newMode);

      if (newMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  return [mode, setMode];
};

export default useThemeSwitcher;
