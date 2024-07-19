import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogin } from "../redux/Slice/logInSlice";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user } = useSelector((s) => s.login);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userUrl, setUserUrl] = useState("");

  console.log(userName);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const massage = () => {
    toast.error("🚫 The password is incorrect, try again!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setUserUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const userLog = () => {
    if (userPassword === "123") {
      const newUser = {
        id: Date.now(),
        name: userName,
        email: userEmail,
        mobile: userMobile,
        password: userPassword,
        url: userUrl,
      };
      setUserName("");
      setUserEmail("");
      setUserMobile("");
      setUserPassword("");
      nav("/");
      return dispatch(addLogin(newUser));
    } else {
      massage();
    }
  };
  return (
    <div id="">
      <div className="container">
        <div className=" flex items-center justify-center flex-col gap-10 p-9 ">
          <div>
            {user.url ? (
              <img className="w-[200px] h-[200px]" src={user.url} alt="img" />
            ) : (
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6 w-[450px]">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={onChange}
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                  />
                </label>
              </div>
            )}
          </div>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="text-xl font-bold border-2 px-24 py-4 rounded-xl outline-none bg-transparent text-white "
            type="text"
            placeholder="Name:"
          />
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            className="text-xl font-bold border-2 px-24 py-4 rounded-xl outline-none bg-transparent text-white "
            type="text"
            placeholder="Email:"
          />
          <input
            onChange={(e) => setUserMobile(e.target.value)}
            value={userMobile}
            className="text-xl font-bold border-2 px-24 py-4 rounded-xl outline-none bg-transparent text-white "
            type="number"
            placeholder="Mobile No.:"
          />
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            className="text-xl font-bold border-2 px-24 py-4 rounded-xl outline-none bg-transparent text-white "
            type="password"
            placeholder="Password:"
          />
          <button
            onClick={() => userLog()}
            className="w-[180px] h-[50px] border-2 text-pink-600 rounded-xl"
          >
            Buy Now
          </button>
        </div>
        <ToastContainer />
      </div>
      <h1 className="border-y-2  text-white mt-40"> </h1>
    </div>
  );
};

export default Login;
