import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5  m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.image}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ dish }){
  return (
    <div className="col-12 col-md-5  m-1">
      <div>
        <h3>Comments</h3>
        <ol className="list-unstyled">
          {dish.comments.map((each_comment) => {
            return (
              <li className="m-3">
                {each_comment.comment}
                <br />
                -- {each_comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(each_comment.date)))}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
const DishDetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="row">
        <div className="container">
          <RenderDish dish={props.dish} />
          <RenderComments dish={props.dish} />
        </div>
      </div>
    );
  }
};

export default DishDetail;