import TranslatedExample from '@/components/examples/TranslatedExample';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multilingual Demo - NextSaaS',
  description: 'Demonstration of English and Arabic language support with RTL/LTR switching',
};

export default function TranslationDemoPage() {
  return (
    <div>
      <NavbarOne />
      <main className="pt-20">
        <TranslatedExample />
      </main>
      <FooterOne />
    </div>
  );
}
