'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
      <h1 className="text-4xl font-bold mb-4">{t('notFound.title', '404 - Page Not Found')}</h1>
      <p className="mb-6">{t('notFound.message', 'The page you are looking for does not exist or has been moved.')}</p>
      <Link href="/" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
        {t('notFound.backHome', 'Back to Home')}
      </Link>
    </div>
  );
}