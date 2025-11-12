import React from 'react';
import { GiRoundStar } from 'react-icons/gi';

const TopRatedBooks = ({ topBook }) => {
    return (
        <div>
            <div className="w-full bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden h-full">
                {/* Book Cover */}
                <div className="bg-gray-100">
                    <img
                        src={topBook.coverImage}
                        alt={topBook.title}
                        className="w-full h-72 object-cover"
                    />
                </div>

                {/* Book Info */}
                <div className="p-4 text-left">
                    <h3 className=" font-semibold text-gray-900">{topBook.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{topBook.author}</p>
                    <p className="flex items-center gap-2 text-xl font-bold text-indigo-900"><GiRoundStar />{topBook.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default TopRatedBooks;