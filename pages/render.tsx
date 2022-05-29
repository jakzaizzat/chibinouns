import type { NextPage } from 'next'
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const RenderPage: NextPage = () => {
  return (
    <Spline scene="https://prod.spline.design/V0NpoRIXfTWg2CmU/scene.splinecode" />
  )
}

export default RenderPage
