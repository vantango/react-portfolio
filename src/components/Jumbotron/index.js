import React from "react"
import Project1 from "./Project1"
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import Project5 from "./Project5"
import Project6 from "./Project6"
import "./style.css"

function Jumbotron() {
    return (
        <div class="row">
            <div>
                <section class="jumbotron" id="portfolio">
                    <h1 class="display-4">
                        Portfolio
                        </h1>
                    <hr class="my-4" />
                    <div class="row">
                        <Project1 />
                        <Project2 />
                        <Project3 />
                        <Project4 />
                        <Project5 />
                        <Project6 />
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Jumbotron;