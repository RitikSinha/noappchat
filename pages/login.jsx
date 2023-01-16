import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const login = () => {
  return (
    <main>
      <Head>
        <title>noAppChat - login</title>
      </Head>
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
          <p className=" text-sm">Enter your credentials to login </p>
          <div className=" flex flex-col w-full h-3/4 justify-around">
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
            <button className="btn btn-primary">Login</button>
            <p className="text-sm">
              Not a member{" "}
              <Link href="/register">
                {" "}
                <bold className=" text-green-500">Sign Up</bold>{" "}
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

export default login;
