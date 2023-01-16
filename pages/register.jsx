import React from "react";
import Image from "next/image";
import Link from "next/link";
const register = () => {
  return (
    <main>
      <div className="mt-5">
        <Image
          className="mx-auto"
          alt="logo"
          src={"/logo.png"}
          width="200"
          height="100"
        />
      </div>
      <div className="card w-3/4 my-10  bg-base-100 shadow-xl flex mx-auto justify-around flex-row">
        <div className="mt-5">
          <h1 className=" text-2xl font-medium">Welcome to noAppChat</h1>
          <p className=" text-sm">Enter your details to Register </p>
          <div className=" flex flex-col w-full h-3/4 justify-around">
            <input
              type="text"
              placeholder="full name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary">Sign Up</button>
            <p className="text-sm">
              Already a member{" "}
              <Link href="/login">
                {" "}
                <bold className=" text-green-500">Login</bold>
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Image alt="logo" src={"/hand.png"} width="400" height="100" />
        </div>
      </div>
    </main>
  );
};

export default register;
