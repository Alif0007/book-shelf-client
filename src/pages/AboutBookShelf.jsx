import React from "react";
import { FaBookReader, FaQuoteLeft, FaStar } from "react-icons/fa";

const AboutBookShelf = () => {
    return (
        <div className="bg-base-200 py-16 px-6 md:px-20 rounded-2xl shadow-inner">
            <div className="max-w-5xl mx-auto text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <FaBookReader className="text-5xl text-primary" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    About <span className="text-secondary">The Book Shelf</span>
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    <FaQuoteLeft className="inline-block text-secondary mr-2" />
                    <span>
                        Welcome to <span className="font-semibold text-primary">The Book Shelf</span> —
                        your cozy corner for discovering, sharing, and exploring stories that matter.
                        From timeless classics to modern favorites, we connect passionate readers with
                        books that inspire thought, imagination, and growth.
                    </span>
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="card-body">
                            <h3 className="font-bold text-primary text-lg">Vast Collection</h3>
                            <p className="text-gray-600">
                                Explore genres from fantasy and romance to self-help and mystery.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="card-body">
                            <h3 className="font-bold text-primary text-lg">Community Driven</h3>
                            <p className="text-gray-600">
                                Readers can share, rate, and review — making book discovery personal.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="card-body">
                            <h3 className="font-bold text-primary text-lg">Trusted Quality</h3>
                            <p className="text-gray-600">
                                Curated selections, authentic reviews, and a passion for great storytelling.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rating & Footer */}
                <div className="mt-10 flex flex-col items-center">
                    <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">
                        Loved by readers across the world — ★★★★★ Rated Community
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBookShelf;
