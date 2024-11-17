import useSort from "../hooks/use-sort";

import Table from "./Table";

import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  // update config props based on sortable columns
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>
          <div className="cursor-pointer hover:bg-gray-100 flex items-center gap-2">
            {column.label}
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  // it's crucial to pass data and updatedConfig props after {...props}
  // so it can override the original config pro
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

// helper function to render sort icons
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
