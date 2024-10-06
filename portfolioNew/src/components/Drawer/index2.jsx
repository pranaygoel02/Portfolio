import React, {
    Children,
    cloneElement,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { AnimatePresence, m } from "framer-motion";
import styles from "./Drawer.module.css";
import classNames from "classnames";
import Animation from "../Animation";
import Portal from "../Portal";

const animationProps = {
    initial: { y: "110%", opacity: 0 },
    exit: { y: "110%", opacity: 0 },
    transition: { ease: "linear", duration: 0 },
};

const Drawer = forwardRef(
    (
        {
            children,
            onDrag,
            as = "div",
            onDragEnd,
            showDrawer = true,
            toggleShowDrawer = () => {},
            snapPoints = [50, 75],
            onDragSnap = () => {},
            defaultStyle = false,
            showHandle = true,
            className,
            containerRef = null,
            withOverlay = true,
            ...props
        },
        forwardedRef
    ) => {
        const [containerHeight, setContainerHeight] = useState(null);
        const [snapPoint, setSnapPoint] = useState(null);
        const [drawerRef, setDrawerRef] = useState(null);

        useEffect(() => {
            setContainerHeight(
                containerRef?.current?.getBoundingClientRect()?.height ||
                    window?.innerHeight
            );
            return () => {
                updatedSnapPoint = null;
            };
        }, []);

        useEffect(() => {
            if (!containerRef?.current && typeof document !== "undefined") {
                document.body.style.overflowY = showDrawer
                    ? "hidden"
                    : "visible";
            }

            if (containerRef?.current) {
                containerRef.current.style.overflowY = showDrawer
                    ? "hidden"
                    : "visible";
            }
        }, [showDrawer, containerRef]);

        const snapPointsInPx = useMemo(() => {
            return snapPoints?.map(
                (snapPoint) => ((100 - snapPoint) / 100) * containerHeight
            );
        }, [snapPoints, containerHeight]);

        useEffect(() => {
            onDragSnap(snapPoint);
        }, [snapPoint]);

        const maxSnapPoint = useMemo(
            () => Math.max(...snapPointsInPx),
            [snapPointsInPx]
        );

        const minSnapPoint = useMemo(
            () => Math.min(...snapPointsInPx),
            [containerHeight, maxSnapPoint]
        );

        useEffect(() => {
            if (drawerRef)
                drawerRef.style.height = `${containerHeight - minSnapPoint}px`;
        }, [maxSnapPoint, drawerRef, containerHeight, minSnapPoint]);

        useEffect(() => {
            setSnapPoint(minSnapPoint);
        }, [minSnapPoint]);

        const Motion = m[as];

        let updatedSnapPoint = null;

        const getClosestSnapPoint = (newSnapPoint) => {
            const closestSnapPoint = snapPointsInPx?.reduce((acc, curr) => {
                const diff = Math.abs(curr - newSnapPoint);
                acc = { ...acc, [curr]: diff };
                return acc;
            }, {});
            const value = Math.min(...Object.values(closestSnapPoint));
            const key = Object.keys(closestSnapPoint).filter(
                (key) => closestSnapPoint[key] === value
            );
            updatedSnapPoint = +key;
            return updatedSnapPoint;
        };

        const handleDragEnd = (e, info) => {
            const newSnapPoint = snapPoint + info.offset.y;
            if (newSnapPoint > maxSnapPoint) {
                toggleShowDrawer(false);
            }
            setSnapPoint((prev) => {
                return getClosestSnapPoint(newSnapPoint);
            });
        };

        const handleDragTransitionEnd = () => {
            drawerRef.style.transform = `translateX(0) translateY(${
                updatedSnapPoint - minSnapPoint
            }px) translateZ(0)`;
        };

        useEffect(() => {
            if (drawerRef && forwardedRef) forwardedRef.current = drawerRef;
        }, [drawerRef, forwardedRef]);

        return (
            <Animation>
                <AnimatePresence>
                    {showDrawer && (
                        <>
                            {withOverlay && <DrawerOverlay />}
                            <m.section
                                drag="y"
                                dragElastic={false}
                                dragMomentum={false}
                                dragConstraints={{
                                    top: 0,
                                    bottom: maxSnapPoint - minSnapPoint,
                                }}
                                onDragEnd={handleDragEnd}
                                onDragTransitionEnd={handleDragTransitionEnd}
                                ref={setDrawerRef}
                                transition={{ duration: 0, ease: "linear" }}
                                {...{
                                    ...animationProps,
                                    animate: {
                                        y: snapPoint - minSnapPoint,
                                        opacity: 1,
                                    },
                                }}
                                className={classNames({
                                    [styles.drawer]: true,
                                    [styles.drawerDefaultStyle]: defaultStyle,
                                    [className]: !!className,
                                })}
                                {...props}
                            >
                                {showHandle && (
                                    <div className={styles.handle} />
                                )}
                                {Children.count(children) === 1
                                    ? cloneElement(children, {
                                          "data-drawerHandleShown": showHandle,
                                      })
                                    : children}
                            </m.section>
                        </>
                    )}
                </AnimatePresence>
            </Animation>
        );
    }
);

const DrawerWithPortal = forwardRef(
    ({ children, containerRef, ...props }, drawerRef) => {
        return (
            <Portal containerRef={containerRef}>
                <Drawer ref={drawerRef} {...{ ...props, containerRef }}>
                    {children}
                </Drawer>
            </Portal>
        );
    }
);

DrawerWithPortal.displayName = "DrawerWithPortal";

const DrawerOverlay = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.overlay}
        >
            {children}
        </m.div>
    );
};

export default Drawer;
Drawer.displayName = "Drawer";

export { DrawerWithPortal };

Drawer.Overlay = DrawerOverlay;
