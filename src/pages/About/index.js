import React from "react";
import about1 from "./../../assets/images/about1.jpg";
import about2 from "./../../assets/images/about2.jpg";
import about3 from "./../../assets/images/about3.jpg";
import "./styles.scss";

const About = () => {
  return (
    <div className="about">
      <div className="jumbo">gg</div>
      <div className="article">
        <div className="about-box">
          <div className="about-container">
            <div className="about-inner">
              <div className="img">
                <img src={about1} />
              </div>
              <div className="text">
                <div className="text-inner">
                  <h2>We cook with love</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec metus massa, consectetur in tristique quis, suscipit
                    in ante. Aliquam euismod interdum mi, et gravida sem
                    consectetur non. Sed egestas enim eget quam rutrum, at
                    eleifend enim scelerisque. Duis tristique ante posuere leo
                    maximus consequat sit amet ac magna. Mauris feugiat
                    hendrerit felis, in vehicula tellus imperdiet ut.
                    Pellentesque luctus euismod bibendum. Fusce faucibus ex
                    lorem, eget sodales ligula dapibus et. Integer id magna
                    vitae lorem tempor mattis vel quis augue. Praesent sodales
                    sapien ut sem porttitor, nec bibendum sem efficitur. Mauris
                    eu egestas mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-box">
          <div className="about-container">
            <div className="about-inner">
              <div className="text">
                <div className="text-inner">
                  <h2>Prefer to have "Sweet lifestyle" </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec metus massa, consectetur in tristique quis, suscipit
                    in ante. Aliquam euismod interdum mi, et gravida sem
                    consectetur non. Sed egestas enim eget quam rutrum, at
                    eleifend enim scelerisque. Duis tristique ante posuere leo
                    maximus consequat sit amet ac magna. Mauris feugiat
                    hendrerit felis, in vehicula tellus imperdiet ut.
                    Pellentesque luctus euismod bibendum. Fusce faucibus ex
                    lorem, eget sodales ligula dapibus et. Integer id magna
                    vitae lorem tempor mattis vel quis augue. Praesent sodales
                    sapien ut sem porttitor, nec bibendum sem efficitur. Mauris
                    eu egestas mauris.
                  </p>
                </div>
              </div>
              <div className="img">
                <img src={about2} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-box">
          <div className="about-container">
            <div className="about-inner">
              <div className="img">
                <img src={about3} />
              </div>
              <div className="text">
                <div className="text-inner">
                  <h2>Like beauty in evrything</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec metus massa, consectetur in tristique quis, suscipit
                    in ante. Aliquam euismod interdum mi, et gravida sem
                    consectetur non. Sed egestas enim eget quam rutrum, at
                    eleifend enim scelerisque. Duis tristique ante posuere leo
                    maximus consequat sit amet ac magna. Mauris feugiat
                    hendrerit felis, in vehicula tellus imperdiet ut.
                    Pellentesque luctus euismod bibendum. Fusce faucibus ex
                    lorem, eget sodales ligula dapibus et. Integer id magna
                    vitae lorem tempor mattis vel quis augue. Praesent sodales
                    sapien ut sem porttitor, nec bibendum sem efficitur. Mauris
                    eu egestas mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
