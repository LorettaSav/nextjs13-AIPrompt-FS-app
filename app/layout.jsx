import { Navbar } from "@components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share chatGPT prompts around the web",
};

function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
              <main className="app">
                  <Navbar/>
                  {children}
              </main>
      </body>
    </html>
  );
}

export default RootLayout;

//children???
