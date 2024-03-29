import React from 'react';
import { useSpring, animated } from 'react-spring'
import { IntersectionOptions, useInView } from 'react-intersection-observer';
interface Intersectable {
    intersectionOptions: IntersectionOptions;

}
type AnimateOnViewProps = {
    inViewStyle: any, exitViewStyle: any,
    children: JSX.Element | JSX.Element[],
    className: string
} & Intersectable
export type { AnimateOnViewProps, Intersectable }
const AnimateOnView = ({ inViewStyle, exitViewStyle, children, className, intersectionOptions }: Partial<AnimateOnViewProps>) => {

    const { ref, inView, entry } = useInView(intersectionOptions ? intersectionOptions : {
        threshold: 0
    });
    const spring = useSpring(inView ? inViewStyle : exitViewStyle)


    return <animated.div className={className} style={spring} ref={ref}>{children}</animated.div>;
};

export default AnimateOnView;
