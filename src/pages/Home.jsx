import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/newsApi";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: fetchNews,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-screen mx-auto p-6 bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 mt-8"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
          Latest News
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news articles from around the world
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5"
      >
        {data?.pages.map((page) =>
          page.articles.map((article, index) => (
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
              key={index}
              variants={item}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 backdrop-blur-sm bg-opacity-90 group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-60 object-cover rounded-xl mb-4 shadow-sm transform group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-60 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {article.source.name}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span className="mr-2">
                  {new Date(article.publishedAt || Date.now()).toLocaleDateString()}
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full mx-2"></span>
                <span>{article.author ? article.author.split(',')[0] : 'Unknown'}</span>
              </div>
              
              <p className="text-gray-700 mt-3 line-clamp-3 mb-4">
                {article.description || "No description available"}
              </p>
              
              <Link
                to={`/article/${index}`}
                state={{ article }}
                className="inline-block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Read More →
              </Link>
            </motion.div>
          ))
        )}
      </motion.div>

      <div ref={observerRef} className="h-20 mt-10"></div>

      <AnimatePresence>
        {isFetchingNextPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center mt-8 mb-6"
          >
            <div className="px-6 py-3 bg-white rounded-full shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
                <div className="w-4 h-4 rounded-full bg-indigo-600 animate-pulse delay-150"></div>
                <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse delay-300"></div>
                <span className="text-gray-700 font-medium">Loading more articles...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
      className="mt-16 text-center text-gray-500 pb-8 bottom-0">
        <p>© {new Date().getFullYear()} Latest News. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default Home;