import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataInvoices } from "../data/mockData";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import { useState } from "react";

const Attendance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100"  >
      <div><Topbar /></div>
      <div className="flex flex-1">
        <div className="w-full md:w-1/4">
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className="flex-1 overflow-x-auto">
          <Typography variant="h5" color={colors.greenAccent[400]}>
              Attendance
            </Typography>
      </div>
    </div>
    </div >
  );
};

export default Attendance;
