import React, { Component } from 'react'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import NewsItem from './NewsItems'

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async componentDidMount() {
        // let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8a7018756f7b43129f24936d8051e0a7&page=1pageSize=20";
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a7018756f7b43129f24936d8051e0a7&page=2&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }


    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a7018756f7b43129f24936d8051e0a7&page=${this.state.page - 1}&pageSize=20`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a7018756f7b43129f24936d8051e0a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a7018756f7b43129f24936d8051e0a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='bg-white dark:bg-[#212121] min-h-screen'>
                    <div className='container py-10 px-5'>
                        <h2 className='my-4 sm:pb-7 text-28 md:text-40 text-center font-extrabold tracking-tight text-gray-900 dark:text-white'>Trending - News</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <NewsItem title={element.title ? element.title : ""} key={element.url} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            })}
                        </div>

                        <div className='flex justify-between my-5'>
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>

                            {/* <button  className="learn-more-prev">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Prev</span>
                            </button>

                            <button className="learn-more-next">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Next</span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

