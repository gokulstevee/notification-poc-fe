import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface CustomTableProps {
  columns: TableColumn<any>[];
  data: any[];
  progressPending: boolean;
  pagination: boolean;
  paginationServer: boolean;
  paginationTotalRows: number;
  paginationDefaultPage: number;
  handlePageChange: (page: number) => void;
  handleRowsPerPageChange: (newPerPage: number, page: number) => void;
  loadingComponent: React.ReactNode;
  noDataComponent: React.ReactNode;
  selectableRows?: boolean;
  onSelectedRowsChange?: (selectedRows: any) => void;
  clearSelectedRows?: boolean | undefined;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  progressPending,
  pagination,
  paginationServer,
  paginationTotalRows,
  paginationDefaultPage,
  handlePageChange,
  handleRowsPerPageChange,
  selectableRows,
  onSelectedRowsChange,
  loadingComponent,
  noDataComponent,
  clearSelectedRows,
}) => {
  // const tableCustomStyles = {
  //   headCells: {
  //     style: {
  //       fontSize: "1rem",
  //       backgroundColor: "#ECF2F0",
  //     },
  //   },
  // };
  return (
    <DataTable
      customStyles={{
        headCells: {
          style: {
            fontSize: "16px",
            backgroundColor: "#eaebf5",
            fontWeight: "600",
          },
        },
        cells: {
          style: {
            fontSize: "14px",
            fontWeight: "400",
          },
        },
      }}
      columns={columns}
      data={data}
      progressPending={progressPending}
      pagination={pagination}
      paginationServer={paginationServer}
      paginationTotalRows={paginationTotalRows}
      paginationDefaultPage={paginationDefaultPage}
      onChangeRowsPerPage={(currentRows, currentPage) =>
        handleRowsPerPageChange(currentRows, currentPage)
      }
      onChangePage={(page) => handlePageChange(page)}
      selectableRows={selectableRows}
      onSelectedRowsChange={onSelectedRowsChange}
      progressComponent={loadingComponent}
      noDataComponent={noDataComponent}
      clearSelectedRows={clearSelectedRows}
    />
  );
};

export default CustomTable;
