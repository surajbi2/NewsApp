import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Article() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500">Article not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg m-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline hover:underline-offset-4 hover:cursor-pointer mb-4"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {article.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {article.source.name}
      </p>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover my-4 rounded-xl"
        />
      )}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {article.description}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Read Full Article
      </a>
    </motion.div>
  );
}

export default Article;
