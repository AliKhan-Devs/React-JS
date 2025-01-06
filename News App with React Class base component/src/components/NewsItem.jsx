import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, Author, date, Source } = this.props;
        return (
            <div>
                <div className="card m-3"  >
                    <div>
                        <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', right: 0, position: 'absolute' }}>
                            {Source}
                        </span>
                    </div>
                    <img src={!imageURL ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn1k99aeO4guHJ0Tr5DrHXijkksZbIScjxQ&s" : imageURL} className="card-img-top" alt="..." style={{ cursor: "pointer" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {Author ? Author : 'Unknown'} on {date} </small></p>
                        <a href={newsURL} target=' ' className="btn btn-sm btn-secondary">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem
