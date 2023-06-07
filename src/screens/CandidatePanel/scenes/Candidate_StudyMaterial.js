import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";

const Candidate_StudyMaterial = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  

  return (
    <div className="flex flex-col h-screen bg-gray-100"  >
      <div><Topbar /></div>
      <div className="flex flex-1">
        <div className="w-1/4">
          <Sidebar isSidebar={isSidebar} />
        </div>
        <div className="flex-1 overflow-x-auto">          
            <Typography variant="h5" color={colors.greenAccent[400]}>
              Download study material
            </Typography>

            
        </div>
      </div>
    </div>
  );
};

export default Candidate_StudyMaterial;
