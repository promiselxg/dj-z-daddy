import { barlow, montserrat, open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { DataTable } from "../_components/table/data-table";
import { columns } from "../_components/table/columns";
import Modal from "./_component/modal";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="w-full flex h-fit flex-col gap-y-5">
        <div className="w-full flex items-center justify-between">
          <h1
            className={cn(
              `${montserrat.className} font-[600] text-[20px] uppercase`
            )}
          >
            Media Library
          </h1>
          <div className="flex gap-3">
            <Modal />
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
