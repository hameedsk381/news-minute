import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  async componentDidMount() {
    this.updateNews();
  }
  async updateNews() {
    this.props.setProgress(0)
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d7e17973a3874562b73c9e99a9210afd&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  prevClick = async () => {
   
    this.setState({
      
      page: this.state.page - 1,
      
    });

    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d7e17973a3874562b73c9e99a9210afd&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  };

  nextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews()
  
  };

  render() {
    return (
      <>
        <div className="container my-3 vw-100 vh-100">
          <h2 className="fst-italic">News minute /{this.props.category}</h2>
          <hr />
          
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary " role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
          
            <div className="row mt-3 d-flex justify-content-between">
              {
                

                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <Newsitem
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        url={element.url}
                      />
                    </div>
                  );
                })
              }
            </div>
           
          </InfiniteScroll>
          
        </div>
      </>
    );
  }
}

export default News;
