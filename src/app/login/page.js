import React from "react";

import ButtonBase from "../components/ButtonBase";
import Label from "../components/Label";
import Input from "../components/Input";
import Link from "next/link";

export const metadata = {
  title: "Log In",
};

export default function Login() {
  return (
    <div>
      <div className="flex w-full h-screen justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h5>
            <div>
              <Label className="...">Username</Label>
              <Input
                id="username"
                type="text"
                disable={false}
                required={true}
                nameClass="..."
              />
            </div>
            <div>
              <Label className="...">Password</Label>
              <Input
                id="password"
                type="password"
                disable={false}
                required={true}
                nameClass="..."
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <Label className="ml-2">Remember me</Label>
              </div>
              <Link
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                Lost Password?
              </Link>
            </div>
            <ButtonBase className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Log In
            </ButtonBase>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <Link
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
