import { Link } from "react-router";

const About = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-primary/70 to-base-100"></div>
                {/* <img
                    src="https://robertson.sd33.bc.ca/sites/robertson.sd33.bc.ca/files/2018-10/library%20books.jpg"
                    alt="Beautiful modern digital library bookshelf"
                    className="absolute inset-0 w-full h-full object-cover"
                /> */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">About Book Shelf</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">Your modern digital library where book lovers connect, discover, and share their favorite reads.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
                        <p className="text-lg text-base-content/80 leading-relaxed">
                            Book Shelf was created to make discovering and managing books effortless and enjoyable. We believe reading brings people together, and our platform empowers users to build personal collections, rate books, leave comments, and explore recommendations in a beautiful, responsive environment that works perfectly on any device.
                        </p>
                        <p className="text-lg text-base-content/80 leading-relaxed mt-4">
                            With features like advanced search, filters, dark mode, and a role-based dashboard, we aim to provide a professional yet user-friendly space for casual readers and book enthusiasts alike.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://www.shutterstock.com/shutterstock/photos/2292975639/display_1500/stock-vector-happy-diverse-people-sit-in-circle-reading-book-together-smiling-group-read-and-discuss-bible-at-2292975639.jpg"
                            alt="Diverse group of happy people reading books together"
                            className="rounded-xl shadow-2xl max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Features/Team Section */}
            <section className="py-16 px-4 bg-base-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-primary">Built with Passion</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img
                            src="https://c8.alamy.com/comp/2G091C0/people-develop-ui-ux-design-abstract-web-development-process-vector-illustration-cartoon-team-of-developer-designer-characters-work-on-graphic-interface-usability-website-app-isolated-on-white-2G091C0.jpg"
                            alt="Team developing web app illustration"
                            className="rounded-xl shadow-2xl"
                        />
                        <div className="text-left">
                            <p className="text-lg text-base-content/80 leading-relaxed mb-6">
                                Powered by modern technologies like React, Vite, Tailwind CSS, DaisyUI, and Firebase, Book Shelf delivers a fast, secure, and visually stunning experience. From Google authentication to image uploads and dynamic charts in the dashboard, every detail is crafted for real-world use.
                            </p>
                            <p className="text-lg text-base-content/80 leading-relaxed">
                                Whether you're browsing top-rated books, adding your favorites, or managing your collection, Book Shelf is designed to grow with the community of readers worldwide.
                            </p>
                            <Link to="/allbooks" className="btn btn-primary mt-8">Explore Books Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;