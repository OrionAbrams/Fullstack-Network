import React from "react";
import Iframe from "react-iframe"
import axios from "axios";
import quotesArray from "../assets/quotes/quotesArray"

var randomNumber = Math.round(Math.random() * quotesArray.length);
console.log(quotesArray[randomNumber])
class Lesson extends React.Component {
  state = {
    lesson: "",
    quote: quotesArray[randomNumber]
  };

  //This history allows a listen for a url change, which allows new lesson to render without refreshing page.
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change");

      var url = window.location.pathname;
      var lessonNumber = url
        .split("/") // split to an array
        .slice(-2) // take the two last elements
        .join('/') // join back to a string;
      console.log(lessonNumber);
      axios.get("/api/lesson/" + lessonNumber)

        .then(res => {
          console.log("Sent")
          console.log(res.data.lessonUrl)
          this.setState({ lesson: res.data.lessonUrl })
        })
    });
  }

  //had to put this here because couldn't go directly to a lesson with url otherwise
  componentDidMount() {
    var url = window.location.pathname;
    console.log(url)
    var lessonNumber = url
      .split("/") // split to an array
      .slice(-2) // take the two last elements
      .join('/') // join back to a string;
    console.log(lessonNumber);
    axios.get("/api/lesson/" + lessonNumber)

      .then(res => {
        console.log("Sent")
        console.log(res)
        this.setState({ lesson: res.data.lessonUrl })
      })
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div>
        <p>{this.state.quote}</p>
        <div>
          <Iframe url={this.state.lesson}
            width="100%"
            height="80vh"
            border="0"
            border-radius="4px"
            overflow="hidden"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
        </div>
      </div>
    );
  }
}

export default Lesson;

