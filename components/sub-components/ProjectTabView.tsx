import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function ProjectTabView() {
  return (
    <Tabs defaultValue="account" className="w-full bg-white ">
      <TabsList className="flex text-lg rounded-none justify-between bg-white px-4 h-16 border-b border-b-slate-300">
        <TabsTrigger
          value="account"
          className="bg-white flex justify-center"
          style={{ flex: "1" }}
        >
          Tasks
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="bg-white flex justify-center"
          style={{ flex: "1" }}
        >
          Members
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="grid gap-2 px-2 pb-5"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          height: "auto",
        }}
      >
        Tasks
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
