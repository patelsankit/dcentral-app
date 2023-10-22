import React, { Component } from 'react'
import iconCalender from '../assets/images/icon-calendar.svg'
import defaultImg from '../assets/images/news-card-one.webp'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt } = this.props;
        return (
            <div className="bg-white rounded-xl shadow-shadowcard ">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        {/* {!imageUrl ? defaultImg : imageUrl} */}
                        <img alt="img" className="rounded-t-xl w-full mx-auto md:h-[270px]" src={!imageUrl ? defaultImg : imageUrl} width="466" height="235" />
                        <div className="md:px-8 md:py-7 p-4">
                            <div className="flex justify-start items-center gap-x-3">
                                <div className="bg-[#75C88226] p-2 rounded-full inline-block">
                                    <img alt="img" src={iconCalender} width="16" height="16" />
                                </div>
                                <p className="text-gray-950 text-18 font-kanit">{publishedAt}</p>
                            </div>
                            <div className="pt-4">
                                <p className="text-18 sm:text-22 font-500 font-kanit leading-8">{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-8 p-4 md:pb-8">
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-primary w-full py-[10px] rounded">Read More</a>
                    </div>
                </div>
            </div>

            // <div className="my-3">
            //     <div className="card">
            //         <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
            //         <div className="card-body">
            //             <h5 className="card-title">{title}</h5>
            //             <p className="card-text">{description}</p>
            //             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default NewsItem