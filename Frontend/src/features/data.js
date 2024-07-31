import { useCallback, useState, useEffect } from "react"

export const useFetch = (url, deps = [], opts = null) => {
    const [data, setData] = useState();
    const [state, setState] = useState('loading');
    const [iteration, setIteration] = useState(0);

    const loadData = useCallback(async () => {
        const res = await fetch(url);
        if (!res.ok)
            throw Error(`Request to ${url} failed`);

        const data = await res.json();
        setData(data);
    }, deps);

    useEffect(() => {
        setState('loading');
        loadData()
            .then(() => setState('ready'))
            .catch(() => setState('error'));
    }, [...deps, iteration]);

    const reloadData = () => setIteration(x => x + 1);

    return {
        data,
        state,
        isLoading: state === 'loading',
        reloadData,
    };
}