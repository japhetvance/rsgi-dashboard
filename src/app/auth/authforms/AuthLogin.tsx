"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const AuthLogin = () => {
  const { data: session } = useSession();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (result?.error) {
      // Handle successful sign-in
      setError(result.error);
    }
  };
  if (session) {
    return redirect("/");
  }

  return (
    <>
          {error ? (
        <div className="mt-4">
          <Alert
            color={"lighterror"}
            icon={() => (
              <Icon
                icon="solar:info-circle-outline"
                className="me-3"
                height={20}
              />
            )}
          >
            Sign-in error: Username or Password is Wrong
          </Alert>
        </div>
      ) : (
        ""
      )}
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            sizing="md"
            value={username}
            className={`form-control ${ error !== "" ? 'error-border' : '' }`}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" value="Password" />
          </div>
          <TextInput
            id="userpwd"
            type="password"
            sizing="md"
            className={`form-control ${ error !== "" ? 'error-border' : '' }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox color="primary" id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className=" font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link href={"/auth/auth1/forgot-password"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button color={"primary"} type="submit" className="bg-primary hover:bg-primaryemphasis text-white rounded-md w-full">
          Sign in
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
