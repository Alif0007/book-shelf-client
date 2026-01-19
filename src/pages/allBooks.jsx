import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { FaSortAmountDown, FaSortAmountUp, FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import BookCard from '../component/BookCard';
import SkeletonCard from '../component/SkeletonCard';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    // State for search, filters, and sorting
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [genreFilter, setGenreFilter] = useState(searchParams.get('genre') || '');
    const [ratingFilter, setRatingFilter] = useState(searchParams.get('rating') || '');
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'rating-desc');
    const [ownBooksOnly, setOwnBooksOnly] = useState(searchParams.get('own') === 'true');

    // Get unique genres for filter dropdown
    const allGenres = useMemo(() => {
        const genres = new Set();
        allBooks.forEach(book => {
            if (book.genre) {
                if (Array.isArray(book.genre)) {
                    book.genre.forEach(g => genres.add(g));
                } else {
                    genres.add(book.genre);
                }
            }
        });
        return Array.from(genres).sort();
    }, [allBooks]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://book-shelf-server-eight.vercel.app/books');
                setAllBooks(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching books:', err);
                setError('Failed to load books. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Apply search, filters, and sorting
    const filteredAndSortedBooks = useMemo(() => {
        let result = [...allBooks];

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(book =>
                book.title.toLowerCase().includes(term) ||
                book.author.toLowerCase().includes(term) ||
                (book.genre &&
                    (Array.isArray(book.genre)
                        ? book.genre.some(g => g.toLowerCase().includes(term))
                        : book.genre.toLowerCase().includes(term)))
            );
        }

        // Apply genre filter
        if (genreFilter) {
            result = result.filter(book => {
                if (Array.isArray(book.genre)) {
                    return book.genre.includes(genreFilter);
                } else {
                    return book.genre === genreFilter;
                }
            });
        }

        // Apply rating filter
        if (ratingFilter) {
            const minRating = parseFloat(ratingFilter);
            result = result.filter(book => parseFloat(book.rating) >= minRating);
        }

        // Apply sorting
        switch (sortBy) {
            case 'title-asc':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'rating-asc':
                result.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
                break;
            case 'rating-desc':
                result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            case 'newest':
                result.sort((a, b) => new Date(b.createdAt || b.dateAdded || 0) - new Date(a.createdAt || a.dateAdded || 0));
                break;
            case 'oldest':
                result.sort((a, b) => new Date(a.createdAt || a.dateAdded || 0) - new Date(b.createdAt || b.dateAdded || 0));
                break;
            default:
                result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        }

        return result;
    }, [allBooks, searchTerm, genreFilter, ratingFilter, sortBy]);

    // Update URL params when filters change
    useEffect(() => {
        const params = {};
        if (searchTerm) params.search = searchTerm;
        if (genreFilter) params.genre = genreFilter;
        if (ratingFilter) params.rating = ratingFilter;
        if (sortBy !== 'rating-desc') params.sort = sortBy;
        if (ownBooksOnly) params.own = 'true';

        setSearchParams(params);
    }, [searchTerm, genreFilter, ratingFilter, sortBy, ownBooksOnly, setSearchParams]);

    // Clear all filters
    const clearFilters = () => {
        setSearchTerm('');
        setGenreFilter('');
        setRatingFilter('');
        setSortBy('rating-desc');
        setOwnBooksOnly(false);
    };

    // Handle search input change with debouncing
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">All Books</h1>

            {/* Search and Filter Controls */}
            <div className="bg-base-100 rounded-lg shadow-md p-6 mb-8 border border-base-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Search Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-content">Search Books</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by title, author, or genre..."
                                className="input input-bordered w-full pl-10 bg-base-100 text-base-content border-base-300"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40" />
                        </div>
                    </div>

                    {/* Genre Filter */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-content">Genre</span>
                        </label>
                        <select
                            className="select select-bordered select-primary w-full bg-base-100 text-base-content border-base-300"
                            value={genreFilter}
                            onChange={(e) => setGenreFilter(e.target.value)}
                        >
                            <option value="">All Genres</option>
                            {allGenres.map(genre => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Rating Filter */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-content">Minimum Rating</span>
                        </label>
                        <select
                            className="select select-bordered select-primary w-full bg-base-100 text-base-content border-base-300"
                            value={ratingFilter}
                            onChange={(e) => setRatingFilter(e.target.value)}
                        >
                            <option value="">Any Rating</option>
                            <option value="5">5 Stars & Up</option>
                            <option value="4">4 Stars & Up</option>
                            <option value="3">3 Stars & Up</option>
                            <option value="2">2 Stars & Up</option>
                            <option value="1">1 Star & Up</option>
                        </select>
                    </div>

                    {/* Sort By */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-content">Sort By</span>
                        </label>
                        <select
                            className="select select-bordered select-primary w-full bg-base-100 text-base-content border-base-300"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="rating-desc">Rating: High to Low</option>
                            <option value="rating-asc">Rating: Low to High</option>
                            <option value="title-asc">Title: A to Z</option>
                            <option value="title-desc">Title: Z to A</option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>

                {/* Clear Filters Button */}
                {(searchTerm || genreFilter || ratingFilter || sortBy !== 'rating-desc' || ownBooksOnly) && (
                    <div className="mt-4 flex justify-end">
                        <button
                            className="btn btn-outline btn-sm hover:bg-primary hover:text-primary-content transition-all duration-300 transform hover:scale-105"
                            onClick={clearFilters}
                        >
                            <FaTimes className="mr-2" /> Clear All Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
                <p className="text-base-content/70">
                    Showing <span className="font-bold text-base-content">{filteredAndSortedBooks.length}</span> of <span className="font-bold text-base-content">{allBooks.length}</span> books
                </p>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            )}

            {/* Error State */}
            {error && !loading && (
                <div className="alert alert-error bg-red-100 border-red-300 text-red-700 rounded-lg mb-6">
                    <div>
                        <span>{error}</span>
                    </div>
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && filteredAndSortedBooks.length === 0 && (
                <div className="text-center py-12 bg-base-100 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-base-content">No books found</h3>
                    <p className="text-base-content/70 mb-4">Try adjusting your search or filter criteria</p>
                    <button
                        className="btn btn-primary hover:bg-primary-focus transition-all duration-300 transform hover:scale-105"
                        onClick={clearFilters}
                    >
                        Clear Filters
                    </button>
                </div>
            )}

            {/* Books Grid */}
            {!loading && !error && filteredAndSortedBooks.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredAndSortedBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBooks;