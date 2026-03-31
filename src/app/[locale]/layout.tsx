import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { FavoritesProvider } from '@/context/FavoritesContext';
import StyledJsxRegistry from '../registry';
import '../../styles/global_styles.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StyledJsxRegistry>
            <FavoritesProvider>{children}</FavoritesProvider>
          </StyledJsxRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
