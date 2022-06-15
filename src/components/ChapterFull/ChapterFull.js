import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./chapterFull.css";



function ChapterFull(){
    let params = useParams();
    
    const [state, setState] = useState({
        loaded: false
    });

    async function loadAndSetChapter(){
       
        window.scrollTo(0, 0);

       
        fetch( `${process.env.REACT_APP_API}/verses/by_chapter/${params.view}?language=en&words=true&per_page=300` )
            .then((data) => data.json())
            .then((json_data) => {
                const unpacked = json_data.verses;
                let verses = [];

                
                if( params.view !== '9' && params.view !== '1'){
                    verses.push({text: "In (the) name (of) Allah the Most Gracious the Most Merciful",
                    sub: "bis'mi l-lahi l-raḥmāni l-raḥīmi"})
                }

                
                unpacked.forEach(verse => {
                    let unpackedVerse = { text: '', sub: '' };
                    unpackedVerse.verseNumber = verse.verse_number;

                    
                    verse.words.forEach(word => {
                        if( word.translation.text ){
                            unpackedVerse.text += word.translation.text+' '
                        }
                        if( word.transliteration.text ){
                            unpackedVerse.sub += word.transliteration.text+' '
                        }
                    });
                   
                    verses.push( unpackedVerse )
                });

                
                setState({verses: verses, loaded: true});
            });
        }
    
    
    useEffect(() => {
        (async () => {
            loadAndSetChapter();
        })();
    },[]);

    
    return (
            <div>
                {state.loaded ? state.verses.map((verse) => (
                    <div className="verseCard" key={verse.verseNumber + Math.random()}>
                        <p> { verse.text } </p>
                        <p> { verse.sub } </p>
                        <p> { verse.verseNumber } </p>
                    </div>
                )): (
                        <div className="center">
                            <p> Loading ... </p>
                        </div>
                    )
                }
            </div>
        );
}

export default ChapterFull;