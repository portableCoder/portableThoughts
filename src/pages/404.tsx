import * as React from "react"

import loadable from '@loadable/component'
import isBrowser from "util/isBrowser"
const Loadable404 = loadable(/* #__LOADABLE__ */ ()=>import('components/NotFoundComponent'))

const NotFoundPage = () => {
 


  return (
    <>
      {
        isBrowser() &&
    <Loadable404/>
    }
</>
  )
}
export default NotFoundPage
