import React from "react";
import { pronouns, PronounBtns } from "./pronouns";
import { verbs, verbChoices } from "./verbs";
import { objectPlurals } from "./objects";
import { UpperSentence, LowerSentence } from "./sentences";
import { HelpOverlay } from "./helpoverlay";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: pronouns[0],
      speaker: "speaker.png",
      verbIndex: 0,
      objectIndex: 0,
      lowerObjectOptionIndex: 0,
      upperVerb: "like",
      upperObject: "cat",
      lowerSubject: "I",
      lowerVerb: "like",
      lowerObject: "cat",
      overlay: "none"
    };
    this.changePronoun = this.changePronoun.bind(this);
    this.changeVerb = this.changeVerb.bind(this);
    this.changeObject = this.changeObject.bind(this);
    this.changeVerbForm = this.changeVerbForm.bind(this);
    this.changeObjectForm = this.changeObjectForm.bind(this);
    this.pluralize = this.pluralize.bind(this);
    this.presentSimple = this.presentSimple.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  changePronoun = props => {
    console.log("changePronoun: ", props);
    this.setState(() => {
      return { subject: props };
    });
  };

  changeVerb = () => {
    let currentIndex =
      this.state.verbIndex < verbChoices.length - 1
        ? this.state.verbIndex + 1
        : 0;
    this.setState(() => {
      return { verbIndex: currentIndex };
    });
  };

  changeVerbForm = props => {
    let currentChoice = this.state.subject.subject;
    let availableChoices = verbs[verbChoices[this.state.verbIndex]];
    this.setState(() => {
      return { lowerVerb: availableChoices[currentChoice] };
    });
  };

  changeObject = () => {
    const objectCount = Object.keys(objectPlurals).length;
    let currentIndex =
      this.state.objectIndex < objectCount - 1 ? this.state.objectIndex + 1 : 0;
    this.setState(state => {
      return { objectIndex: currentIndex };
    });
  };

  changeObjectForm = props => {
    let objects = Object.keys(objectPlurals);
    let currentChoice = objects[this.state.objectIndex];
    const options = [
      `a ${currentChoice}.`,
      ` ${currentChoice}.`,
      `${this.pluralize(currentChoice)}.`
    ];
    let optionCounter =
      this.state.lowerObjectOptionIndex < options.length - 1
        ? this.state.lowerObjectOptionIndex + 1
        : 0;
    let sentenceEnd = options[optionCounter];
    this.setState(() => {
      return {
        lowerObject: sentenceEnd,
        lowerObjectOptionIndex: optionCounter
      };
    });
  };

  capitalize = props => {
    const newPronoun = props.charAt(0).toUpperCase() + props.slice(1);
    this.setState(() => {
      return { lowerSubject: newPronoun };
    });
  };

  pluralize = props => {
    return props + "s";
  };

  presentSimple = props => {
    return props + "s";
  };

  showOverlay = () => {
    console.log("showOverlay");
    this.setState(() => {
      return { overlay: "block" };
    });
  };

  hideOverlay = () => {
    console.log("hideOverlay");
    this.setState(() => {
      return { overlay: "none" };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="upper">
          <div className="upperleft">
            <div className="uppersentence">
              <img
                className="subjectpic subject example"
                src={this.state.subject.image}
                alt="main"
              ></img>
              <UpperSentence
                changeVerb={this.changeVerb}
                changeObject={this.changeObject}
                verbChoices={verbChoices}
                objectPlurals={objectPlurals}
                {...this.state}
              />
            </div>
          </div>

          <div className="upperright">
            <div className="buttons">
              <PronounBtns changePronoun={this.changePronoun} />
            </div>
          </div>
        </div>

        <div className="lower">
          <div className="lowerleft">
            <img
              className="speaker"
              src={this.state.speaker}
              alt="speaker"
            ></img>
            <img
              src="speechbubble.png"
              className="speechbubble"
              alt="speech bubble"
            ></img>
            <img
              className="listener"
              src="charizardsface.png"
              alt="listener"
            ></img>

            <LowerSentence
              capitalize={this.capitalize}
              changeObjectForm={this.changeObjectForm}
              changeVerbForm={this.changeVerbForm}
              {...this.state}
            />
          </div>
          <div className="help">
            <div showOverlay={this.showOverlay} className="helptext">
              help
            </div>
          </div>
        </div>
        <HelpOverlay hideOverlay={this.hideOverlay} {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
