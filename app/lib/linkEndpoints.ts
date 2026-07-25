import apiClient from "./apiClient";

interface ShortenResponse {
  shortCode: string;
  originalLink: string;
  clicked: number;
  createdAt: string;
}

export const shortenLink = async (originalLink: string) => {
  try {
    const res = await apiClient.post<ShortenResponse>("/shorten", {
      originalLink,
    });
    return {
      ok: true,
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};

export const redirectLink = async (shortCode: string) => {
  try {
    const res = await apiClient.get(`/${shortCode}`);
    return {
      ok: true,
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};
