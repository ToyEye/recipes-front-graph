import React from "react";
import Section from "../Section/Section";
import Heading from "../Heading/Heading";

const Register = () => {
  return (
    <Section type="hero">
      <div className="container mx-auto">
        <Heading className="text-3xl font-bold mb-4" text="Register" />
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="confirm-password"
                placeholder="Confirm your password"
                type="password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Register;
