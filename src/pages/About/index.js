function About() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12" id="about">
                    <section className="jumbotron">
                        <h1 className="display-4">
                            About Me
                        </h1>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-12">
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFYRkBfcnElgA/profile-displayphoto-shrink_200_200/0/1609885611907?e=1615420800&v=beta&t=QDQ5EV3UPe-2TB8MKyEWHY_BfjubdWGkFlj4wuI1mG4"
                                    className="img-responsive" alt="picture-of-aleks" />
                                <p>
                                    I am an aspiring full stack web developer currently enrolled in the Web Development
                                    Boot Camp at University of Washington. Combining my background in the automotive
                                    industry with my newfound skills in React, JavaScript, HTML5, CSS3, NodeJS,
                                    MySQL, MongoDB, and more, I want to create innovative and engaging
                                    applications that provide a high-quality user experience with lightweight and
                                    efficient functionality.
                            </p>
                                <p>
                                    I am a highly motivated self-starter with a proven track record in collaborative,
                                    team-focused environments. I am constantly seeking to leverage my keen communication
                                    abilities to take on new challenges while learning and developing new skill sets.
                            </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default About;