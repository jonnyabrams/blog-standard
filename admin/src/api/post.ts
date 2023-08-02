import client from "./client";

export const getPosts = async (pageNumber: number, limit: number) => {
  try {
    const { data } = await client(
      `/posts/latest-posts?pageNumber=${pageNumber}&limit=${limit}`
    );

    return data;
  } catch (error: any) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
