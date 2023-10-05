import React, { useState } from "react";
import { supabase } from "../utils/supabase";
import styles from "./page.module.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    const isAuth = true;
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log("data", data);
    getUserInfo(data?.user?.id as string);

    if (error) alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("data", data.session?.access_token);

    if (error) alert(error.message);
    setLoading(false);
  }

  async function getUserInfo(userId: string) {
    let { data, error } = await supabase
      .from("users")
      .select("user_id, name")
      .eq("user_id", userId);

    console.log("userId", data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.verticallySpaced}>
        <label>Email</label>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='email@address.com'
        />
      </div>
      <div className={styles.verticallySpaced}>
        <label>Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
        />
      </div>
      <div className={styles.verticallySpaced}>
        <button disabled={loading} onClick={signInWithEmail}>
          Sign in
        </button>
      </div>
      <div className={styles.verticallySpaced}>
        <button disabled={loading} onClick={signUpWithEmail}>
          Sign up
        </button>
      </div>
    </div>
  );
}
