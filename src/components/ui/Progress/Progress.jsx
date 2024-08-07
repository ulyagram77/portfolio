import { Portal } from '@/components/common';
import { useEffect, useRef } from 'react';
import './Progress.css';

const Progress = () => {
    const progressRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, clientHeight } = document.documentElement;

            const totalScroll = scrollHeight - clientHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / totalScroll) * 100;

            if (progressRef.current) {
                progressRef.current.style.width = `${scrollPercentage}%`;

                if (scrollPercentage === 100) {
                    progressRef.current.classList.add('done');
                    progressRef.current.innerHTML =
                        '<p>Thanks for your interest buddy &#x2764;&#xFE0F;</p>';
                } else {
                    progressRef.current.classList.remove('done');
                    progressRef.current.innerHTML = '';
                }
            }
        };

        const optimizedHandleScroll = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', optimizedHandleScroll);
        window.addEventListener('touchmove', optimizedHandleScroll);
        return () => {
            window.removeEventListener('scroll', optimizedHandleScroll);
            window.removeEventListener('touchmove', optimizedHandleScroll);
        };
    }, []);

    return (
        <Portal rootId="root">
            <div className="scroll-progress" ref={progressRef}></div>
        </Portal>
    );
};

export default Progress;
