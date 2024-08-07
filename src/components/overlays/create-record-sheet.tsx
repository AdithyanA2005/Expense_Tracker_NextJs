import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpenseForm } from "@/components/forms/expense-form";
import { EarningForm } from "@/components/forms/earning-form";
import { useCreateRecordSheet } from "@/store/overlays/useCreateRecordSheet";
import { EAddSheetTabs, EDashboardTabs } from "@/lib/enums";

interface AddNewSheetProps {}

export function CreateRecordSheet({}: AddNewSheetProps) {
  const createRecordSheet = useCreateRecordSheet();

  return (
    <Sheet open={createRecordSheet.isOpen} onOpenChange={createRecordSheet.close}>
      <SheetContent className="slim-scrollbar w-full overflow-auto px-1 py-5 sm:min-w-fit sm:px-5">
        <SheetHeader>
          <SheetTitle className="mb-4">Add New Record</SheetTitle>
        </SheetHeader>

        <Tabs defaultValue={createRecordSheet.tab} className="sm:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value={EAddSheetTabs.Expense} className="capitalize">
              {EDashboardTabs.Expenses}
            </TabsTrigger>
            <TabsTrigger value={EAddSheetTabs.Earning} className="capitalize">
              {EDashboardTabs.Earnings}
            </TabsTrigger>
          </TabsList>

          <TabsContent value={EAddSheetTabs.Expense}>
            <SheetCardWrapper title="Add New Expense">
              <ExpenseForm action="add" runAfterSubmit={createRecordSheet.close} />
            </SheetCardWrapper>
          </TabsContent>

          <TabsContent value={EAddSheetTabs.Earning}>
            <SheetCardWrapper title="Add New Earning">
              <EarningForm action="add" runAfterSubmit={createRecordSheet.close} />
            </SheetCardWrapper>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

interface SheetCardWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

function SheetCardWrapper({ children, title, description }: SheetCardWrapperProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
}
