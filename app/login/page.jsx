"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/authContext";

const Page = () => {
  const router = useRouter();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await axios.post("/api/auth/login", formData);
      if (data.message === "Login Successfull") {
        dispatch({ type: "LOGIN_SUCCESS", payload: data?.userInfo });
        router.push(`/admin/playlist?q=${data?.userInfo?.token}`);
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: `${data.message}` },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="border border-red-500 p-3"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="border border-red-500 p-3"
      />

      <button
        disabled={loading}
        type="submit"
        className="border bg-green-500 p-3 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Page;
