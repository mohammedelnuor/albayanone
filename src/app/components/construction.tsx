'use client';
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Construction() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <main className="min-h-screen  flex flex-col items-center py-0 px-0 mt-36 mb-10">
      <div className="w-full   rounded-none md:rounded-2xl p-0 md:p-12 space-y-10 min-h-screen">
        {/* Header */}
        <header className="  ">
          <div className="flex flex-col md:w-1/2 text-center items-center m-auto p-3 md:p-0" dir={isRTL ? 'rtl' : 'ltr'}>
            <h1 className="text-2xl font-extrabold tracking-tight mb-2">
              {t('construction.title')}{" "}
              <span className="text-orange-500">{t('construction.subtitle')} </span>{t('construction.services')}
            </h1>
            <p className="text-gray-600 mt-2" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              {t('construction.description')}
            </p>
          </div>
        </header>

        {/* Services Sections */}
        <section className="grid md:grid-cols-3 gap-8 px-4 md:px-12 py-10">
          {/* Civil and Architectural Works */}
          <div className="bg-white rounded-xl p-6 flex flex-col h-full shadow-md" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="flex items-center text-lg font-bold text-black mb-3" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
              {t('construction.civil.title')}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 flex-1" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <li>{t('construction.civil.point1')}</li>
              <li>{t('construction.civil.point2')}</li>
              <li>{t('construction.civil.point3')}</li>
              <li>{t('construction.civil.point4')}</li>
              <li>{t('construction.civil.point5')}</li>
            </ul>
          </div>
          {/* Site Surveying and Plan Execution */}
          <div className="bg-white rounded-xl p-6 flex flex-col h-full shadow-md" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="flex items-center text-lg font-bold text-black mb-3" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
              {t('construction.surveying.title')}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 flex-1" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <li>{t('construction.surveying.point1')}</li>
              <li>{t('construction.surveying.point2')}</li>
              <li>{t('construction.surveying.point3')}</li>
              <li>{t('construction.surveying.point4')}</li>
              <li>{t('construction.surveying.point5')}</li>
              <li>{t('construction.surveying.point6')}</li>
            </ul>
          </div>
          {/* Concrete Execution */}
          <div className="bg-white rounded-xl p-6 flex flex-col h-full shadow-md" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="flex items-center text-lg font-bold text-black mb-3" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
              {t('construction.concrete.title')}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 flex-1" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <li>{t('construction.concrete.point1')}</li>
              <li>{t('construction.concrete.point2')}</li>
            </ul>
          </div>
        </section>

        {/* Distinguishing Strengths */}
        <section className="flex justify-around flex-col-reverse md:flex-row  w-full mt-36">
          <div className=" rounded-xl p-6 w-full max-w-xl" dir={isRTL ? 'rtl' : 'ltr'}>
            <h2 className="flex items-center text-lg font-bold text-black mb-3 pl-6" style={{ justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
              {t('construction.strengths.title')}
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-800 pl-2 md:pl-6" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <li>{t('construction.strengths.point1')}</li>
              <li>{t('construction.strengths.point2')}</li>
              <li>{t('construction.strengths.point3')}</li>
              <li>{t('construction.strengths.point4')}</li>
              <li>{t('construction.strengths.point5')}</li>
              <li>{t('construction.strengths.point6')}</li>
            </ol>
          </div>

          <div className="w-fit p-2 md:-mt-6 md:m-2 md:w-1/3 mb-14 m-auto md:mb-0 ">
            <Image
              src="/images/Distinguishing.png"
              alt={t('construction.strengths.image_alt')}
              width={600}
              height={600}
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
};