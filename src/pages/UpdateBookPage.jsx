
import { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const AddBook = () => {
    const [book, setBook] = useState([])
    const { id } = useParams()
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        rating: "",
        summary: "",
        coverImage: "",

    });

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(data => {

                setBook(data.data)
            })
    }, [id])


    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title || "",
                author: book.author || "",
                genre: book.genre || "",
                rating: book.rating || "",
                summary: book.summary || "",
                coverImage: book.coverImage || "",
            });
        }
    }, [book]);


    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "rating" ? Number(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("📘 New Book Added:", formData, book._id);



        axios.patch(`http://localhost:3000/books/${book._id}`, formData)
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            })




    };

    return (
        <div className="max-w-3xl mx-auto my-12 p-8 bg-base-200 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-info">
                Update Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={book.title}
                        onChange={handleChange}
                        placeholder="Enter book title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Author */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Author</span>
                    </label>
                    <input
                        type="text"
                        name="author"
                        defaultValue={book.author}
                        onChange={handleChange}
                        placeholder="Author name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Genre */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Genre</span>
                    </label>
                    <input
                        type="text"
                        name="genre"
                        defaultValue={book.genre}
                        onChange={handleChange}
                        placeholder="Fantasy, Mystery, Sci-Fi..."
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Rating (1–5)</span>
                    </label>
                    <input
                        type="number"
                        name="rating"
                        defaultValue={book.rating}
                        onChange={handleChange}
                        min="1"
                        max="5"
                        step="0.1"
                        placeholder="4.5"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Summary */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Summary</span>
                    </label>
                    <textarea
                        name="summary"
                        defaultValue={book.summary}
                        onChange={handleChange}
                        placeholder="Brief description of the book"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>

                {/* Cover Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Cover Image URL</span>
                    </label>
                    <input
                        type="url"
                        name="coverImage"
                        defaultValue={book.coverImage}
                        onChange={handleChange}
                        placeholder="https://example.com/book-cover.jpg"
                        className="input input-bordered w-full"
                        required
                    />
                </div>



                {/* Submit Button */}
                <div className="text-center pt-6">
                    <button type="submit" className="btn btn-primary w-full">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;






