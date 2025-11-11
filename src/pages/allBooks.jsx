import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/books')
            .then(books => {
                setAllBooks(books.data)


            })
    }, [])



    return (
        <div>
            <h1 className=' text-3xl font-bold text-center text-gray-800 my-8'>All The Books</h1>

            <div className="overflow-x-auto max-w-7xl mx-auto mb-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    SL No.
                                </label>
                            </th>
                            <th>Book</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>User Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allBooks.map((book, index) => (

                                <tr key={book._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask     h-12 w-12">
                                                    <img
                                                        src={book.coverImage}
                                                        alt={book.title} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.title}</div>
                                                <div className="text-sm opacity-50">{book.author}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {book.genre}
                                        <br />

                                    </td>
                                    <td className='flex gap-2 items-center'>{book.rating}
                                        <div className='text-yellow-400'>
                                            <FaStar />
                                        </div>
                                    </td>
                                    <td>
                                        {book.userEmail}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>

                            ))
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBooks;