import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, error, loading };
};