import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import axios from 'axios';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

const MyBooks = () => {
    const { user } = use(AuthContext)
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/mybooks?email=${user.email}`)
                .then(data => {
                    setBooks(data.data)
                })
        }


    }, [user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/books/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingBooks = books.filter(book => book._id !== id)
                            setBooks(remainingBooks)

                        }
                    })
            }
        });
    }



    return (
        <div>
            <h1 className=' text-3xl font-bold text-center text-gray-800 my-8'>My Books</h1>

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
                            books.map((book, index) => (

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
                                    <td className='flex gap-2 items-center justify-center mt-3'>{book.rating}
                                        <div className='text-yellow-400'>
                                            <FaStar />
                                        </div>
                                    </td>
                                    <td>
                                        {book.userEmail}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(book._id)} className="btn  btn-ghost btn-xs text-xl"><MdDeleteForever />
                                        </button>
                                        <Link to={`/update-book/${book._id}`}><button className="btn btn-ghost btn-xs text-xl"><HiAdjustmentsHorizontal />
                                        </button></Link>
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

export default MyBooks;