import api from "./api";
export const getQuestions = async () => {
  const res = await api.get("/getQuestions");
  return res.data;
};