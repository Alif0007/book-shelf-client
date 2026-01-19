import { Link } from 'react-router';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { GiRoundStar } from 'react-icons/gi';

const BookCard = ({ book }) => {


    return (
        <div>
            <Link to={`/bookdetails/${book._id}`} ><div className="w-full bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden h-full">
                {/* Book Cover */}
                <div className="bg-gray-100">
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-72 object-cover"
                    />
                </div>

                {/* Book Info */}

                <div className="p-4 text-left">
                    <h3 className=" font-semibold text-gray-900">{book.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{book.author}</p>
                    <p className="flex items-center gap-2 text-xl font-bold text-indigo-900"><GiRoundStar />{book.rating}</p>
                </div>
            </div></Link>

        </div>
    );
};

export default BookCard;