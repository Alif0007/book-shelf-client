
import { use, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import axios from "axios";

const AddBook = () => {
    const { user } = use(AuthContext)

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        rating: "",
        summary: "",
        coverImage: "",
        userEmail: user.email,
        userName: user.displayName,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("📘 New Book Added:", formData);


        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // axios.post("http://localhost:3000/books", formData)
        //     .then(data => {
        //         console.log(data)
        //     })


        alert("✅ Book added successfully!");
        setFormData({
            title: "",
            author: "",
            genre: "",
            rating: "",
            summary: "",
            coverImage: "",
            userEmail: user.email,
            userName: user.displayName,
        });
    };

    return (
        <div className="max-w-3xl mx-auto my-12 p-8 bg-base-200 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                📚 Add a New Book
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
                        value={formData.title}
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
                        value={formData.author}
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
                        value={formData.genre}
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
                        value={formData.rating}
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
                        value={formData.summary}
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
                        value={formData.coverImage}
                        onChange={handleChange}
                        placeholder="https://example.com/book-cover.jpg"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* User Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">User Email</span>
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        defaultValue={user.email}
                        readOnly
                        onChange={handleChange}
                        placeholder="user@example.com"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* User Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">User Name</span>
                    </label>
                    <input
                        type="text"
                        name="userName"

                        defaultValue={user.displayName}
                        onChange={handleChange}
                        readOnly
                        placeholder="Your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                    <button type="submit" className="btn btn-primary w-full">
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;






