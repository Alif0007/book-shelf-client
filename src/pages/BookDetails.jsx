import axios from "axios";
import React, { useEffect } from "react";
import { FaStar, FaUser, FaEnvelope, FaBookOpen, FaTag } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BookDetails = ({ books }) => {


    const book = useLoaderData()
    console.log(book)


    if (!book) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-ring loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-2xl flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="w-full md:w-1/3">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Book Info */}
            <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
                    <FaBookOpen className="text-secondary" /> {book.title}
                </h2>

                <div className="flex items-center gap-3 text-gray-600">
                    <FaUser className="text-accent" />
                    <span className="font-medium">{book.author}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                    <FaTag className="text-accent" />
                    <span className="font-medium">{book.genre}</span>
                </div>

                <div className="flex items-center gap-2 text-yellow-500 text-lg">
                    {[...Array(Math.floor(book.rating))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    {book.rating % 1 !== 0 && <FaStar className="opacity-50" />}
                    <span className="text-gray-600 text-sm ml-1">({book.rating}/5)</span>
                </div>

                <p className="text-base text-gray-700 leading-relaxed">
                    {book.summary}
                </p>

                <div className="divider"></div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEnvelope className="text-primary" />
                    <span>Added by: {book.userEmail}</span>
                </div>

                <button className="btn btn-primary w-full md:w-auto mt-4">
                    Add to Reading List
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
