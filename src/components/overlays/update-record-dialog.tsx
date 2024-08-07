import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExpenseForm } from "@/components/forms/expense-form";
import { EarningForm } from "@/components/forms/earning-form";
import { useUpdateRecordDialog } from "@/store/overlays/useUpdateRecordDialog";

export function UpdateRecordDialog() {
  const updateDialog = useUpdateRecordDialog();

  // Return null if recordType or record is not provided
  if (!updateDialog.recordType || !updateDialog.record) return null;

  return (
    <Dialog open={updateDialog.isOpen} onOpenChange={updateDialog.close}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Update {updateDialog.recordType} record</DialogTitle>
          <DialogDescription>Make changes to your record here. Click update when you&apos;re done.</DialogDescription>
        </DialogHeader>
        {updateDialog.recordType === "earning" ? (
          <EarningForm action="update" record={updateDialog.record} runAfterSubmit={updateDialog.close} />
        ) : (
          <ExpenseForm action="update" record={updateDialog.record} runAfterSubmit={updateDialog.close} />
        )}
      </DialogContent>
    </Dialog>
  );
}
