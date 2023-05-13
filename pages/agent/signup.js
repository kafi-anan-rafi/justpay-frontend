// export default function Signup() {
//   return (
//     <>
//       <form>
//         <h2>Sign up</h2>
//         <div class="grid gap-6 mb-6 md:grid-cols-2">
//           <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email address</label>
//           <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@gmail.com" required />

//           <label for="name" >Name</label> <br />
//           <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="name" name="name" placeholder="Jhon Doe" required /> <br />

//           <label for="email">Email</label> <br />
//           <input type="email" id="email" name="email" /><br />

//           <label for="password">Password</label> <br />
//           <input type="password" id="password" name="password" /><br />

//           <label for="address">Address</label> <br />
//           <input type="text" id="address" name="address" /><br />

//           <label for="phone">Phone</label> <br />
//           <input type="text" id="phone" name="phone" /><br />

//           <label for="address">Address</label> <br />
//           <input type="text" id="address" name="address" /><br />

//           <label for="img"></label>
//           <input type="file" id="img" name="img" accept="image/*"></input> <br />

//           <input type="submit" />
//         </div>
//       </form>
//     </>
//   )
// }

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SessionCheck from "@/components/SessionCheck";

export default function AddAdmin() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png"];
    if (!allowedtypes.includes(file.type)) {
      return false;
    }
  };

  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("myfile", data.myfile[0]);
    console.log(formData);

    try {
      const response = await axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Admin add successfully");
      reset();
    } catch (error) {
      console.log(error.response.data.message);
      setSuccess("Admin add unsuccessfull " + error.response.data.message);
    }
  };

  return (
    <>
      {/* <SessionCheck /> */}
      <div className="my-10">
        <section className=" ">
          <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
                </h1>
                <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400">
                  <span className="font-medium"> {success}</span>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                      required=""
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p
                        id="outlined_error_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        <span className="font-medium">Name is required</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      {...register("email", {
                        required: true,
                        pattern: /\S+@\S+\.\S+/,
                      })}
                    />
                    {errors.email && (
                      <p>
                        {errors.email.type === "required" ? (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >

                            <span className="font-medium">
                              Email is required
                            </span>
                          </p>
                        ) : (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            <span className="font-medium">
                              Invalid email address
                            </span>
                          </p>
                        )}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      {...register("password", {
                        required: true,
                        pattern: /^\d+$/,
                        minLength: 5,
                      })}
                    />
                    {errors.password && (
                      <p>
                        {errors.password.type === "required" ? (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            <span className="font-medium">
                              password is required
                            </span>
                          </p>
                        ) : (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            <span className="font-medium">
                              Invalid password pattern
                            </span>
                          </p>
                        )}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      for="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Adress
                    </label>
                    <textarea
                      id="address"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Full Adress here...."
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      type="file"
                      id="myfile"
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      {...register("myfile", {
                        required: true,
                        validate: validateFile,
                      })}
                    />
                    {errors.myfile && (
                      <p>
                        {errors.myfile.type === "required" ? (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            <span className="font-medium">
                              file is required
                            </span>
                          </p>
                        ) : (
                          <p
                            id="outlined_error_help"
                            className="mt-2 text-xs text-red-600 dark:text-red-400"
                          >
                            <span className="font-medium">invalid file</span>
                          </p>
                        )}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}