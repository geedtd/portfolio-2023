import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <button
        className={`scroll-to-top ${isVisible ? 'show' : ''}` }
        onClick={scrollToTop}
        >
        Scroll to Top
        </button>
    );
};

export default ScrollToTopButton;