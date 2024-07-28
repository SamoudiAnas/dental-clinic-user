import { appointmentColumns } from "@/components/pages/my-appointments/table-column";
import { getUserAppointments } from "@/helpers/appointment.helper";
import BasicLayout from "@/layouts/basic-layout";
import { useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Head from "next/head";
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
    <BasicLayout>
      <Head>
        <title>My Appointments | The Dental</title>
        <meta
          name="description"
          content="View all of your appointments and manage them."
        />
      </Head>
      <div className="container max-w-screen-lg  py-16">
        <h1>My Appointments</h1>
        <p>
          This is where you can see all of your appointments. You can also
          cancel or reschedule them.
        </p>

        <div className="p-2">
          <table className="min-w-max table-auto border-collapse space-y-1 sm:min-w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="text-sm text-[--title-text-color] *:bg-[--ui-soft-bg] *:p-3 *:text-left *:font-medium"
                >
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
                <tr
                  key={row.id}
                  className="group items-center border-b text-sm text-[--body-text-color] *:p-3 hover:bg-gray-50 has-[[data-state='checked']]:bg-[--ui-soft-bg] has-[[data-state='open']]:bg-gray-50 dark:hover:bg-gray-500/5 dark:has-[[data-state='open']]:bg-gray-500/5"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BasicLayout>
  );
}
