import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

export default function Alert() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button intent="primary" size="lg"  onClick={() => setIsOpen(true)}>Open dialog</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Panel className="relative w-full max-w-sm p-4 mx-auto bg-white rounded">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Deactivate account
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              This will permanently deactivate your account.
            </Dialog.Description>

            <p className="mt-4 text-sm text-gray-500">
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <div className="mt-4 flex justify-end">
              <Button
                className="mr-4 text-sm font-medium text-red-600 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Deactivate
              </Button>
              <Button variant={"outline_secondary"} onClick={() => setIsOpen(false)}>Cancel</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
