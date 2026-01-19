const SkeletonCard = () => {
    return (
        <div className="card card-compact bg-base-100 shadow-lg border border-base-200 overflow-hidden h-full flex flex-col group">
            <figure className="h-48 bg-base-200 animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-base-300 to-transparent"></div>
            </figure>
            <div className="card-body p-5 flex-grow">
                <div className="h-5 bg-base-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-base-200 rounded w-1/2 mb-3 animate-pulse"></div>

                <div className="flex space-x-2 mb-3">
                    <div className="h-4 bg-base-200 rounded w-16 animate-pulse"></div>
                    <div className="h-4 bg-base-200 rounded w-16 animate-pulse"></div>
                </div>

                <div className="h-4 bg-base-200 rounded w-full mb-3 animate-pulse"></div>
                <div className="h-4 bg-base-200 rounded w-2/3 mb-4 animate-pulse"></div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-base-200">
                    <div className="h-8 bg-base-200 rounded w-1/3 animate-pulse"></div>
                    <div className="h-6 bg-base-200 rounded w-1/4 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;