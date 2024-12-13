// components/ClientWrapper.jsx
"use client";

import { useState, useEffect } from "react";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="relative w-64 h-64">
          <img
            src="./images/Edo2.png" // Remplacez par le chemin vers votre image
            alt="Loader"
            className="w-full h-full rounded-full animate-spin-slow"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
