import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable, IDataTableFilter } from "@/app/(pages)/(protected)/dashboard/components/data-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import useOverlaysContext from "@/context/overlays/useOverlaysContext";
import { EAddSheetTabs } from "@/lib/enums";

interface DataTableCardProps<T> {
  title: "expense" | "earning";
  description?: string;
  columns: ColumnDef<T>[];
  data: T[];
  filter?: IDataTableFilter;
  isLoading?: boolean;
}

export default function DataTableCard<T>({
  title,
  description,
  columns,
  filter,
  data,
  isLoading,
}: DataTableCardProps<T>) {
  const { setAddNewSideSheet } = useOverlaysContext();

  return (
    <Card className="h-full min-h-96 flex flex-col">
      <CardHeader className="border-border border-b flex-row items-center justify-between px-6 py-4">
        {/*Title & Description*/}
        <div className="space-y-1.5 justify-evenly">
          <CardTitle className="capitalize">
            {title}
            {"s"}
          </CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>

        {/*Open Side Sheet to add new Record*/}
        <Button
          variant="outline"
          className="space-x-1"
          onClick={() =>
            setAddNewSideSheet({
              open: true,
              defaultTab: title === "earning" ? EAddSheetTabs.Earning : EAddSheetTabs.Expense,
            })
          }
        >
          <PlusIcon className="size-5" />
          <span>Add New</span>
        </Button>
      </CardHeader>

      <div className="w-[inherit] h-[inherit] scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary-foreground overflow-auto">
        <CardContent className="h-[inherit] w-[inherit] min-w-fit space-y-2">
          <DataTable
            filter={filter}
            addVisibilityToggle
            columns={columns}
            data={data}
            isLoading={isLoading}
          />
        </CardContent>
      </div>
    </Card>
  );
}
