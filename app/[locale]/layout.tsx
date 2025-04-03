import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import './globals.css'
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          messages={messages} 
          locale={locale}
          now={new Date()}
          timeZone="UTC"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}