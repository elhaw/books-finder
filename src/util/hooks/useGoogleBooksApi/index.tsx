import { useState } from "react";
import { GoogleBooksAxios } from "../../api/axios-instamce";

export const useGoogleBooksApi = (resource: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  const getData = () => {
    setLoading(true);
    GoogleBooksAxios.get(resource)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setDataError(error);
        setLoading(false);
      });
  };

  return {
    data,
    loading,
    dataError,
    getData,
  };
};
