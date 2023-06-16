import React from "react";
import Form from "../components/ui/form";
import { contactSchema } from "../utils/schemas";
import Input from "../components/ui/input";
import { Form as FormikForm } from "formik";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const ContactPage = () => {
  const handleSubmit = () => console.log("Contact Page");
  return (
    <div className="w-full max-w-[86rem] min-h-screen mx-auto px-8 sm:px-4 flex flex-col pt-20 items-center justify-center">
      <div className="w-full max-w-md px-4 py-2 bg-white rounded-md shadow-md flex flex-col">
        <div className="text-lg font-bold text-slate-900 self-center my-2">
          Register Form
        </div>
        <Form
          initial={initialValues}
          schema={contactSchema}
          submit={handleSubmit}
        >
          {({
            isValid,
            isSubmitting,
            handleBlur,
            handleChange,
            errors,
            values,
            touched,
            handleSubmit,
          }) => (
            <FormikForm className="space-y-5">
              <Input
                name={"name"}
                type={"name"}
                error={errors.name}
                label={"Client Name"}
                onBlur={handleBlur}
                placeholder={"Enter your name "}
                setValue={handleChange}
                value={values.name}
                touched={touched.name}
              />
              <Input
                name={"email"}
                type={"email"}
                error={errors.email}
                label={"Email Address"}
                onBlur={handleBlur}
                placeholder={"Enter your Email address"}
                setValue={handleChange}
                value={values.email}
                touched={touched.email}
              />
              <Input
                name={"phone"}
                type={"phone"}
                error={errors.phone}
                label={"Phone Number"}
                onBlur={handleBlur}
                placeholder={"Enter your phone number"}
                setValue={handleChange}
                value={values.phone}
                touched={touched.phone}
              />
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-slate-900 hover:bg-slate-800"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </FormikForm>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
