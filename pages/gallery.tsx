import type { NextPage } from 'next'
import DefaultLayout from '../src/components/layouts/DefaultLayout'
import Gallery from '../src/scenes/Gallery/Gallery'

const gallery: NextPage = () => {
  return (
    <DefaultLayout>
      <Gallery></Gallery>
    </DefaultLayout>
  )
}

export default gallery
