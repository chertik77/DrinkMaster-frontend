'use client'

import type { PropsWithChildren } from 'react'

import { Select, SelectItem } from '@nextui-org/react'

import { animals } from '@/components/pages/dashboard/HeaderLayout'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Select>
        {animals.map(animal => (
          <SelectItem
            classNames={{
              base: 'text-primaryLight'
            }}
            key={animal.value}
            value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
    // // eslint-disable-next-line tailwindcss/classnames-order
    // className="bg-primaryLight text-fs-14-fw-400-lh-1.28 text-primaryDark
    //   tablet:text-fs-16-fw-400 dark:bg-primaryDark dark:text-primaryLight">
    // <HeaderLayout />
    // {children}
    // <div className="container bg-primaryDark pb-[18px] pt-10 text-primaryLight">
    //   <div>
    //     <div className="mb-5 flex items-center gap-[14px]">
    //       <Logo />
    //       <h3 className="text-fs-16-fw-600">Drink Master</h3>
    //     </div>
    //     <ul className="flex gap-[14px]">
    //       <li className="rounded-[10px] border border-primaryLight/20 p-2">
    //         <FacebookIcon />
    //       </li>
    //       <li className="rounded-[10px] border border-primaryLight/20 p-2">
    //         <InstagramIcon />
    //       </li>
    //       <li className="rounded-[10px] border border-primaryLight/20 p-2">
    //         <YoutubeIcon />
    //       </li>
    //     </ul>
    //   </div>
    //   <ul className="space-y-[14px] text-fs-14-fw-500-lh-1.6">
    //     <li>Drinks</li>
    //     <li>Add drink</li>
    //     <li>My drinks</li>
    //     <li>Favorites drinks</li>
    //   </ul>
    //   <p className="text-fs-14-fw-400-lh-1.42">
    //     Subscribe up to our newsletter. Be in touch with latest news and
    //     special offers, etc.
    //   </p>
    // </div>
  )
}

export default DashboardLayout
