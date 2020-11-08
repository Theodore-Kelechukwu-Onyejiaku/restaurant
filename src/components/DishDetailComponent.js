import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.dish == null){
            return (
                <div></div>
            )
        }else{
            return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5  m-1">
                            <Card >
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.image}></CardImg>
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5  m-1">
                            <div>
                                <h3>Comments</h3>
                                <ol className="list-unstyled">
                                    {this.props.dish.comments.map(each_comment =>{
                                        return (
                                        <li className="m-3">
                                            {each_comment.comment}
                                            <br/>
                                            -- {each_comment.author}, { new Intl.DateTimeFormat("en-US",{year: "numeric", month: "short", day:"2-digit"}).format(new Date(Date.parse(each_comment.date)))}
                                        </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>            
            )
        }
        
    }
}

export default DishDetail;