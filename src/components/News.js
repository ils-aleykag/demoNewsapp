import React , {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalresults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(50);
      console.log(articles)
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalresults)
      setLoading(false)
      props.setProgress(100);  
}
  useEffect( () => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`
    updateNews();
    // eslint-disable-next-line
  }, [])
  const handleNextClick= async()=>{
    setPage(page + 1 );
    updateNews();
}
  const handlePrevClick= async ()=>{
    setPage(page - 1);
    updateNews();    
}
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: "35px 0px", marginTop: "90px"}}>NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>} 
        <div className="row">
        {!loading && articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between" style={{margin: "35px 0px"}}>
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Prev</button>
          <button disabled={page+1 > Math.ceil(totalresults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}
News.defaultProps = {
  country : "in",
  pageSize : 8,
  category: 'general',
}
News.propTypes = {
  country : propTypes.string,
  pageSize : propTypes.number,
  category : propTypes.string,
}

export default News