import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function DataTable() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("400px");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "ID",
    "Phone",
    "Applied Shift",
    "substitute",
    "Status",
    "comments",
    // {
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <>
    //             <button
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 window.alert("EDIT");
    //               }}
    //             >
    //               Edit
    //             </button></>)}}
  ];

  const options = {
    rowsPerPage: 2,
    rowsPerPageOptions: [2, 10, 25],
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    ["Andrew Jacob", "ADwhgkyu", "+9715289467","9:00-15:00\n All Days","N/A", "Active","N/A"],
    ["Jone Castrevish","ADjhgf","+9715289467","9:00-15:00","N/A", "Active","N/A"],
    ["leen Jacob", "ADwhgkyu", "+9715289467","9:00-15:00 All Days","N/A", "Active","N/A"],
    ["ahmad Castrevish","ADjhgf","+9715289467","9:00-15:00","N/A", "Active","N/A"],
    ["nour Jacob", "ADwhgkyu", "+9715289467","9:00-15:00 All Days","N/A", "Active","N/A"],
    ["hassan Castrevish","ADjhgf","+9715289467","9:00-15:00","N/A", "Active","N/A"],
    ["maya Jacob", "ADwhgkyu", "+9715289467","9:00-15:00 All Days","N/A", "Active","N/A"],
    ["saly Castrevish","ADjhgf","+9715289467","9:00-15:00","N/A", "Active","N/A"],
  ];

  return (
    <CacheProvider value={muiCache} >
      <ThemeProvider theme={createTheme()}>
        
        <MUIDataTable
          title={"Employees"}
          data={data}
          columns={columns}
          options={options}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default DataTable;
