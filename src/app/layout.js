"use client";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import "./layout.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Button } from "@mui/material";
import { useState } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { VariationColor } from "../../hooks/VariationColor";

const links = [
  {
    label: (
      <HomeIcon
        sx={{
          mt: "5px",
        }}
      />
    ),
    route: "/",
  },
];
const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  const { colorBackground, setcolorBackground } = VariationColor();

  return (
    <QueryClientProvider client={queryClient}>
      <html>
        <head>
          <title>Crud Next js 13</title>
        </head>
        <body>
          <header className="barra-navegacion">
            <nav>
              <div>
                {links.map(({ label, route }) => (
                  <div key={route} className="home-btn">
                    <Link href={route}>{label}</Link>
                  </div>
                ))}
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    mt: "-50px",
                    marginLeft: "1300px",
                  }}
                  onClick={(e) => setcolorBackground(!colorBackground)}
                >
                  {colorBackground == true ? (
                    <Brightness3Icon />
                  ) : (
                    <BrightnessHighIcon />
                  )}
                </Button>
              </div>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
