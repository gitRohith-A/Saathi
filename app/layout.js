"use client"
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";
import "../styles/media.scss";
import "../styles/fonts.scss";
import { useEffect } from "react";


export default function RootLayout({ children }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
