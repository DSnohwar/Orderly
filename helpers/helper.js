export const parseCallbackUrl = (url) =>{
    const res = url.replace(/%3A/g, ":").replace(/%2F/g, "/");
    return res;
};

export const getUserReview = (reviews, userId) => {
    let userReview = null;
  
    reviews.forEach((review) => {
      if (review?.user?._id === userId) {
        userReview = review;
      }
    });
  
    return userReview;
  };

  export const getCookieName = () => {
    let cookieName = "";
  
    if (process.env.NODE_ENV === "development") {
      cookieName = "next-auth.session-token";
    }
  
    if (process.env.NODE_ENV === "production") {
      cookieName = "__Secure-next-auth.session-token";
    }
  
    return cookieName;
  };