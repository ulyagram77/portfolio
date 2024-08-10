import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Portal } from '@/components/common';
import { socialIcons } from '@/constants';
import { styles } from '@/styles';

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'Escape') {
                onClose(false);
            }
        };

        if (isOpen) {
            document.body.classList.add('overflow-hidden');
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <Portal rootId="body">
            <div
                className="fixed inset-0 bg-black bg-opacity-60 z-30"
                onClick={e => {
                    if (e.target === e.currentTarget) onClose();
                }}
            >
                <div
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-1/2 md:w-3/4 lg:w-1/2 xl:w-2/5 bg-tertiary rounded-2xl z-50 p-10"
                    role="dialog"
                    aria-modal="true"
                >
                    <span
                        className="absolute top-0 right-0 mr-5 mt-5 text-5xl cursor-pointer"
                        onClick={() => onClose(false)}
                    >
                        &times;
                    </span>

                    <div className="flex flex-col justify-between items-center h-full text-center">
                        <div>
                            <p className={styles.sectionSubText}>alert</p>
                            <h2 className={styles.sectionHeadText}>
                                &#128293; Success &#128293;
                            </h2>
                        </div>

                        <p className="text-secondary text-[16px] sm:text-lg">
                            Thank you for your interest in my activities, I will try
                            to reply you as soon as possible. You can also find me in
                            <b> social media </b> below.
                        </p>

                        <p>
                            <b className="text-md sm:text-lg">
                                Have a nice and productive day ! &#128526;
                            </b>
                        </p>

                        <div className="flex flex-row items-center gap-5 social cursor-pointer">
                            {socialIcons.map(social => (
                                <div
                                    key={social.link}
                                    className="w-10 h-10 social__icon"
                                    onClick={() =>
                                        window.open(social.link, '_blank')
                                    }
                                >
                                    <img
                                        src={social.icon}
                                        className="object-contain"
                                        alt="social icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
