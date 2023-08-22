/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/back.jpeg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "2030年 打造出全球十亿人愿意生活在其中的虚拟世界。";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "《崩坏学园2》",
  "《崩坏3》",
  "《未定事件簿》",
  "《原神》",
  "《崩坏：星穹铁道》",
  "《米游社》",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "米哈游成立于2011年，致力于为用户提供美好的、超出预期的产品与内容。米哈游陆续推出了多款高品质人气产品，包括《崩坏学园2》、《崩坏3》、《未定事件簿》、《原神》、《崩坏：星穹铁道》，动态桌面软件《人工桌面》以及社区产品《米游社》，并围绕原创IP打造了动画、音乐及周边等多元产品。即将上线的《绝区零》等同样受到全球玩家广泛关注。\n秉承着“技术宅拯救世界”的使命，米哈游始终致力于技术研发、探索前沿科技，在卡通渲染、人工智能、云游戏技术等领域积累了先进的技术能力。";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>我们的愿景</h2>
        <p className="large" 
        style={{
        backgroundClip: "text",
        backgroundImage: "linear-gradient(-135deg, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0)",
        color: "transparent",
        WebkitBackgroundClip: "text", }}>
          {description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ 
          padding: "1rem 3rem 0",
          textAlign: "justify",
          hyphens: "auto",
        }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
