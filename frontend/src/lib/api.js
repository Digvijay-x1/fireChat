import axiosInstance from "./axios";

export const signup = async (data) => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response.data;
};

export const login = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const completeOnboarding = async (data) => {
  const res = await axiosInstance.post("/auth/onboarding", data);
  return res.data;
};


export const getUserFriends = async( ) => {
  const res = await axiosInstance.get("/users/friends")
  return res.data;
}

export const getRecommendedUsers = async( ) => {
  const res = await axiosInstance.get("/users/")
  return res.data;
}


export const getOutgoingFriendReqs = async( ) => {
  const res = await axiosInstance.get("/users/outgoing-friend-requests")
  return res.data;
}

export const sendFriendRequest = async (userId) => {
  const res = await axiosInstance.post(`/users/friend-request/${userId}`)
  return res.data;
}