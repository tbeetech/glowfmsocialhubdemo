import "./globals.css";

export const metadata = { title: "Glow 99.1 FM • Social Hub" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-white">
        <div className="w-full border-b border-neutral-800 bg-neutral-900/80 sticky top-0 z-40">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="font-bold">Glow 99.1 FM • @glow991fm</div>
            <div className="text-sm opacity-75">Your Station, Your Voice</div>
          </div>
        </div>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <footer className="mt-16 border-t border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm opacity-75">
            Follow us everywhere • WhatsApp available • Glow 99.1 FM • @glow991fm
          </div>
        </footer>
      </body>
    </html>
  );
}
