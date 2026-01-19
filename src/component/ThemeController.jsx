import { useEffect } from 'react';

const ThemeController = () => {
    useEffect(() => {
        // Get saved theme from localStorage or detect system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let initialTheme = 'light';
        if (savedTheme) {
            initialTheme = savedTheme;
        } else if (systemPrefersDark) {
            initialTheme = 'dark';
        }

        // Apply initial theme
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Set up theme toggle checkbox
        const themeToggle = document.getElementById('theme-toggle');
        // Set up sun and moon icons
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        if (themeToggle) {
            themeToggle.checked = initialTheme === 'dark';
        }

        // Update icon visibility based on theme
        const updateIcons = (isDark) => {
            if (sunIcon && moonIcon) {
                if (isDark) {
                    sunIcon.style.opacity = '1';
                    sunIcon.style.visibility = 'visible';
                    moonIcon.style.opacity = '0';
                    moonIcon.style.visibility = 'hidden';
                } else {


                    sunIcon.style.opacity = '0';
                    sunIcon.style.visibility = 'hidden';
                    moonIcon.style.opacity = '1';
                    moonIcon.style.visibility = 'visible ';
                }
            }
        };

        // Initialize icon visibility
        updateIcons(initialTheme === 'dark');

        // Define handleScroll function here so it's accessible in cleanup
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 10) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };

        // Navbar shadow on scroll
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', handleScroll);

            // Initial check
            handleScroll();
        }

        // Handle theme change events for checkbox
        const handleThemeChange = (e) => {
            const isChecked = e.target.checked;
            const selectedTheme = isChecked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);

            // Update icon visibility
            updateIcons(isChecked);
        };

        // Add event listener to theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('change', handleThemeChange);
        }

        // Cleanup event listeners
        return () => {
            if (themeToggle) {
                themeToggle.removeEventListener('change', handleThemeChange);
            }
            if (navbar) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return null;
};

export default ThemeController;