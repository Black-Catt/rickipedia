import { ApolloWrapper } from '@/lib/apollo-provider';
import ReduxProvider from '@/redux/provider';
import './globals.css';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Rickipedia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <ApolloWrapper>{children}</ApolloWrapper>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
