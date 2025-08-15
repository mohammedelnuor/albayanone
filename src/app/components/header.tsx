'use client';
import Image from "next/image" ;
import Link from "next/link";
import { useTranslation } from "react-i18next";




export default function Header(){
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    return(
        <>
        <header className="mt-24 md:mt-44">
            <div className=" container  m-auto">

                <div className=" "> 

                    <section className="flex flex-col-reverse justify-center items-center  m-auto md:justify-around gap-3 md:flex-row ">
                    <div className="w-fit md:w-1/2 text-start p-4 md:p-6" dir={isRTL ? 'rtl' : 'ltr'}>
                        <h1 className={`uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-cyan-950 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('header.title')} <span className="text-orange-500">{t('header.subtitle')}</span>
                        </h1>
                        <p className={`text-black leading-relaxed mb-6 text-sm md:text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('header.description')}
                        </p>

                        <button className="bg-orange-500 text-white rounded-full cursor-pointer hover:bg-amber-700 hover:text-amber-100 transition duration-[700ms]  w-40 h-11 font-bold"><Link  href={"/products"} >{t('header.projects_button')}</Link></button>
                    </div>


                     <div className="w-fit p-2 md:m-2 md:w-1/3 mb-14 m-auto md:mb-0 ">
                        <Image
                        src="/images/h1-removebg-preview.png"
                        alt="logo"
                        width={500}
                        height={500}
                        priority
                    
                        />

                    </div>
                    </section>

                   
                </div>

            </div>
            

        </header>


        

        </>
    )
}