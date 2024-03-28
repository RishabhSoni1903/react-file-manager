import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import data from "./data";
import DataTable from "./DataTable";
import { GridColDef } from "@mui/x-data-grid";

function FileBrowser() {
  const [explorerData, setExplorerData] = useState(data);
  const [breadcrumbs, setBreadcrumbs] = useState<any>([
    { id: 0, title: "Root" },
  ]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    { field: "type", headerName: "Type", width: 150 },
    { field: "modified", headerName: "Modified Date/Time", width: 200 },
    { field: "size", headerName: "Size", width: 150 },
  ];

  const rows: any = explorerData;

  const handleEvent = (target: any) => {
    console.log(target);
    if (target.row.type === "folder") {
      setExplorerData(target.row.children);
      setBreadcrumbs([
        ...breadcrumbs,
        { id: target.row.id, title: target.row.name },
      ]);
    }
  };

  const handleClick = (e: any) => {
    console.log(breadcrumbs);
    const navigateTo = breadcrumbs.find(
      (item: any) => item.title === e.target.innerHTML
    );
    console.log("navigate to: ", navigateTo);
    console.log("breadcrumbs: ", breadcrumbs);
    const items = findObjectById(data, navigateTo.id);
    if (navigateTo.id !== 0) {
      setExplorerData(items.children);
    } else {
      setExplorerData(data);
    }
    setBreadcrumbs(modifyBreadcrumb(breadcrumbs, navigateTo.id));
  };

  const findObjectById: any = (data: any, id: any) => {
    for (const item of data) {
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const nestedItem = findObjectById(item.children, id);
        if (nestedItem) {
          return nestedItem;
        }
      }
    }
    return null;
  };

  const modifyBreadcrumb = (array: any, id: any) => {
    const index = array.findIndex((item: any) => item.id === id);
    const splicedData = array.splice(0, index + 1);
    console.log(splicedData);
    return splicedData;
  };

  return (
    <div>
      <div>
        <Breadcrumbs className="px-6" separator="›" aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb: any, index: any) => (
            <Link
              onClick={handleClick}
              className="cursor-pointer"
              color="inherit"
              underline="hover"
              key={index}
            >
              {breadcrumb.title}
            </Link>
          ))}
        </Breadcrumbs>
        <DataTable rows={rows} columns={columns} handleEvent={handleEvent} />
      </div>
    </div>
  );
}

export default FileBrowser;
