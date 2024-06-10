function Portfolio() {
    return (
        <div>
            <div className="about-me-section">
                <h1 className="body1">Work</h1>
                <div className="body-image">
                    <div className="main-image">
                        <p className="image-text-0">
                            <a href="https://github.com/sheehpat/express-notetaker">Express Note Taker</a>
                        </p>
                    </div>
                    <div id="sub-images">
                        <div className="sub-image">
                            <p className="image-text-1">
                                <a href="https://santy520.github.io/Picsure-game/">PicSure Game</a>
                            </p>
                        </div>
                        <div className="sub-image">
                            <p className="image-text-1">
                                <a href="https://github.com/sheehpat/readme_generator">Read Me Generator</a>
                            </p>
                        </div>
                        <div className="sub-image">
                            <p className="image-text-1">
                                <a href="https://github.com/sheehpat/node_cli_svg_generator">SVG Generator</a>
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;