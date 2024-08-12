"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: session?.user?.image,
    job: "",
    userSlug: session?.user?.name.replace(/\s+/g, "-").toLowerCase() || "",
    phone: "",
    homeAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        throw new Error("Failed to register user");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
                    {[
                      {
                        label: "Name",
                        id: "name",
                        type: "text",
                        placeholder: "John Doe",
                        required: true,
                      },
                      {
                        label: "Email",
                        id: "email",
                        type: "email",
                        placeholder: "johndoe@example.com",
                        required: true,
                      },
                      {
                        label: "Phone Number",
                        id: "phone",
                        type: "tel",
                        placeholder: "+212-604569874",
                      },
                      {
                        label: "Username",
                        id: "userName",
                        type: "text",
                        placeholder: "example-name",
                        required: true,
                      },
                      {
                        label: "Job",
                        id: "job",
                        type: "text",
                        placeholder: "Your job",
                      },
                      {
                        label: "Home Address",
                        id: "homeAddress",
                        type: "text",
                        placeholder: "Home address",
                      },
                    ].map((input) => (
                      <div className="mb-6" key={input.id}>
                        <label
                          className="block text-gray-800 font-bold mb-2"
                          htmlFor={input.id}
                        >
                          {input.label}
                        </label>
                        <input
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={input.id}
                          type={input.type}
                          placeholder={input.placeholder}
                          value={formData[input.id]}
                          required={input.required}
                        />
                      </div>
                    ))}
                    <button
                      className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "loading" : "submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div>
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
