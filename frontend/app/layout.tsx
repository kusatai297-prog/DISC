import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="site-container">
          {children}
        </main>
      </body>
    </html>
  );
}
