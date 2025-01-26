
import "./globals.css";


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
