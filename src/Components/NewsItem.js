import React from 'react'

const NewsItem = (props) => {
 
    let {title , description , imageUrl , newsUrl , author , publishedAt , source} = props;
    
    return (
      <div className="my-3">
        <div className="card" >
        <img className= "my-3 card-img-top" src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/5f4a/live/79862810-53fa-11f0-a58a-bdd891350c65.jpg"} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}<span className="badge rounded-pill text-bg-primary">{source}</span></h5>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }


export default NewsItem;
