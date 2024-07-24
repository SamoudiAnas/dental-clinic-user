import { appointmentColumns } from "@/components/pages/my-appointments/table-column";
import { getUserAppointments } from "@/helpers/appointment.helper";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export default function MyAppointments() {
  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: getUserAppointments,
    initialData: [],
  });

  const table = useReactTable({
    data: appointments,
    columns: appointmentColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1>My Appointments</h1>
      <p>
        This is where you can see all of your appointments. You can also cancel
        or reschedule them.
      </p>

      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
