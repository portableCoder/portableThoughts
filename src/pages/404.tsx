import * as React from "react"

import loadable from '@loadable/component'
const Loadable404 = loadable(/* #__LOADABLE__ */ ()=>import('components/NotFoundComponent'))

const NotFoundPage = () => {
 


  return (
    <>
    
    <Loadable404/>
    </>
  )
}
export default NotFoundPage
