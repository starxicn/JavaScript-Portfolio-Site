/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/banner.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "米哈游荣获“全国文化企业30强 🎉",
    description:
      "12月28日，光明日报社和经济日报社向社会联合发布了第十四届“全国文化企业30强”名单，上海米哈游网络科技股份有限公司等30家企业进入行列。",
    url: "https://www.mihoyo.com/news/105515",
  },
  {
    title: "米哈游荣获“上海文化企业十强",
    description:
      "米哈游坚持助力传统文化创新表达、中华文化破圈传播，荣获上海文化企业十强，公司总裁刘伟荣获上海文化企业十大年度人物，公司原创IP“原神”荣获上海十大文化品牌。",
    url: "https://www.mihoyo.com/news/103569",
  },
  {
    title: "“你们好，见字如面！”——阅见未名：图书捐赠公益活动",
    description:
      "2022年，米哈游《未定事件簿》携手韬奋基金会，联合开展了「阅见未名」图书捐赠公益活动。在《未定事件簿》各位玩家的热心支持下，目前已向云南省大理白族自治州11所小学...",
    url: "https://www.mihoyo.com/news/103570",
  },
  {
    title: "米哈游荣获“全国版权示范单位”称号",
    description:
      "国家版权局公布了2022年度全国版权示范单位、示范单位（软件正版化）和示范园区（基地）名单，上海米哈游网络科技股份有限公司被授予“全国版权示范单位”荣誉称号。",
    url: "https://www.mihoyo.com/news/112200",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>News</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ left:"10%", maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
