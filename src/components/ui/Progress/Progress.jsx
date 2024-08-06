import { Portal } from 'src/components/waiters';
import './Progress.css';
import { useEffect, useRef } from 'react';

const Progress = () => {
    const progressRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollPosition = window.scrollY;
            const scrollPercentage = (scrollPosition / totalScroll) * 100;

            progressRef.current.style.width = `${scrollPercentage}%`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Portal rootId="root">
            <div className="scroll-progress" ref={progressRef}></div>
        </Portal>
    );
};

export default Progress;
