"use client";
import { useState } from "react";
import Image from "next/image";
import Footar from "../components/footar";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    name: "Hoarding Works ",
    description: [
      "   Execution and design of site barricades (hoarding) with high quality, including  .",
    ],
    images: [
      "/images/ho 1.jpg",
      "/images/ho 2.jpg",
      "/images/ho 3.jpg",
      "/images/ho 4.jpg",
      "/images/ho 5.jpg",
      "/images/ho 6.jpg"
    ],
  },
  {
    id: 2,
    name: " HVAC works",
    description: [
      "Supplying, installing, and maintaining air conditioning systems to ensure a comfortable and safe environment",
     
    ],
    images: [
    "/images/t 2.jpg",
      "/images/t1.jpg",
      "/images/t3.jpg",
      "/images/t4.jpg",
      "/images/t5.jpg",
      "/images/t6.jpg"
    ],
  },
  {
    id: 3,
    name: " Infrastructure & Sanitation Projects",
    description: [
      "    Building sustainable foundations and clean environments for thriving communities.",
     
    ],
    images: [
      "/images/financial1.jpg",
      "/images/financial2.jpg",
      "/images/financial3.jpg",
      "/images/financial4.jpg",
      "/images/financial5.jpg",
      "/images/financial6.jpg"
    ],
  },
  {
    id: 4,
    name: " Financial Center Project",
    description: [
      "King Abdullah Financial District: A global investment destination in the heart of Riyadh, blending cutting-edge architecture with smart infrastructure to drive Saudi economic growth",
      
    ],
    images: [
      "/images/pr1.jpg",
      "/images/pr2.jpg",
      "/images/pr3.jpg",
      "/images/pr4.jpg",
      "/images/pr5.jpg",
      "/images/pr6.jpg"
    ],
  },
  {
    id: 5,
    name: " Architectural and Civil Works",
    description: [
      "Where architectural creativity meets civil excellence — shaping spaces with purpose and precision",
      
    ],
    images: [
      "/images/m1.jpeg",
      "/images/m2.jpeg",
      "/images/m3.jpeg",
      "/images/m4.jpeg",
      "/images/m5.jpeg",
      "/images/m6.jpeg"
    ],
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(0);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center bg-white font-sans" dir={isRTL ? "rtl" : "ltr"}>
      <h1 className="text-3xl font-bold my-8 text-black"> <span className=" text-orange-600">{isRTL ? "" : "Our"}</span> {t('projects.title')}</h1>
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      
        {/* تفاصيل المشروع */}
        <main className="flex-1 p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">{isRTL ? t(`projects.projects.${selected}.name`) : projects[selected].name}</h2>
          <div className="mb-6 space-y-2 w-full max-w-2xl">
            {projects[selected].description.map((line, i) => (
              <p key={i} className="text-gray-700 text-lg" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                {isRTL ? t(`projects.projects.${selected}.description`) : line}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {projects[selected].images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={isRTL ? t(`projects.projects.${selected}.name`) + " صورة " + (i + 1) : projects[selected].name + " image " + (i + 1)}
                width={700}
                height={700}
                className="rounded-lg shadow-md w-full h-40 object-contain bg-white border"
                priority={i === 0}
              />
            ))}
          </div>
        </main>

          {/* قائمة المشاريع */}
        <aside className={`md:w-1/4 w-full t bg-blue-50 ${isRTL ? 'border-r' : 'border-l'} border-gray-200 p-4 flex md:flex-col flex-row md:space-y-2 ${isRTL ? 'space-x-reverse' : 'space-x-2'} md:space-x-0 overflow-x-auto md:overflow-x-visible`}>
          {projects.map((project, idx) => (
            <button
              key={project.id}
              className={`flex-1 md:flex-none md:w-full px-4 cursor-pointer py-2 rounded-lg text-left transition font-semibold text-blue-900 hover:bg-white focus:bg-white ${selected === idx ? "bg-blue-200 border-x-4 border-orange-700" : ""}`}
              onClick={() => setSelected(idx)}
            >
              {isRTL ? t(`projects.projects.${idx}.name`) : project.name}
            </button>
          ))}
        </aside>
      </div>
    </div>

    <Footar />
    
    
    </>
  );
}