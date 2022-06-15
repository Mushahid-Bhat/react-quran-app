import React from "react";
import { Link } from "react-router-dom";
import "./Chapter.css";



class ChapterItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chapter: props.chapter,
            scrollPos: null
        }
    }

    componentDidMount(){
       
        const POS = localStorage.getItem('POS');
        if( POS ){
            window.scrollTo(0, POS);
        }
    }

    render(){
        return(
           
            <Link to={`/view/${this.state.chapter.id}`} onClick={() => {
                localStorage.setItem('POS', window.scrollY);
            }}>
                <div className="chapterItemCard">
                    <h2>{this.state.chapter.name_arabic} </h2>
                    <p> {this.state.chapter.name_simple} </p>
                    <p> {this.state.chapter.revelation_place} </p>
                    <p> {this.state.chapter.verses_count} verses </p>
                </div>
            </Link>
        );
    }
}

export default ChapterItem;
