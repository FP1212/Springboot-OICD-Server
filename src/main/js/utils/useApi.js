import { useState, useEffect } from "react";
import axios from "AxiosInstance";
import { useDispatch } from "react-redux";
import { show } from "../redux/components/globalAlert/globalAlert";
import { signout } from "../redux/components/login/loginSlice";
import { HttpStatusCode } from "axios";

/**
 * Common UseApi Hook Pattern
 * @param url
 * @param skip
 * @returns {(boolean|refresh)[]}
 */
export function useApi(url, skip) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const [refreshIndex, setRefreshIndex] = useState(0);
  const dispatch = useDispatch();

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  useEffect(() => {
    if (error) {
      dispatch(
        show({
          open: true,
          showLoading: false,
          severity: "error",
          message: error.message,
        }),
      );
    }
  }, [error]);

  useEffect(() => {
    let cancelled = false;
    if (skip) {
      setResult(null);
      setLoading(false);
      setLoaded(false);
    } else {
      setLoading(true);

      axios
        .get(url)
        .then((r) => {
          if (!cancelled) {
            setResult(r.data);
            setLoading(false);
            setLoaded(true);
          }
        })
        .catch((error) => {
          setLoading(false);
          if (error.response) {
            setError(error.response.data);
          } else {
            setError(error.message);
          }
        });
    }
    return () => {
      cancelled = true;
    };
  }, [url, refreshIndex]);

  return [result, loading, loaded, error, refresh, setResult];
}
