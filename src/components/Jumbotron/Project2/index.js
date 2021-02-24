import React from "react"
import "./style.css"

function Project2() {
    return (
        <div class="col-lg-4 col-sm-6">
            <h3 class="img-caption">So Thirsty</h3>
            <a href="https://sothirstyproject.herokuapp.com/" target="_blank">
                <img src="https://github.com/Calmanning/so_thirsty/raw/dev/public/assets/images/giphy.webp?raw=true"
                    alt="so-thirsty-plant-profile-gif" class="img-thumbnail" />
                <img class="soThirsty"
                    src="https://github.com/Calmanning/so_thirsty/raw/dev/public/assets/images/screenshot2.png?raw=true"
                    alt="plant-profile-screenshot" class="img-thumbnail" />
            </a>
            <p class="portfolioText">Visit the repository on <a
                href="https://github.com/Calmanning/so_thirsty" target="_blank">GitHub</a>!
            </p>
        </div>
    );
};
export default Project2;