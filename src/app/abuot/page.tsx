

'use client';
import Image from 'next/image';
import { ShieldCheckIcon, LightBulbIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footar from '../components/footar';
import { useTranslation } from 'react-i18next';








export default function About (){  
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

 

    return(
        <>
      <Navbar />

       <section className='bg-white py-12 px-4 mt-36' >
        <div className=' container m-auto text-black'>
          <div className='flex flex-col-reverse justify-around gap-4 md:flex-row'>
            <div className='w-fit p-2 md:w-1/2 md:mt-36'>
              <h1 className='text-3xl font-bold mb-3 '><span className='text-orange-500'>{isRTL ? '' : 'Our'}</span> {t('about.mission.title')}</h1>
              <p className='text-sm md:text-base md:m-0 m-1' style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('about.mission.description')}</p>
            </div>
            <div className='w-fit p-2 md:w-1/3'>
                <Image
                                      src="/images/hedar.png"
                                      alt="logo"
                                      width={500}
                                      height={500}
                                      priority
                                  
                                      />
            </div>
          </div>
        </div>
        
       </section>

<section className="bg-white py-10 md:mt-44">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold mb-5 text-center "><span className='text-orange-500'>{isRTL ? '' : 'Our'}</span> {t('about.values.title')}</h1>
    <p className="text-center text-gray-600 mb-14 text-sm md:text-base mx-auto md:w-1/2 w-full" style={{ textAlign: isRTL ? 'right' : 'left' }}>
  {t('about.values.description')}
</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
      {/* Integrity */}
      <div className="flex items-start gap-4 p-4 bg-white shadow rounded-md max-w-md w-full">
        <ShieldCheckIcon className="w-6 h-6 text-indigo-600 mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-indigo-700 mb-1">{t('about.values.integrity.title')}</h2>
          <p className="text-gray-700 text-sm" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('about.values.integrity.description')}
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="flex items-start gap-4 p-4 bg-white shadow rounded-md max-w-md w-full">
        <LightBulbIcon className="w-6 h-6 text-yellow-500 mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-yellow-600 mb-1">{t('about.values.innovation.title')}</h2>
          <p className="text-gray-700 text-sm" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('about.values.innovation.description')}
          </p>
        </div>
      </div>

      {/* Quality */}
      <div className="flex items-start gap-4 p-4 bg-white shadow rounded-md max-w-md w-full">
        <StarIcon className="w-6 h-6 text-purple-600 mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-purple-700 mb-1">{t('about.values.quality.title')}</h2>
          <p className="text-gray-700 text-sm" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('about.values.quality.description')}
          </p>
        </div>
      </div>

      {/* Sustainability */}
      <div className="flex items-start gap-4 p-4 bg-white shadow rounded-md max-w-md w-full">
        <SparklesIcon className="w-6 h-6 text-green-500 mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-green-600 mb-1">{t('about.values.sustainability.title')}</h2>
          <p className="text-gray-700 text-sm" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('about.values.sustainability.description')}
          </p>
        </div>
      </div>

      {/* Collaboration */}
      <div className="flex items-start gap-4 p-4 bg-white shadow rounded-md max-w-md w-full">
        <UsersIcon className="w-6 h-6 text-pink-500 mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-pink-600 mb-1">{t('about.values.collaboration.title')}</h2>
          <p className="text-gray-700 text-sm" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {t('about.values.collaboration.description')}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white  mt-20 mb-8 py-12">
  <div className="container mx-auto px-4 max-w-3xl text-center">
    <h2 className="text-2xl font-bold  mb-4"><span className='text-orange-500'>{isRTL ? '' : 'Our'}</span> {t('about.vision.title')}</h2>
    <p className="text-gray-700 leading-relaxed text-sm md:text-base text-center p-2 m-1" style={{ textAlign: isRTL ? 'right' : 'left' }}>
      {t('about.vision.description')}
    </p>
  </div>
</section>


<Footar />








        </>
    )
}