import { act, renderHook } from '@testing-library/react-hooks'
import useTheme from '../components/util/useTheme';
import useIsMobile from '../components/util/useIsMobile';
import useMobileValue from '../components/util/useMobileValue';
import useWindowSize from '../components/util/useWindowSize'


function resize(width: number, height: number) {
    const resizeEvent = document.createEvent('Event');
    resizeEvent.initEvent('resize', true, true);

    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(resizeEvent);
}
describe('tests the resize hook', () => {
    let resizeHook = renderHook(() => useWindowSize())
    beforeEach(() => {
        resizeHook = renderHook(() => useWindowSize())
    })
    it('should return the window dimensions', () => {

        const { result } = resizeHook
        expect(result.current).toStrictEqual({
            width: innerWidth,
            height: innerHeight
        })
    })
    it('should return the correct window dimensions on resize', () => {
        const { result } = resizeHook
        expect(result.current).toStrictEqual({
            width: innerWidth,
            height: innerHeight
        })
        const width = 1024, height = 1024

        act(() => {

            resize(width, height)
        })


        expect(result.current).toStrictEqual({
            width, height
        })
    })
})
describe('tests the useIsMobile hook', () => {
    let mobileHook = renderHook(() => useIsMobile())
    beforeEach(() => {
        mobileHook = renderHook(() => useIsMobile())
    })
    it('should return true', () => {
        resize(720, 1024)
        let result: any
        act(() => {
            const { result: resultObject } = mobileHook
            result = resultObject

        })
        expect(result.current).toBe(true)

    })

    it('should return false', () => {
        resize(1024, 1024)
        let result: any
        act(() => {
            const { result: resultObject } = mobileHook
            result = resultObject

        })
        expect(result.current).toBe(false)

    })
})
describe('tests the useMobileValue hook', () => {
    let useMobileValueHook = renderHook(() => useMobileValue(45, 75))
    beforeEach(() => {
        useMobileValueHook = renderHook(() => useMobileValue(45, 75))
    })
    it('should return 75', () => {
        const { result } = useMobileValueHook
        expect(result.current).toBe(75)
    })
    it('should return 45, and then return 75', () => {
        const { result } = useMobileValueHook
        act(() => {
            resize(720, 1280)
        })
        expect(result.current).toBe(45)
        act(() => {
            resize(1280, 1280)
        })
        expect(result.current).toBe(75)

    })
})

describe('tests the useTheme hook', () => {
    let useThemeHook = renderHook(() => useTheme(true))
    beforeEach(() => {
        useThemeHook = renderHook(() => useTheme(true))
    })
    it("should add dark to the body's classList and should turn the background to #111216", () => {
        const { result } = useThemeHook
        expect(document.body.classList.contains("dark")).toBe(true)
        expect(document.body.style.backgroundColor).toBe("rgb(17, 18, 22)")

    })

})