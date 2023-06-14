"use client";
import { Field, Formik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  role: "",
  name: "",
  age: "",
  phoneNo: "",
};

const schema = Yup.object().shape({
  userId: Yup.string().required("required field !"),
  password: Yup.string().required("required field !"),
});

export default function page() {
  const roleoptions = ["Artist", "Production Owner"];
  const { data } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="sm:block">
        <img
          className="w-full h-full object-cover" /* https://images.unsplash.com/photo-1611425143678-08fc480cafde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDM4fHxjYW1lcmElMjBjcmV3fGVufDB8fHx8MTY4NjE0NzQxOHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450 */
          src="https://images.unsplash.com/photo-1496559249665-c7e2874707ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDF8fG1hbiUyMHJlY29yZGluZyUyMHdpdGglMjBjYW1lcmF8ZW58MHx8fHwxNjg2MTQ3ODYyfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
          alt=""
        />
      </div>

      <div className="bg-white flex flex-col justify-center">
        <div className=" w-full h-fit overflow-y-scroll bg-white p-8 px-8">
          <div className="px-28 flex flex-col">
            {error && (
              <div className="px-3 text-center animate-fade-in py-2 bg-red-300 text-red-700 text-md rounded-md">
                <span>Something went wrong !</span>
              </div>
            )}
          </div>
          <h1 className=" text-3xl mt-7  dark:text-black font-bold text-center">
            {/* <pre>{JSON.stringify(session)}</pre> */}
            Welcome to Art Fusion
          </h1>
          <h2 className="text-xl  mt-7 dark:text-black font-semibold text-center">
            There is few steps left to enter Art Fusion
          </h2>
          <div className="text-sm p-28 flex flex-col text-black py-6">
            <label>Email</label>
            <input
              name={"userId"}
              type={"select"}
              value={data?.user && data?.user!.email!}
              className={"p-2 rounded-lg w-full bg-gray-200 mt-1"}
            />
          </div>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values) => {}}
          >
            {({ values, touched, errors, handleSubmit, ...props }) => {
              return (
                <>
                  <div className="text-sm p-28 flex flex-col text-black py-6">
                    <label>Select Role</label>
                    <Field
                      {...props}
                      name={"role"}
                      as={"select"}
                      className={"p-2 rounded-lg w-full bg-gray-300 mt-1"}
                    >
                      <option disabled selected value={""}>
                        Select Role Type
                      </option>
                      <option value={"ARTIST"}>Artist</option>
                      <option value={"PROD_OWNER"}>Production</option>
                    </Field>
                    {touched.role && errors.role && (
                      <span className="text-sm text-red-500 p-1">
                        {errors.role}
                      </span>
                    )}
                  </div>
                  <div className="text-sm  p-28 flex flex-col text-black py-0">
                    <label>Full Name/Production Name</label>
                    <Field
                      {...props}
                      name={"password"}
                      className=" p-2 rounded-lg bg-gray-300 mt-1"
                    />
                    {touched.name && errors.name && (
                      <span className="text-sm text-red-500 p-1">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="text-sm  p-28 flex flex-col text-black py-0">
                    <label>Phone number</label>
                    <Field
                      {...props}
                      name={"phoneNo"}
                      className=" p-2 rounded-lg bg-gray-300 mt-1"
                    />
                    {touched.phoneNo && errors.phoneNo && (
                      <span className="text-sm text-red-500 p-1">
                        {errors.phoneNo}
                      </span>
                    )}
                  </div>
                  <div className="text-sm  p-28 flex flex-col text-black py-0">
                    <label>Age</label>
                    <Field
                      {...props}
                      name={"phone_no"}
                      className=" p-2 rounded-lg bg-gray-300 mt-1"
                      type="age"
                    />
                    {touched.age && errors.age && (
                      <span className="text-sm text-red-500 p-1">
                        {errors.age}
                      </span>
                    )}
                  </div>
                  <div className="text-sm  p-28 flex flex-col text-black py-0">
                    <label>Age</label>
                    <Field
                      {...props}
                      name={"phone_no"}
                      className=" p-2 rounded-lg bg-gray-300 mt-1"
                      type="age"
                    />
                    {touched.age && errors.age && (
                      <span className="text-sm text-red-500 p-1">
                        {errors.age}
                      </span>
                    )}
                  </div>

                  <div className="px-28 flex py-2 ">
                    <button
                      onClick={() => handleSubmit()}
                      className="w-full py-2 bg-blue-700 shadow-lg shadow-blue-700 hover:shadow-gray-500 hover:border-2 border-gray-700   hover:bg-gray-50  hover:text-blue-700 text-white font-semibold rounded-lg"
                    >
                      Create
                    </button>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
