import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const [articles , setArticles] = useState([]);
  const [loading , setLoading] = useState(true);
  const [page , setPage] = useState(1);
  const [totalResults , setTotalResults] = useState(0);
   // document.title=`${props.category}`;

  
   
  
  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=3c511cd5f27c46089b407b7a063e3e3d&page=${
        page
      }&pagesize=${props.pageSize}`;
      // this.setState({ loading: true });
      setLoading(true);
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      // this.setState({
      //   articles: parsedData.articles,
      //   totalResults:parsedData.totalResults,
      //   loading : false
      // });
      props.setProgress(100);
  }

  useEffect(()=>{
    updateNews(); 
  } , []);

  // async componentDidMount() {
  //   this.updateNews() ;
  // }
  const handlePrev = async () => {
    // this.setState({page: this.state.page - 1});
    setPage(page-1);
    updateNews() ;
  };
  const handleNext = async () => {
    // this.setState({page: this.state.page + 1});
    setPage(page+1);
    updateNews() ;
  }
  
  const fetchMoreData = async () => {
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=3c511cd5f27c46089b407b7a063e3e3d&page=${
        page+1
      }&pagesize=${props.pageSize}`;
      // this.setState({page:page + 1});
      setPage(page+1);
      // this.setState({ loading: true });
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({
      //   articles: this.state.articles.concat(parsedData.articles || []),
      //   totalResults:parsedData.totalResults,
      //   loading : false
      // });
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
  };

  // render() {
    return (
      <>
      <div className="container my-3">
        <h1 className="text-center" style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          textShadow: '1px 1px 2px gray',
          paddingTop: "70px"
        }}>
          NewsPanda-Top Headlines - {props.category}
        </h1>
        {/* {this.state.loading&&<Spinner/>} */}
        <InfiniteScroll
          dataLength={articles?.length || 0}
          next={fetchMoreData}
          hasMore={(articles?.length || 0) !== totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {(articles || []).map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 80) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
        
      </div>
      </>
    );
  
 }


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    totalResults:0
  };
  News. propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
