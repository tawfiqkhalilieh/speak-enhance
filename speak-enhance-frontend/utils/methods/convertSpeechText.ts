import axios from "axios";

async function uploadMp3ToServer(url: string, file: any): Promise<string> {
  console.log(file);

  const formData = new FormData();

  formData.append("language", "en");
  formData.append("modelSize", "base.en");
  formData.append("device", "cpu");
  formData.append("sourceUrl", "");
  formData.append("file", file);
  formData.append("fileName", "test.wav");

  const response = await axios.post(
    "http://localhost:8082/api/transcriptions",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  // get data and return it

  return "This is the prompt I gave to thhe model!";
}

export default uploadMp3ToServer;
