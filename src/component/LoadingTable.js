import React from "react";

const LoadingTable = (Component) => {
  return function LoadingTable({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "15px" }}>
        Attendez, la recherche de données peut prendre un certain temps :)
      </p>
    );
  };
};

export default LoadingTable;
