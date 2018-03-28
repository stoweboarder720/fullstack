import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import {toast, style} from 'react-toastify';
import {css} from 'glamor';

style({
  colorDefault: "#FF8000",
  fontColor: "#FFFFFF",
});

// React component for the front side of the card
class CardFlip extends React.Component {

  notify = () => {
    toast("CRN Copied!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      closeButton: false,
      hideProgressBar: true,
      className: css({
        color: "white"
      })
    });
  };

  render() {
    return(
      <div className='flip-container'>
        <div className='flipper'>
          <div className='front'>
            <Card className='bg-dark cardStyle'>
              <CardBody className="text-center">
                <CardTitle>{this.props.dept + " " + this.props.courseNum}</CardTitle>
                <CardSubtitle>{this.props.title}</CardSubtitle>
                <br/>
                <CardText>{this.props.time}</CardText>
              </CardBody>
            </Card>
          </div>

          <div className='back'>
            <CopyToClipboard id={"C" + this.props.crn} text={this.props.crn} onCopy={this.notify}>
            <Card className='bg-dark cardStyle' onClick={this.test}>
              <CardBody className='text-center'>
                <CardSubtitle className='backLines'>{"Instructor: " + this.props.prof}</CardSubtitle>
                <CardSubtitle className='backLines'>{"Room: " + this.props.room}</CardSubtitle>
                <CardSubtitle className='backLines'>{"Seats Available: " + this.props.seats}</CardSubtitle>
                <CardSubtitle className='backLines'>{"CCC Req: " + this.props.ccc}</CardSubtitle>
                <CardSubtitle className='backLines'>{"CRN: " + this.props.crn}</CardSubtitle>
              </CardBody>
            </Card>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    )
  }
}

export default CardFlip;
