"use client";

import { loginSchema } from "@/app/lib/validation/authSchema";
import { useFormik } from "formik";
import React from "react";
import Button from "../Button";

import Label from "../Label";
import Input from "../Input";
import { useMutation } from "@apollo/client";
import mutation from "@/graphql/mutations";

const LoginForm = () => {
  const [login] = useMutation(mutation.LOGIN);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const { data } = await login({
        variables: values,
      });
      console.log(data);
      await localStorage.setItem("token", data?.signin.token);
    },
  });

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <Label text="Email" as="primary" id="email" />
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            aria="input for enter email"
            as="primary"
          />
        </div>
        <div className="mb-4">
          <Label text="Password" as="primary" id="password" />
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            aria="input for enter password"
            as="primary"
          />
        </div>

        <Button text="Login" type="submit" as="primary" />
      </form>
    </div>
  );
};

export default LoginForm;
