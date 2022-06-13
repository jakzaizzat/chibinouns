import type { NextPage } from 'next'
import DefaultLayout from '../src/components/layouts/DefaultLayout'
import Drop from '../src/scenes/Drop/Drop'

const drop: NextPage = () => {
  return (
    <DefaultLayout>
      <Drop></Drop>
    </DefaultLayout>
  )
}

export default drop
