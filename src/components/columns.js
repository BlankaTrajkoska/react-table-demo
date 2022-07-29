//to identify which data goes in which column of the table
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of birth",
    Footer: "Date of birth",
    accessor: "date_of_birth",
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ],
  },
];
