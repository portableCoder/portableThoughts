import * as React from "react"
import dynamic from 'next/dynamic'

const NotFoundComponent = dynamic(() => import("../components/NotFoundComponent"), {
  suspense: false,
  ssr: false
})

import isBrowser from "../components/util/isBrowser"
const NotFoundPage = () => {



  return (
    <>
      {
        isBrowser() &&
        <NotFoundComponent />
      }
    </>
  )
}
export default NotFoundPage
