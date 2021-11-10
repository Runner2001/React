import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (res.ok !== true) {
                        throw Error(`Cant't Fetch Data From the Server`)
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                }, 1000)
                .catch(err => {
                    setError(err.message);
                    setLoading(false)
                })
        }, 500)
    }, [url]);

    return { data, loading, error }
}

export default useFetch