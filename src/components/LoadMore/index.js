import React from "react";

const styles = {
  padding: "8px 20px",
  backgroundColor: "#fffffc",
  border: "none",
  fontSize: "1.8rem",
  fontWeight: "500",
  color: "#000",
};

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <button style={styles} onClick={() => onLoadMoreEvt()}>
      Load More
    </button>
  );
};

export default LoadMore;
