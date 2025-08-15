'use client'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { CogIcon } from '@heroicons/react/16/solid';
import { useTranslation } from 'react-i18next';
import styles from './services.module.css';

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 mt-36">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16" dir={isRTL ? 'rtl' : 'ltr'}>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            <span className="text-orange-600">{t('services.our')}</span> {t('services.title')}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Civil & Architectural Works */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8">
            <div className={`flex items-center mb-8 pb-4 border-b-2 border-orange-200 ${isRTL ? styles.rtlJustifyEnd : styles.ltrJustifyStart}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <BuildingOfficeIcon className={`h-6 w-6 text-orange-500 ${isRTL ? 'ml-4' : 'mr-4'}`} />
              <h4 className="text-lg font-bold text-gray-900">{t('services.civil.title')}</h4>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4 border-l-4 border-orange-500 pl-6">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.civil.point1')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.civil.point2')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.civil.point3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General Contracting for Buildings */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8">
            <div className={`flex items-center mb-8 pb-4 border-b-2 border-orange-200 ${isRTL ? styles.rtlJustifyEnd : styles.ltrJustifyStart}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <WrenchScrewdriverIcon className={`h-6 w-6 text-orange-500 ${isRTL ? 'ml-4' : 'mr-4'}`} />
              <h4 className="text-lg font-bold text-gray-900">{t('services.contracting.title')}</h4>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4 border-l-4 border-orange-500 pl-6">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.contracting.point1')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.contracting.point2')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.contracting.point3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Development */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 md:p-8 md:col-span-2 lg:col-span-1">
            <div className={`flex items-center mb-8 pb-4 border-b-2 border-orange-200 ${isRTL ? styles.rtlJustifyEnd : styles.ltrJustifyStart}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <CogIcon className={`h-6 w-6 text-orange-500 ${isRTL ? 'ml-4' : 'mr-4'}`} />
              <h4 className="text-lg font-bold text-gray-900">{t('services.infrastructure.title')}</h4>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4 border-l-4 border-orange-500 pl-6">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.infrastructure.point1')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.infrastructure.point2')}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {t('services.infrastructure.point3')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}