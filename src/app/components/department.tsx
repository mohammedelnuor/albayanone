'use client';
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import styles from './department.module.css';

export default function Department() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const services = [
    {
      title: t('department.surveying.title'),
      description: t('department.surveying.description')
    },
    {
      title: t('department.concrete.title'),
      description: t('department.concrete.description')
    }
  ];

  const images = [
    { src: "/images/di2.jpg", alt: t('department.images.alt1') },
    { src: "/images/d2.jpg", alt: t('department.images.alt2') },
    { src: "/images/d3.jpg", alt: t('department.images.alt3') }
  ];
  return (
    <section className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 max-w-6xl mx-auto mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* Services Content */}
          <div className="flex-1 space-y-4 lg:space-y-6">
            {services.map((service, index) => (
              <div key={index} className="p-3 md:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <h5 className={`text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 md:mt-10 ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
                  {service.title}
                </h5>
                <p className={`text-sm md:text-base text-gray-600 leading-relaxed ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Images Section */}
          <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {images.slice(0, 2).map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg h-64 md:h-80 lg:h-96">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={400}
                    priority
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-3 md:mt-4 relative overflow-hidden rounded-lg shadow-lg h-80 md:h-96 lg:h-[28rem]">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={400}
                height={500}
                priority
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}