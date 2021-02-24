import React from "react"
import "./style.css"

function Project1() {
    return (
        <div className="col-lg-4 col-sm-6">
            <h3 className="img-caption">Park Sky</h3>
            <a href="https://vantango.github.io/uw-project1-parksky-app/" target="_blank">
                <img src="https://github.com/vantango/uw-project1-parksky-app/raw/development/assets/img/screencapture.png?raw=true"
                    alt="parksky-app-image" className="img-thumbnail" />
            </a>
            <p className="portfolioText">Visit the repository on <a
                href="https://github.com/vantango/uw-project1-parksky-app"
                target="_blank">GitHub</a>!</p>
        </div>
    );
};
export default Project1;