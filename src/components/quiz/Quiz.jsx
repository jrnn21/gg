import React, { Component } from "react";
import "./styles/Quiz.css";
import Sidebar from "./Sidebar";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import QuizBody from "./QuizBody";
import quizs from "./Models/quiz";
import course from "./Models/course";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Result from "./Result";

class Quiz extends Component {
  constructor(props) {
    super();

  }
  state = {
    quiz: [],
    courses: [],
    score: 0,
    response: 0,
  };

  getQuiz() {
    this.setState({
      quiz: quizs,
      courses: course,
    });
  }
  componentDidMount() {
    this.getQuiz();
  }
  computeAnswer(answer, correct) {
    if (answer === correct) {
      this.setState({
        score: this.state.score + 1,
      });
      this.setState({
        response: this.state.response + 1,
      });
    }
    this.setState({
      response:
        this.state.response < this.state.quiz.length
          ? this.state.response + 1
          : this.state.quiz.length,
    });
  }
  playAgain = () => {
    this.setState({
      score: 0,
      response: 0,
    });
  };


  render() {
    const courseId = this.props.match.params.quizId;
    let quizs = '';
     quizs = this.props.quizs;


     if(courseId){
      // quizs = quizs.filter(quiz =>quiz.cid === courseId);
      console.log(courseId);
     quizs = [];
      // if(quizs===undefined){
      //   quizs =[]
      // }
     }

    const courses = this.props.courses;
    return (
      <Router>
        <div className="quiz">
          <Sidebar courses={courses} />
          <Switch>
            <Route path="/quiz/:quizId">
              <div className="body">

                {quizs &&
                  // this.state.response < this.state.quiz.length &&
                  quizs.map(({ question, answer, choices, id }) => (
                 
                  <div className="quiz">
                    <h3>{question}</h3>
                  {choices.map(choice=>(
                    <h4>
                      {choice}
                    </h4>
                  ))}
                  </div>
                 
                    
    ))}
              </div>
              {/* {this.state.response === this.state.quiz.length && (
                <Result
                  score={this.state.score}
                  playAgain={this.playAgain}
                  numOfQuiz={this.state.quiz.length}
                />
              )} */}
            </Route>
            <Route path="/">
              <h3>Welcome to the quizes</h3>
              <p>I hope you like what we have done so far</p>
            </Route>
          </Switch>
        </div>
      </Router>
     
    );
  }
}

const mapStateToProps = (state) => {
  const quiz = state.firestore.ordered.quiz;
  const courses = state.firestore.ordered.course;
  return {
    quizs: quiz,
    courses
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "quiz",
    },
    {collection: 'course'}
  ])
)(Quiz);
