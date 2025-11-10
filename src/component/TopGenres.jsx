import { FaUserSecret, FaBalanceScale, FaBookOpen, FaFeatherAlt } from "react-icons/fa";
import { GiBabyFace, GiIncense } from "react-icons/gi";

const genres = [
    { name: "Detective", icon: <FaUserSecret className="text-gray-400 hover:text-indigo-900  text-5xl" /> },
    { name: "Kid's Story", icon: <GiBabyFace className="text-gray-400 hover:text-indigo-900 text-5xl" /> },
    { name: "Law Books", icon: <FaBalanceScale className="text-gray-400 hover:text-indigo-900 text-5xl" /> },
    { name: "Ancient History", icon: <FaFeatherAlt className="text-gray-400 hover:text-indigo-900 text-5xl" /> },
    { name: "Literary Fiction", icon: <FaBookOpen className="text-gray-400 hover:text-indigo-900 text-5xl" /> },
    { name: "Holy Books", icon: <GiIncense className="text-gray-400 hover:text-indigo-900 text-5xl" /> },
];

const TopGenres = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Top Genres
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
                {genres.map((genre, index) => (
                    <div key={index} className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                        <div className="mb-2 ">{genre.icon}</div>
                        <p className="text-grey-600 font-semibold text-lg">{genre.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopGenres;
