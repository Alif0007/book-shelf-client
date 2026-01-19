import React from 'react';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import logo from '../../assets/book-shelf_8766963.png'


const Footer = () => {
    return (
        <div className="mt-auto">
            <footer className="bg-base-200 text-base-content pt-12 pb-6 border-t border-base-300">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img className='h-12 w-12' src={logo} alt="BookShelf Logo" />
                                <span className="font-bold text-xl text-base-content">BookShelf</span>
                            </div>
                            <p className="text-base-content/70 mb-4">Your personal library in the digital world</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-lg text-base-content hover:text-primary transition-colors duration-200">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-lg text-base-content hover:text-primary transition-colors duration-200">
                                    <FaXTwitter />
                                </a>
                                <a href="#" className="text-lg text-base-content hover:text-primary transition-colors duration-200">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-lg text-base-content hover:text-primary transition-colors duration-200">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <span className="footer-title text-base-content font-bold text-lg mb-4 block">Services</span>
                            <ul className="space-y-2">
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Book Discovery</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Reading Lists</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Reviews</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Community</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <span className="footer-title text-base-content font-bold text-lg mb-4 block">Company</span>
                            <ul className="space-y-2">
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">About us</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Contact</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Jobs</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Press kit</a></li>
                            </ul>
                        </div>

                        {/* Legal & Newsletter */}
                        <div>
                            <span className="footer-title text-base-content font-bold text-lg mb-4 block">Stay Connected</span>
                            <ul className="space-y-2 mb-4">
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Terms of use</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Privacy policy</a></li>
                                <li><a className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-200">Cookie policy</a></li>
                            </ul>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base-content/70 text-sm">Subscribe to our newsletter</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="email@example.com"
                                        className="input input-bordered input-sm bg-base-100 text-base-content border-base-300 flex-grow"
                                    />
                                    <button className="btn btn-primary btn-sm hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
                                        Go
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-base-300 pt-6 mt-6 text-center">
                        <p className="text-base-content/60">© {new Date().getFullYear()} BookShelf - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;