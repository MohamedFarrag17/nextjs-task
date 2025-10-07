const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function registerUser(data) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  let res;
  try {
    res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
  } catch (err) {
    throw new Error("try again later.");
  }

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Register failed.");
  return result;
}

export async function loginUser(email, password) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  let res;
  try {
    res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
  } catch (err) {
    throw new Error("Couldn't reach server.");
  }

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Wrong password");
  return result;
}

export async function verifyAccount(token, code) {
  const formData = new FormData();
  formData.append("code", code);

  let res;
  try {
    res = await fetch(`${BASE_URL}/auth/verify-email`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw new Error("Email verification failed.");
  }

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Verification failed.");
  return result;
}

export async function getUserData(token) {
  let res;
  try {
    res = await fetch(`${BASE_URL}/auth/user-data`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    throw new Error("Couldn't get user data.");
  }

  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Failed to get user data.");
  return result;
}
