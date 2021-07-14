import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap';


const Yoga = (props) => {

    const [results, setResults] = useState([])

    useEffect(async () => {
        const results = await props.search("yoga")
        console.log(results.data)
        setResults(results.data)
    }, [])

    return (

        <>
            <section>
                <h2>Yoga</h2>
                {results.map(result => (
                    <div class="content_img">
                        <a href={`https://www.youtube.com/watch?v=${result.id.videoId}`}><img src={result.snippet.thumbnails.default.url} /></a>
                        <div>Yoga</div>
                    </div>
                ))}
            </section>
        </>

    );
}

export default Yoga;
