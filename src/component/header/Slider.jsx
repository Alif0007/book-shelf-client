import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router';

export default function App() {
    return (
        <>
            <Swiper modules={[Autoplay]} autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }} className="mySwiper">

                {/* BANNER SLIDE  */}

                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage:
                                "url(https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/GettyImages-900301626_437925_t2i3bm.jpg)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to Book Shelf</h1>
                                <p className="mb-5 font-semibold">
                                    A Book Shelf breathes wisdom, whispers dreams, and awakens souls — every page a doorway, every book a universe waiting to unfold
                                </p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage:
                                "url(https://images.stockcake.com/public/3/8/6/386d51ef-a21b-4efd-a7f3-1f761d294dfd/library-book-arch-stockcake.jpg)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Explore the World of Words</h1>
                                <p className="mb-5 font-semibold">
                                    Dive into our collection of timeless stories and inspiring reads — where every book opens a new adventure for your mind and soul.
                                </p>
                                <Link to='/allbooks'><button className="btn btn-primary">See All Books</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage:
                                "url(https://www.nli.ie/sites/default/files/styles/image_with_caption_narrow/public/2022-10/nli-oct-screen-res-56.webp?h=78aab1d8&itok=qDrjbLV4)",
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold">Add a New Chapter</h1>
                                <p className="mb-5 font-semibold">
                                    Share the joy of reading by adding a new book to our collection — every story you add inspires countless journeys ahead.
                                </p>
                                <Link to='/allbooks'><button className="btn btn-primary">Add a Book</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}