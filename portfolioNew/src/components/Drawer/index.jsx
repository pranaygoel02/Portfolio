import { useCallback, useEffect, useMemo, useRef } from "react";
import { m, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import useDimensions from "../../hooks/useDimensions";
import Portal from "../Portal";
import Animation from "../Animation";
import './Drawer.css';

Array.prototype.findClosestPoint = function (key) {
    let low = 0;
    if (key < this[low]) return this[0];
    let high = this.length - 1;
    if (key > this[high]) return this[high];
    let mid;

    while (high - low > 1) {
        mid = Math.floor((low + high) / 2);
        if (this[mid] === key) return this[mid];
        if (key < this[mid]) high = mid;
        else low = mid;
    }
    const diff1 = Math.abs(this[low] - key), diff2 = Math.abs(this[high] - key);
    return diff1 > diff2 ? this[high] : this[low];
};

function Drawer({ children, showDrawer = false, toggleShowDrawer, snapPoints = [0, 50, 80], initialSnapPoint = 50, background='bg-dark', maxDragOffset=250 }) {

    const [wrapperRef, dimensions] = useDimensions();
    const contentRef = useRef(null);
    const snapPoint = useMotionValue(initialSnapPoint);

    const snapPointsInPx = useMemo(() => snapPoints.map(v => Number((v / 100 * dimensions?.height).toFixed(0))), [dimensions?.height, snapPoints]);

    useEffect(() => {
        if (showDrawer) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            snapPoint.set(initialSnapPoint);
            document.body.style.overflow = 'auto';
        }
    }, [showDrawer]);

    const handleDragStart = () => {
        if (contentRef?.current) contentRef.current.style.overflow = 'visible';
    }

    const handleDragEnd = useCallback((e, info) => {
        const { offset } = info;
        if (offset.y > maxDragOffset) {
            snapPoint.set(dimensions.height + 10);

            setTimeout(() => {
                toggleShowDrawer?.();
            }, 300);

            return;
        };
        
        const prevSnapPoint = snapPoint.getPrevious();
        let newSnapPoint = prevSnapPoint + offset.y;
        const closestSnapPoint = snapPointsInPx.findClosestPoint(newSnapPoint);
        snapPoint.set(closestSnapPoint);

        if (contentRef?.current) contentRef.current.style.overflow = 'auto';
    }, [dimensions?.height, initialSnapPoint, snapPoint, snapPointsInPx, toggleShowDrawer, maxDragOffset]);

    const drawerHeight = useTransform(snapPoint, [0, dimensions?.height], [dimensions?.height, 0]);

    return (
        <Portal>
            <Animation>
                <AnimatePresence>
                    {showDrawer && (
                        <m.div
                            key='drawer'
                            ref={wrapperRef}
                            className="fixed inset-0 z-[100] w-full h-full bg-black bg-opacity-50 backdrop-blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <m.main
                                className={`h-full w-full rounded-t-xl transition-all ${background}`}
                                drag="y"
                                dragMomentum={false}
                                dragElastic={0}
                                dragConstraints={{
                                    top: 0,
                                    bottom: dimensions?.height - 100,
                                }}
                                style={{ y: snapPoint }}
                                exit={{
                                    y: dimensions?.height + 10
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                                onAnimationComplete={() => {
                                    if (!showDrawer) {
                                        toggleShowDrawer?.();
                                    }
                                }}
                            >
                                <header className="p-2">
                                    <div className='handle bg-gray-500'></div>
                                </header>
                                <m.div ref={contentRef} style={{ height: drawerHeight }} className="overflow-auto">
                                    {children}
                                </m.div>
                            </m.main>
                        </m.div>
                    )}
                </AnimatePresence>
            </Animation>
        </Portal>
    );
}

export default Drawer;
