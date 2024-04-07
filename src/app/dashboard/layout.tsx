import type { PropsWithChildren } from 'react'

import { HeaderLayout } from '@/components/pages/dashboard/HeaderLayout'
import { FacebookIcon } from '@/components/ui/icons/FacebookIcon'
import { InstagramIcon } from '@/components/ui/icons/InstagramIcon'
import { Logo } from '@/components/ui/icons/Logo'
import { YoutubeIcon } from '@/components/ui/icons/YoutubeIcon'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      // eslint-disable-next-line tailwindcss/classnames-order
      className="bg-primaryLight text-fs-14-fw-400-lh-1.28 text-primaryDark
        tablet:text-fs-16-fw-400 dark:bg-primaryDark dark:text-primaryLight">
      <HeaderLayout />
      {children}
      <div className="container bg-primaryDark pb-[18px] pt-10 text-primaryLight">
        <div>
          <div className="mb-5 flex items-center gap-[14px]">
            <Logo />
            <h3 className="text-fs-16-fw-600">Drink Master</h3>
          </div>
          <ul className="flex gap-[14px]">
            <li className="rounded-[10px] border border-primaryLight/20 p-2">
              <FacebookIcon />
            </li>
            <li className="rounded-[10px] border border-primaryLight/20 p-2">
              <InstagramIcon />
            </li>
            <li className="rounded-[10px] border border-primaryLight/20 p-2">
              <YoutubeIcon />
            </li>
          </ul>
        </div>
        <ul className="space-y-[14px] text-fs-14-fw-500-lh-1.6">
          <li>Drinks</li>
          <li>Add drink</li>
          <li>My drinks</li>
          <li>Favorites drinks</li>
        </ul>
        <p className="text-fs-14-fw-400-lh-1.42">
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </div>
    </div>
  )
}

export default DashboardLayout
