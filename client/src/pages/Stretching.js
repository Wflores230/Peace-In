import React, { useEffect, useState } from "react";


const Stretching = (props) => {
    const [results, setResults] = useState([])

    useEffect(async () => {
        const results = await props.search("stretching")
        console.log(results.data[0])
        setResults(results.data)
    }, [])

    return (
        <>
            <section>
                <h2>Stretching</h2>
                {results.map(result => (

                    <div class="content_img">
                        <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`}><img src={result.snippet.thumbnails.default.url} /></a>
                        <div>Stretching</div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Stretching;
