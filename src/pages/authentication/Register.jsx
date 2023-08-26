/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";

const Register = () => {
  // const [register, { data: UserLoggedInData, isError }] = useRegisterMutation();

  const navigate = useNavigate();

  // const formik = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  //   validationSchema: Yup.object({
  //     // off anything if it is not required
  //     firstName: Yup.string().required("Please Enter First Name"),
  //     lastName: Yup.string().required("Please Enter Last Name"),
  //     email: Yup.string().required("Please Enter Email"),
  //     phone: Yup.string().required("Please Enter Phone"),
  //     password: Yup.string().required("Please Enter Password"),
  //     // must have same value as password field
  //     confirmPassword: Yup.string()
  //       .required("Please Enter Confirm Password")
  //       .oneOf([Yup.ref("password"), null], "Passwords must match"),
  //   }),
  //   onSubmit: (values) => {
  //     const user = {
  //       name: values.name,
  //       email: values.email,
  //       phone: values.phone,
  //       password: values.password,
  //       confirmPassword: values.confirmPassword,
  //     };
  //     // save new order
  //     register(user);
  //     formik.resetForm();
  //   },
  //   //  toggle();
  // });

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   formik.handleSubmit();
  // };

  // useEffect(() => {
  //   if (isError) {
  //     alert("Something went wrong");
  //   }
  //   if (UserLoggedInData?.data?.accessToken) {
  //     navigate("/dashboard");
  //   }
  // }, [UserLoggedInData, isError, navigate]);

  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);

  const startRegister = () => {
    if (phone.length !== 11) {
      alert("Please enter a valid phone number");
      return;
    }
    if (phone === "") {
      alert("Please enter a valid phone number");
      return;
    }

    setOtpSuccess(true);

    // sessionStorage.setItem(
    //   "authUser",
    //   JSON.stringify({
    //     accessToken: "1234567890",
    //     user: true,
    //   })
    // );
    // dispatch(
    //   userLoggedIn({
    //     accessToken: "1234567890",
    //     user: true,
    //   })
    // );
    // navigate("/dashboard");
  };

  const [reg, setReg] = useState(false);

  const handleOtp = (e) => {
    e.preventDefault();
    setReg(true);
    setOtpSuccess(false);
  };

  const handleReg = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "authUser",
      JSON.stringify({
        accessToken: "1234567890",
        user: true,
      })
    );
    dispatch(
      userLoggedIn({
        accessToken: "1234567890",
        user: true,
      })
    );
    navigate("/dashboard");
  };

  return (
    <div className="">
      {!otpSuccess && !reg && (
        <section className="container mx-auto flex flex-col md:flex-row px-5 pt-5 justify-center gap-10 md:h-screen items-center">
          <div>
            <h3 className="text-3xl font-medium">Control your</h3>
            <h2 className="text-5xl font-bold text-[#0046FF] mb-12">
              Station at a place
            </h2>
            <div className="md:w-4/5 flex gap-1 items-center border-2 border-[#0046FF] rounded-2xl py-5 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
              >
                <path
                  d="M22 13.4444C22 14.0928 21.7425 14.7145 21.284 15.1729C20.8256 15.6313 20.2039 15.8889 19.5556 15.8889H2.44444C1.79614 15.8889 1.17438 15.6313 0.715961 15.1729C0.257539 14.7145 0 14.0928 0 13.4444V2.44444C0 1.79614 0.257539 1.17438 0.715961 0.715961C1.17438 0.257539 1.79614 0 2.44444 0H19.5556C20.2039 0 20.8256 0.257539 21.284 0.715961C21.7425 1.17438 22 1.79614 22 2.44444V13.4444Z"
                  fill="#006A4D"
                />
                <path
                  d="M11 12.2222C13.3626 12.2222 15.2778 10.307 15.2778 7.94443C15.2778 5.58188 13.3626 3.66666 11 3.66666C8.63745 3.66666 6.72222 5.58188 6.72222 7.94443C6.72222 10.307 8.63745 12.2222 11 12.2222Z"
                  fill="#F42A41"
                />
              </svg>
              <p className="text-gray-600 border-r-2 border-gray-400 pr-3 mr-3">
                +88
              </p>
              <input
                className="outline-none bg-transparent text-gray-600"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-5 md:w-4/5">
              <button
                className="text-2xl font-semibold text-white bg-[#0046FF] hover:bg-blue-800 py-5 px-16 rounded-2xl"
                onClick={startRegister}
              >
                Register
              </button>
              <div className="flex items-center justify-center">
                <p>
                  Already have an account?
                  <span>
                    <a className="text-[#0046FF]" href="login.index">
                      Login
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/4">
            <img src="./images/car.jpeg" alt="" />
          </div>
        </section>
      )}
      {otpSuccess && !reg && (
        <section className="max-w-[1920px] mx-auto flex flex-col lg:flex-row justify-center items-center pt-5 lg:pt-0 lg:max-h-screen">
          <div className="md:w-3/6 flex justify-center">
            <form onSubmit={handleOtp}>
              <p className="text-lg font-medium text-[#989898]">Enter OTP</p>
              <div className="flex gap-5">
                <input
                  className="border-2 w-[80px] border-[#0046FF] text-4xl font-medium py-4 px-7 text-center outline-none rounded-2xl"
                  type="text"
                  required
                />
                <input
                  className="border-2 w-[80px] border-[#0046FF] text-4xl font-medium py-4 px-7 text-center outline-none rounded-2xl"
                  type="text"
                  required
                />
                <input
                  className="border-2 w-[80px] border-[#0046FF] text-4xl font-medium py-4 px-7 text-center outline-none rounded-2xl"
                  type="text"
                  required
                />
                <input
                  className="border-2 w-[80px] border-[#0046FF] text-4xl font-medium py-4 px-7 text-center outline-none rounded-2xl"
                  type="text"
                  required
                />
              </div>
              <button
                className="py-5 px-36 bg-[#0046FF] rounded-3xl my-6 text-white text-2xl font-semibold"
                type="submit"
              >
                Submit
              </button>
              <p className="text-lg font-medium text-center">
                Resend OTP in
                <a
                  className="text-[#0046FF] text-lg font-bold underline"
                  href="#"
                >
                  00:29
                </a>
              </p>
            </form>
          </div>
          <div className="md:w-3/6 lg:max-h-[1080] pt-5 lg:pt-0">
            <div className="h-[50vh]">
              <img
                className="w-full h-full object-cover object-center"
                src="./images/computer.png"
                alt=""
              />
            </div>
            <div className="bg-[#0046FF] max-h-fit lg:h-[50vh] text-white pl-[10%] pb-5 pt-16 pr-[4%]">
              <h2 className="text-4xl font-semibold">Access from anywhere</h2>
              <p className="text-lg font-medium max-w-[640px]">
                You can access to your account from anywhere in the world. An
                admin of todaroko can handle the fuel station even he is not in
                the station. He can track the sales, employee info etc.
              </p>

              <div className="flex items-center gap-2 mt-8">
                <a className="text-lg font-bold" href="">
                  {" "}
                  Next
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                >
                  <path
                    d="M1 14L7 7.5L1 1"
                    stroke="#DFDFDF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex gap-3 ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="8"
                    viewBox="0 0 45 8"
                    fill="none"
                  >
                    <path
                      d="M4 4H41"
                      stroke="white"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="8"
                    viewBox="0 0 18 8"
                    fill="none"
                  >
                    <path
                      d="M4 4L14 4"
                      stroke="#6790F8"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="8"
                    viewBox="0 0 18 8"
                    fill="none"
                  >
                    <path
                      d="M4 4L14 4"
                      stroke="#6790F8"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="8"
                    viewBox="0 0 18 8"
                    fill="none"
                  >
                    <path
                      d="M4 4L14 4"
                      stroke="#6790F8"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {reg && (
        <main className="lg:bg-[#0046FF]">
          <section className="lg:w-[40%] py-[5%] rounded-2xl mx-auto  bg-white flex justify-center items-center">
            <form onSubmit={handleReg}>
              <div className="max-w-[400px] mx-auto py-16">
                <div>
                  <h4 className="text-lg font-medium text-[#0046FF]">
                    Company Name
                  </h4>
                  <div className="flex gap-4 border-2 border-[#0046FF] py-5 pl-7 rounded-2xl mt-2 mb-8">
                    <img src="./images/Vector.svg" alt="" />
                    <input
                      className="text-lg font-medium text-[#0046FF] focus:outline-none"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#0046FF]">Domain</h4>
                  <div className="flex gap-4 justify-end border-2 border-[#0046FF] rounded-2xl pl-7 mt-2 mb-8">
                    <input
                      className="outline-none w-4/5 text-[#0046FF]"
                      type="text"
                      required
                    />
                    <button className="bg-[#E5E1E1] text-lg font-medium py-5 px-11 rounded-2xl">
                      .todarok.com
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#0046FF]">
                    Location
                  </h4>
                  <div className="flex gap-3">
                    <div className="w-2/5 flex justify-between border-2 border-[#0046FF] py-5 px-7 rounded-2xl mt-2 mb-9">
                      <input
                        className="w-10/12 outline-none text-lg font-medium"
                        type="text"
                        placeholder="Division"
                        required
                      />
                      <img src="./images/Polygon 4.svg" alt="" />
                    </div>
                    <div className="w-3/5 flex justify-between border-2 border-[#0046FF] py-5 px-7 rounded-2xl mt-2 mb-9">
                      <input
                        className="w-3/4 outline-none text-lg font-medium"
                        type="text"
                        placeholder="District"
                        required
                      />
                      <img src="./images/Polygon 4.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-[#0046FF] py-5 pl-7 rounded-2xl mt-2 mb-8">
                  <input
                    className="outline-none text-[#0046FF]"
                    type="text"
                    placeholder="Address (Optional)"
                    required
                  />
                </div>
                {/* <div className="flex justify-center border-2 border-dashed border-[#989898] bg-[#F3F3F3] rounded-2xl py-5 my-8">
                  <label htmlFor="file">Chose File</label>
                  <img src="./images/Vector-1.svg" alt="" />
                  <input
                    className="text-2xl bg-[#F3F3F3] w-2/4 ml-2 outline-none font-semibold text-[#989898]"
                    type="text"
                    placeholder="Add your Logo"
                  />
                </div> */}
                <button
                  type="submit"
                  className="text-2xl text-white font-semibold py-5 w-full bg-[#0046FF] rounded-3xl"
                >
                  Let’s Go
                </button>
              </div>
            </form>
          </section>
        </main>
      )}
    </div>
  );
};

export default Register;
