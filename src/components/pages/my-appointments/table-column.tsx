import { Button } from "@/components/common/button";
import { Appointment } from "@/schemas/appointment";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { CancelAppointment } from "./cancel-appointment";

const columnHelper = createColumnHelper<Appointment>();

const columns = [
  columnHelper.accessor("date", {
    header: () => <p>Date</p>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("startTime", {
    header: () => <p>Start Time</p>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy hh:mm a")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("endTime", {
    header: () => <p>End Time</p>,
    cell: (info) => <p>{format(info.getValue(), "MM/dd/yyyy hh:mm a")}</p>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdAt", {
    header: () => <p> Created At</p>,
    cell: (info) => (
      <p>{format(info.getValue() ?? new Date(), "MM/dd/yyyy hh:mm a")}</p>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("updatedAt", {
    header: () => <p> Updated At</p>,
    cell: (info) => (
      <p>{format(info.getValue() ?? new Date(), "MM/dd/yyyy hh:mm a")}</p>
    ),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("id", {
    header: () => <p>Actions</p>,
    cell: (info) => <CancelAppointment id={info.getValue()!} />,
    footer: (info) => info.column.id,
  }),
];

export { columns as appointmentColumns };
