import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Button, { ButtonExtendedProps, buttonStyles } from "./Button";

export default function Alert() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonExtended onClick={() => setIsOpen(true)}>Open dialog</ButtonExtended>
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
              <ButtonExtended
                intent="secondary"
                variant="outline"
                className="mr-4"
                onClick={() => setIsOpen(false)}
              >
                Deactivate
              </ButtonExtended>
              <ButtonExtended onClick={() => setIsOpen(false)}>Cancel</ButtonExtended>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

// Customized ButtonExtended component
export function ButtonExtended(props: ButtonExtendedProps) {
  return (
    <Button
      className={`${buttonStyles(props)} ${props.className}`}
      {...props}
    >
      <div className="pr-2">{props.leftIcon}</div>
      {props.children}
    </Button>
  );
}
