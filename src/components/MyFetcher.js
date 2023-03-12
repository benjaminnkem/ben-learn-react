import {useEffect, useState} from "react";

const useMyFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            setError(true)
            setIsPending(false)
          }
          return res.json()
        }).then((data) => {
        setIsPending(false);
        setError(false);
        setData(data);
      }).catch((err) => {
        setError(true)
        setIsPending(false)
      })
    }, 500)
  }, [url])

  return {data, isPending, error, setData};
};

export default useMyFetch;
