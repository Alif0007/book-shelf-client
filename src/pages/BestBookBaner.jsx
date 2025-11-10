import React from "react";
import { FaStar, FaBookOpen } from "react-icons/fa";

const BestBookBanner = () => {
    return (
        <div className="hero min-h-[80vh] bg-linear-to-r from-indigo-900 via-indigo-700 to-indigo-500 text-white  shadow-xl overflow-hidden">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                {/* Right Image */}
                <div className="relative hover:scale-105 transition-transform duration-500">
                    <img
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-3d-kids-adventures-kindle-book-covers-design-template-d064f3f6168f9c42f32b27649549b194_screen.jpg?ts=1738164747"
                        className="max-w-sm rounded-2xl shadow-2xl "
                        alt="Best Book"
                    />
                    <div className="absolute bottom-2 right-2 bg-blue-50 text-indigo-900 font-bold text-xs md:text-sm px-3 py-1 rounded-full shadow-md">
                        Most Read
                    </div>
                </div>

                {/* Left Text Section */}
                <div className="lg:w-1/2 space-y-5">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Discover the <span className="text-yellow-300">Best Books</span> of the Year
                    </h1>

                    <p className="text-gray-200 text-lg">
                        Handpicked stories that inspire, challenge, and captivate — from
                        magical worlds to real-life journeys. Find your next favorite read today!
                    </p>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-300" />
                        ))}
                        <span className="ml-2 text-gray-100 text-sm">Rated 5/5 by readers</span>
                    </div>

                    {/* CTA Button */}
                    <button className="btn btn-warning text-indigo-900 font-semibold mt-3">
                        <FaBookOpen className="mr-2" /> Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestBookBanner;
