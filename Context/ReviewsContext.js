import React, { createContext, useState } from "react";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviewsList, setReviewsList] = useState([]);

  return (
    <ReviewsContext.Provider value={{ reviewsList, setReviewsList }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewsContext;
