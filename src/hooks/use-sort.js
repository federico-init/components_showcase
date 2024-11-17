import { useState } from "react";

const useSort = (data, config) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // here we define the sorting logic based on the sortBy and sortOrder state
  const setSortColumn = (label) => {
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        break;
      case "asc":
        setSortOrder("desc");
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
        break;
    }
  };

  // sorting logic
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else if (typeof valueA === "number") {
        return valueA - valueB * reverseOrder;
      }
    });
  }

  return { sortBy, sortOrder, setSortColumn, sortedData };
};

export default useSort;
