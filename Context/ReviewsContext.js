import React, { createContext, useState } from "react";

// Create a context for managing reviews
const ReviewsContext = createContext();

// Reviews provider component
export const ReviewsProvider = ({ children }) => {
  // State to store list of reviews
  const [reviewsList, setReviewsList] = useState([]);

  return (
    // Provide reviews list and setter function to children components
    <ReviewsContext.Provider value={{ reviewsList, setReviewsList }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContext;
