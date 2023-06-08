import React from 'react'

const NewsItem = (props) =>{
    let {title, description, imgUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
        <div>
        <span className="badge rounded-pill bg-danger" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>{source}</span>
        </div>
         <img src={!imgUrl?"https://www.hindustantimes.com/ht-img/img/2023/05/28/550x309/Breaking-News-Live-Blog-pic_1627344775185_1684021550502_1685239209068.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
           <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
           <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
       </div>
       </div>
      </div>
    )
}
export default NewsItem
