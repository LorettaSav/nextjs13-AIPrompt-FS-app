import { Children } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share chatGPT prompts around the web",
};

function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{Children}</main>
      </body>
    </html>
  );
}

export default layout;
