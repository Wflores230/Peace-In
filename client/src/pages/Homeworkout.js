import React, { useEffect, useState } from "react";



const Homeworkout = (props) => {
    const [results, setResults] = useState([])

    useEffect(async () => {
        const results = await props.search("homeworkout")
        setResults(results.data)
    }, [])


    return (
        <>
            <section>
                <h2>Home Workout</h2>
                {results.map(result => (
                    <div class="content_img">
                        <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`}><img src={result.snippet.thumbnails.default.url} /></a>
                        <div>Home Workout</div>
                    </div>
                ))}
            </section>
        </>

    );
}

export default Homeworkout;
