import JoyRideIllustration from "@root/public/svgs/joy_ride.svg";
import { buttonVariants } from "@/components/common/button";
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
import Link from "next/link";
import { queryKeys } from "@/constants/queryKeys";

export default function MyAppointments() {
  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKeys.appointments],
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
      <div className="container max-w-screen-lg min-h-[50vh] py-16">
        <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
          My Appointments
        </h1>
        <p className="mt-2 max-w-lg text-gray-500">
          This is where you can see all of your appointments. You can also
          cancel or reschedule them.
        </p>

        {table.getRowCount() !== 0 ? (
          <div className="flex flex-col items-center justify-center min-h-96 py-8">
            <JoyRideIllustration className="size-64 mx-auto mb-4" />
            <p className="text-xl font-semibold text-gray-900">
              You have no appointments!
            </p>
            <p className="text-gray-500 text-sm my-4 mb-8">
              You can book an appointment by clicking the button below.
            </p>
            <Link
              href="/new-appointment"
              className={buttonVariants({ variant: "default" })}
            >
              Book an appointment
            </Link>
          </div>
        ) : (
          <div className="my-8 overflow-hidden border border-gray-200 rounded-xl">
            <table className="min-w-max table-auto border-collapse space-y-1 sm:min-w-full">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="*:text-sm *:text-left *:font-medium *:p-3"
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
        )}
      </div>
    </BasicLayout>
  );
}
