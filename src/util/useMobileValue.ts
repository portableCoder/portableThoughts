import useIsMobile from "./useIsMobile"

const useMobileValue = <V,K>(mobileValue:V,defaultValue:K) : V|K =>{
    const isMobile  = useIsMobile()
    return isMobile  ? mobileValue : defaultValue
}
export default useMobileValue