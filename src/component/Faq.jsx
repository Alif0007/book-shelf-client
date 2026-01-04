import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Frequently Asked Questions
            </h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">What is Book Shelf?</div>
                <div className="collapse-content text-sm">Book Shelf is a modern web application that lets users browse, discover, and manage a digital collection of books with features like searching, filtering, rating, and user-specific CRUD operations in a responsive, light/dark mode interface.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I create an account and log in?</div>
                <div className="collapse-content text-sm">You can register with your email and password on the Register page or sign in quickly using Google  authentication.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I add, edit, or delete books?</div>
                <div className="collapse-content text-sm">Yes, after logging in, go to your Dashboard to access "Add Book" for uploading new books, "My Books" to view and manage your personal collection (edit or delete), while all users can browse publicly available books.</div>
            </div>
        </div>
    );
};

export default Faq;