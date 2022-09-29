import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../context/TokenContext";

const useFetch = ({ link }) => {
  const [token] = useContext(TokenContext);
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/browse/" + link, {
        headers: { Authorization: "Bearer " + token?.access_token },
      })
      .then((response) => {
        if (response.data.error.status === 401) {
        } else {
          setContent(response.data);
          console.log(response);
        }
      });
  }, [token, setContent]);

  return { content };
};

export default useFetch;
