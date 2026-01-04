const Contact = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-4">
            {/* Hero */}
            <section className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Get in Touch</h1>
                <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
                    We'd love to hear from you! Whether you have questions, feedback, or suggestions for new features, feel free to reach out.
                </p>
            </section>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="card bg-base-200 shadow-xl p-8">
                    <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-40" required></textarea>
                        <button type="submit" className="btn btn-primary w-full">Send Message</button>
                    </form>
                    <p className="text-sm text-base-content/60 mt-4">* Note: Form submission coming soon – stay tuned!</p>
                </div>

                {/* Contact Info & Illustration */}
                <div className="flex flex-col justify-center items-center text-center space-y-12">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/068/213/829/small_2x/contact-us-icon-set-illustration-phone-email-mobile-globe-location-chat-modern-communication-methods-for-business-and-personal-use-in-digital-designs-free-vector.jpg"
                        alt="Contact icons illustration with email, phone, and location"
                        className="rounded-xl shadow-2xl max-w-full"
                    />
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/20 p-4 rounded-full">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-base-content/80">support@bookshelf.app</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-primary/20 p-4 rounded-full">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <div>
                                <p className="font-semibold">Location</p>
                                <p className="text-base-content/80">Worldwide – Fully Digital</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 mt-8">
                            <a href="#" className="btn btn-circle btn-outline"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                            <a href="#" className="btn btn-circle btn-outline"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71-.02-1.38-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;