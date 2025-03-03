import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
        Page Not Found
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </motion.div>
  );
}

export default NotFound;
