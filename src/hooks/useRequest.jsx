import { useEffect, useState } from "react";
import axios from "axios";

const useRequest = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1${path}`
        );
        setData(response);
        setLoading(false);
        setError("");

      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, [path]);

  return [loading, data, error ,setData];
};

export default useRequest;
