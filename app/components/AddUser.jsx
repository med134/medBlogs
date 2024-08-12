"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const session = useSession();
  const router = useRouter();

  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newJob, setJob] = useState("");
  const [newHomeAddress, setHomeAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const addUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const name = newName;
    const email = newEmail;
    const phone = newPhone;
    const imageUrl = session?.data?.user?.image;
    const userSlug = session?.data?.user?.name
      .replace(/\s+/g, "-")
      .toLowerCase();
    const job = newJob;
    const homeAddress = newHomeAddress;
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          imageUrl,
          job,
          userSlug,
          phone,
          homeAddress,
        }),
      });
      if (response.ok) {
        setSuccess(true);
        router.push("/dashboard");
      } else {
        throw new Error("Failed to register user");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center">
      <div className="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex justify-between items-center p-6">
          <div className="mt-12 flex flex-col items-center lg:block">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full px-6 py-8 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Start to Create Account
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Please fill out the form below to complete your account.
                  </p>
                  <form className="mt-6" onSubmit={addUser}>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && (
                      <p className="text-light bg-green-500 mb-4 px-6 py-2 rounded-md">
                        user is success created
                      </p>
                    )}
                    <div className="mb-6">
                      <label
                        className="block text-gray-800 font-bold mb-2"
                        htmlFor="name"
                        aria-required
                      >
                        Name
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        aria-required
                        value={newName}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-800 font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        aria-required
                        value={newEmail}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-800 font-bold mb-2"
                        htmlFor="phone_Number"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone_Number"
                        type="tel"
                        placeholder="+212-604569874"
                        value={newPhone}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-800 font-bold mb-2"
                        htmlFor="job"
                      >
                        your Job
                      </label>
                      <input
                        onChange={(e) => setJob(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="job"
                        type="text"
                        placeholder="you job"
                        value={newJob}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-800 font-bold mb-2"
                        htmlFor="home_address"
                      >
                        Home Address
                      </label>
                      <input
                        onChange={(e) => setHomeAddress(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="home_address"
                        type="text"
                        placeholder="home address"
                        value={newHomeAddress}
                      />
                    </div>

                    <button
                      className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "loading..." : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <Image
              src="https://res.cloudinary.com/djcnq7nmj/image/upload/v1723462080/ux-bro_i2spkf.png"
              className="w-full h-full object-cover"
              alt="create user"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
