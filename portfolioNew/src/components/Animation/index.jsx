import { LazyMotion, domMax } from 'framer-motion';

const Animation = ({ children }) => {
    return (  
        <LazyMotion features={domMax}>{children}</LazyMotion>
    );
}
 
export default Animation;