import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export default function DataTable({
  rows,
  columns,
  handleEvent,
}: {
  rows: [];
  columns: GridColDef[];
  handleEvent: any;
}) {
  const [dense, setDense] = useState(false);
  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{ height: "76vh" }}
        disableRowSelectionOnClick={true}
        rows={rows}
        columns={columns}
        onRowDoubleClick={handleEvent}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
      />
      <FormControlLabel
        className="px-6"
        control={
          <Switch checked={dense} onChange={handleChangeDense} size="small" />
        }
        label="Dense Padding"
        labelPlacement="end"
      />
    </div>
  );
}
