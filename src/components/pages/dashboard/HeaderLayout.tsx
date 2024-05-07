import Image from 'next/image'

import { BurgerIcon } from '@components/ui/icons/BurgerIcon'

import { userService } from '@services'

import { HeaderThemeSwitcher } from './header/HeaderThemeSwitcher'

export const HeaderLayout = async () => {
  const user = await userService.getUserProfile()

  return (
    <div className="container flex justify-between border-b border-secondaryDark/10 py-5">
      <div className="flex items-center gap-2 tablet:gap-[14px]">
        <Image
          src='/logo.svg'
          alt='Logo icon'
          className="tablet:size-7"
          width={22}
          height={22}
        />
        <p className="text-fs-16-fw-600 tablet:text-fs-18-600">Drink Master</p>
      </div>
      <div className="flex items-center gap-[14px]">
        <HeaderThemeSwitcher />
        <div className="flex items-center gap-2">
          <Image
            src={user?.avatarURL}
            alt='Avatar Image'
            className="tablet:size-11"
            width={32}
            height={32}
          />
          <p className="text-fs-14-fw-500-lh-1.28 text-primaryDark tablet:text-fs-16-fw-500-lh-normal">
            {user?.name}
          </p>
        </div>
        <button type='button'>
          <BurgerIcon />
        </button>
      </div>
    </div>
  )
}
