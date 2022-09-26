import axios from "axios";

const Callback = () => {
  const code = new URL(document.location).searchParams.get("code");

  axios
    .post("/.netlify/functions/token", JSON.stringify({ code }))
    .then((response) => console.log(response));
  return null;
};

export default Callback;
