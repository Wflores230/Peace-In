import React, { useEffect, useState } from "react";


const Meditation = (props) => {
    const [results, setResults] = useState([])

    useEffect(async () => {
        const results = await props.search("meditation")
        setResults(results.data)
    }, [])

    return (
        <>
            <section>
                <h2>Meditation</h2>
                {results.map(result => (
                    <div class="content_img">
                        <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`}><img src={result.snippet.thumbnails.default.url} /></a>
                        <div>Meditation</div>
                    </div>
                ))}
            </section>
        </>

    );
}

export default Meditation;
