'use client'
import Image from "next/image" ;
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const { t } = useTranslation();
  
  return [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.about'), href: '/abuot' },
    { name: t('navbar.projects'), href: '/products' },
    { name: t('navbar.contact'), href: '/contact' },
  ];
}

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname()
  const navigation = Navigation()

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
               <Image
                                       src="/images/logo.png"
                                       alt="logo"
                                       width={500}
                                       height={500}
                                       priority
                                       className="rounded-full"
                                   
                                       />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Al Bayan </span>
            </Link>
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {/* Language Switcher */}
              <LanguageSwitcher />
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isActive
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className={classNames(
                  isActive
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </DisclosureButton>
            )
          })}
          {/* Language Switcher in mobile menu */}
          <div className="mt-4 px-2">
            <LanguageSwitcher />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}