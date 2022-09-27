import axios from "axios";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import TokenContext from "../context/TokenContext";

const Callback = () => {
  var [token, setToken] = useContext(TokenContext);
  const code = new URL(document.location).searchParams.get("code");

  useEffect(
    function () {
      axios
        .post(".netlify/functions/token", JSON.stringify({ code }))

        .then((response) => {
          setToken(response.data);
          Navigate("/featured");
        });
    },
    [setToken, code]
  );
  return null;
};

export default Callback;
