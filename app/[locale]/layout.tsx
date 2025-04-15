import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "./globals.css";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "fr" | "de" | "it" | "es" }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = await getMessages();


  return (
    <html lang={locale}>
      <header>
        <meta name="google-site-verification" content="4nhcBoMPTZ8LjwoxxcnTEvVwod94yFyEqdlBupiy_xQ" />
      </header>
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
            {props.children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}