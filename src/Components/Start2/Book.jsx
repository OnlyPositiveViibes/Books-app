import React from "react";

class Book extends React.Component {

    render() {
        return (
            <div className="big-blue__book">
                <small>{this.props.book.title}</small>
                <img src={this.props.book.img} />
            </div>
        )
    }

}


export default Book;