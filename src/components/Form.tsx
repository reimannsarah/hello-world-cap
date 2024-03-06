'use client'

import React from "react";
import { useAppDispatch } from "../lib/hooks";
import { setUser } from "../lib/features/user/userSlice";
import { useRouter } from "next/navigation";

const Form = () => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName') as string;
    dispatch(setUser(userName));
    router.push("/welcome");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" />
        </form>
    </div>
  );
};

export default Form;
