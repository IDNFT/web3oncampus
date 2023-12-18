export const metadata = {
  title: 'Web3 on Campus',
  description: 'a roadshow program aimed at socializing and educating students in 15 major universities in Indonesia.',
}

import HeroWeb3Campus from '@/components/hero'
import GalleryWeb3Campus from '@/components/gallery'


export default function Web3Campus() {
  return (
    <>
      <HeroWeb3Campus />
      <GalleryWeb3Campus />
    </>
  )
}
