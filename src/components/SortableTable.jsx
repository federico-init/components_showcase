import { useState } from "react";

import Table from "./Table";

import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // here we define the sorting logic based on the sortBy and sortOrder state
  const handleClick = (label) => {
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

  // adding sort functionality only if the column has a sortValue function
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          <div className="cursor-pointer hover:bg-gray-100 flex items-center gap-2">
            {column.label}
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

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

  // it's crucial to pass data and updatedConfig props after {...props}
  // so it can override the original config pro
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <FaSort />;
  }

  switch (sortOrder) {
    case "asc":
      return <FaSortUp />;
    case "desc":
      return <FaSortDown />;
  }
};

export default SortableTable;
