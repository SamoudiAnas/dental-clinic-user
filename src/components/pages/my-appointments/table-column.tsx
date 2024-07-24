import { Appointment } from "@/schemas/appointment";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

const columnHelper = createColumnHelper<Appointment>();

const columns = [
  columnHelper.accessor("date", {
    header: () => <span>Date</span>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("startTime", {
    header: () => <span>Start Time</span>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy hh:mm a")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("endTime", {
    header: () => <span>End Time</span>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy hh:mm a")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdAt", {
    header: () => <span> Created At</span>,
    cell: (info) => (
      <p>{format(info.getValue() ?? new Date(), "MM/dd/yyyy hh:mm a")}</p>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("updatedAt", {
    header: () => <span> Updated At</span>,
    cell: (info) => (
      <p>{format(info.getValue() ?? new Date(), "MM/dd/yyyy hh:mm a")}</p>
    ),
    footer: (info) => info.column.id,
  }),
];

export { columns as appointmentColumns };
