import "./globals.css";

export const metadata = {
  title: "Modo Calma | Tecnología con empatía",
  description: "Acompañamiento emocional para universitarios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
