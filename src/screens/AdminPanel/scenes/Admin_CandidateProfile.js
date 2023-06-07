import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataRegistration } from "../data/mockData";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";


const Admin_CandidateProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const columns = [
    { field: "column1", flex: 0.5 },
    { field: "column2", flex: 0.5 }];

  const column1Data = [
    "Candidate Name", "UID", "Father/Mother Name", "Age", "Gender", "Payment Status",
    "Batch", "Contact No.", "Email", "Course Selected", "Course Online/Offline"
  ];

  const rows = column1Data.map((item, index) => ({
    id: index,
    column1: item,
    column2: mockDataRegistration[index],
  }));


  return (
    <div className="flex flex-col h-screen bg-gray-100"  >
      <div><Topbar /></div>
      <div className="flex flex-1">
        <div className="w-1/4">
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className="flex-1 overflow-x-auto">
          <div>
            <Typography variant="h5" color={colors.greenAccent[400]}>
              View & Edit Candidate Profiles
            </Typography>
            
           </div> 
        </div>
      </div>
    </div>
  );
};

export default Admin_CandidateProfile;
