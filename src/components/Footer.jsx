import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
      <p>
        © {new Date().getFullYear()} PowerLearn Project. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
