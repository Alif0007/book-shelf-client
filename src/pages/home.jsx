import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import BookCard from '../component/BookCard';
import SkeletonCard from '../component/SkeletonCard';
import { FaBookOpen, FaUsers, FaStar, FaChartLine, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import Slider from '../component/header/Slider';


const Home = () => {
    const [ratedBooks, setRatedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://book-shelf-server-eight.vercel.app/topbooks')
            .then(response => {
                setRatedBooks(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching top books:', error);
                setIsLoading(false);
            });
    }, []);

    // Stats data
    const stats = [
        { value: '10K+', label: 'Books Available', icon: <FaBookOpen /> },
        { value: '50K+', label: 'Happy Readers', icon: <FaUsers /> },
        { value: '4.8/5', label: 'Average Rating', icon: <FaStar /> },
        { value: '24/7', label: 'Support', icon: <FaChartLine /> },
    ];

    // Features data
    const features = [
        {
            title: 'Discover New Reads',
            description: 'Find books tailored to your taste with our smart recommendation engine.',
            icon: <FaBookOpen className="text-primary text-2xl" />
        },
        {
            title: 'Personalized Library',
            description: 'Organize your books and track your reading progress effortlessly.',
            icon: <FaStar className="text-primary text-2xl" />
        },
        {
            title: 'Community Reviews',
            description: 'Share your thoughts and discover insights from fellow book lovers.',
            icon: <FaUsers className="text-primary text-2xl" />
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Book Enthusiast',
            content: 'BookShelf has transformed how I discover new books. The recommendations are spot-on!',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Avid Reader',
            content: 'Finally, a platform that understands my reading preferences. Highly recommended!',
            rating: 5
        },
        {
            name: 'Emma Rodriguez',
            role: 'Book Club Leader',
            content: 'Perfect for organizing our book club selections and discussions.',
            rating: 5
        }
    ];

    return (
        <div className="space-y-0">
            {/* Hero Section */}
            <Slider></Slider>

            {/* Stats Section */}
            <section className="py-12 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-content rounded-full mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                                <p className="text-base-content/70">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-base-content">Why Choose BookShelf?</h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            Everything you need to manage your reading journey in one place
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card bg-base-100 shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-base-200 rounded-lg">
                                <div className="flex justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-base-content">{feature.title}</h3>
                                <p className="text-base-content/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Rated Books Section */}
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-base-content">Top Rated Books</h2>
                        <Link to="/allbooks" className="btn btn-primary hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
                            View All
                        </Link>
                    </div>

                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                            {[...Array(6)].map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                            {ratedBooks.slice(0, 6).map((book) => (
                                <BookCard key={book._id} book={book} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-base-content">How It Works</h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            Getting started with BookShelf is easy
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-content rounded-full mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-base-content">Browse & Discover</h3>
                            <p className="text-base-content/70">Explore our vast collection of books across various genres.</p>
                        </div>
                        <div className="text-center p-6 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-content rounded-full mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-base-content">Add to Library</h3>
                            <p className="text-base-content/70">Add books to your personal library and organize them.</p>
                        </div>
                        <div className="text-center p-6 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-content rounded-full mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-base-content">Read & Review</h3>
                            <p className="text-base-content/70">Enjoy reading and share your reviews with the community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-base-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-base-content">What Our Readers Say</h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            Join thousands of satisfied book lovers
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card bg-base-100 shadow-lg p-6 border border-base-200 rounded-lg">
                                <div className="flex text-primary mb-4">
                                    {'★'.repeat(testimonial.rating)}
                                </div>
                                <div className="flex items-start mb-4">
                                    <FaQuoteLeft className="text-base-content/40 text-2xl mr-2 mt-1" />
                                    <p className="text-base-content/70 italic">{testimonial.content}</p>
                                </div>
                                <div className="mt-auto">
                                    <p className="font-bold text-base-content">{testimonial.name}</p>
                                    <p className="text-sm text-base-content/60">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-base-200 text-base-content border-t border-base-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4 text-base-content">Ready to Start Your Reading Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of book lovers and discover your next favorite read today.
                    </p>
                    <Link to="/register" className="btn btn-primary btn-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;