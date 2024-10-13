import { m, AnimatePresence } from "framer-motion";
import Animation from "../Animation";
import styles from "./Modal.module.css";

function Modal({ children, show, onCloseModal }) {
    function closeModal(e) {
        e.stopPropagation();
        if (e.target.id === "modal-backdrop") {
            onCloseModal();
        }
    }

    return (
        <Animation>
            <AnimatePresence>
                {show && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <section
                            id="modal-backdrop"
                            onClick={closeModal}
                            className={styles.modalBackdrop}
                        >
                            <div className={`${styles.modalContainer}`}>
                                {children}
                            </div>
                        </section>
                    </m.div>
                )}
            </AnimatePresence>
        </Animation>
    );
}

export default Modal;
