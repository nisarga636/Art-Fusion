import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";

const Formbox = () => (
  <div className="bg-gray-500 w-[350px] h-[350px]">
  <Form.Root className="w-[260px] ">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium ml-2 leading-[35px] text-white">
          Email
        </Form.Label>
        <Form.Message
          className="text-[13px] ml-2 text-white opacity-[0.8]"
          match="valueMissing"
        >
          Please enter your email
        </Form.Message>
        <Form.Message
          className="text-[13px] ml-2 text-white opacity-[0.8]"
          match="typeMismatch"
        >
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className="box-border w-full ml-2 bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
          type="email"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] ml-2 font-medium leading-[35px] text-white">
          Question
        </Form.Label>
        <Form.Message
          className="text-[13px] text-white ml-2 opacity-[0.8]"
          match="valueMissing"
        >
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea
          className="box-border w-full ml-2 bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
          required
        />
      </Form.Control>
    </Form.Field>
      <div className="flex justify-center mb-2">
      <Form.Submit asChild>
        <Button>Post question</Button>
      </Form.Submit>
    </div>
  </Form.Root>
  </div>
);

export default Formbox;
