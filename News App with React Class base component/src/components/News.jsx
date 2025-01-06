import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: "us",
        category: 'technology',
        apiKey: '', // Use your newsapi key here i would recommend to use .env.local for secret information and then import from there but i have leaved it just for the sack of simplicity
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
        apiKey: PropTypes.string,
    }
   constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResult: 0,
        }

    }

    updateNews = async () => {
        this.props.setProgress(20)
        const url = `https://newsapi.org/v2/everything?q=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(35)
        let parseData = await data.json();
        this.props.setProgress(55)
        this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults })
        this.setState({ loading: false })
        document.title = `Tech News / ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
        this.props.setProgress(100)

    }

    // called after render
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        await setTimeout(async () => {
            const url = `https://newsapi.org/v2/everything?q=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({
                page: this.state.page + 1,
            });
            {
                let data = await fetch(url);
                let parseData = await data.json()
                this.setState({ articles: this.state.articles.concat(parseData.articles), totalResult: parseData.totalResults })
                document.title = `Tech News / ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
                console.log(this.state.articles.length)
            }

        }, 1500);
    };

    render() {
        return (

            <div className='container my-3 bg-black' style={{paddingTop:'20px',borderRadius:"30px"}}>

                <h2 className='text-center  text-white' >{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row" >
                            {this.state.articles.map((news) => {
                                return <div className="col-md-4" key={news.url}>
                                    <NewsItem title={news.title ? news.title : "No title"} description={news.description ? news.description.slice(0, 80) : ""} imageURL={news.urlToImage} newsURL={news.url} Author={news.author} date={new Date(news.publishedAt).toGMTString()} Source={news.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>

        )
    }
}

export default News
