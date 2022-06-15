import React from "react";
import ChapterItem from "../ChapterItem/Chapter";
import "./Home.css";



class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chapters: []
        }
    }

    componentDidMount(){
        
        fetch( `${process.env.REACT_APP_API}/chapters/` )
            .then((data) => data.json())
            .then((json_data) => {
               
                this.setState({
                    chapters: json_data.chapters
                })
            });
    }

    render() {
        return(
            <div className="Home">
                
                
                {this.state.chapters.map((chapter) => (
                    <ChapterItem chapter={chapter} key={chapter.id}/>
                ))}
            </div>
        );
    }
}

export default Home;
