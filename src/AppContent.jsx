import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/common';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
} from './components/sections';
import { Progress } from './components/ui';

const AppContent = () => {
    return (
        <BrowserRouter>
            <Progress />
            <main className="relative z-0 bg-primary">
                <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary>
                        <Hero />
                    </ErrorBoundary>
                </section>

                <About />
                <Experience />
                <ErrorBoundary>
                    <Tech />
                </ErrorBoundary>
                <Works />

                <section className="relative z-0">
                    <ErrorBoundary>
                        <Contact />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <StarsCanvas />
                    </ErrorBoundary>
                </section>
            </main>
        </BrowserRouter>
    );
};

export default AppContent;
