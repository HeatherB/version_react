import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { prisma } from '@/lib/db';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;
  const messages = await getMessages();

  const prismaData = await prisma.recipe.findMany();

  console.log('prismaData ', prismaData);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}