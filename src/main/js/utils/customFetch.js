import { useState, useEffect } from 'react';
import axios from '../configuration/axios-config';
import PropTypes from 'prop-types';

/**
 * Common UseApi Hook Pattern
 * @param url
 * @param method
 * @param body
 * @param headers
 * @param skip
 * @param onSuccess
 * @param onError
 * @returns {(boolean|refresh)[]}
 */
const customFetch = ({
  url = '',
  method = 'GET',
  body = {},
  headers = {},
  skip = false,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  useEffect(() => {
    let cancelled = false;
    if (skip) {
      onSuccess({});
      setLoading(false);
    } else {
      setLoading(true);

      axios({
        url,
        method,
        data: method !== 'GET' ? body : {},
        params: method === 'GET' ? body : {},
        headers,
      })
        .then((response) => {
          if (!cancelled) {
            onSuccess(response.data);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          onError(error);
        });
    }
    return () => {
      cancelled = true;
    };
  }, [url, refreshIndex]);

  return [loading, refresh];
};

customFetch.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object,
  headers: PropTypes.object,
  skip: PropTypes.bool,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

export default customFetch;
