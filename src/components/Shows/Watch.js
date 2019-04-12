import React from 'react';
import ShowServices from '../../Services/ShowServices';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull'

import { findDOMNode } from 'react-dom'


class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
        this.onClickFullscreen = this.onClickFullscreen.bind(this);
    }
    onClickFullscreen() {
        screenfull.request(findDOMNode(this.player));
    }
    componentDidMount() {

        let that = this;

        const OS = require('opensubtitles-api');
        const OpenSubtitles = new OS({
            useragent: 'TemporaryUserAgent',
            username: 'oclean66',
            password: 'jay310887',
            ssl: true
        });
        OpenSubtitles.login()
            .then(res => {
                console.log(res.token);
                console.log(res.userinfo);
            })
            .catch(err => {
                console.log(err);
            });



        ShowServices.getEpisode(
            this.props.match.params.id,
            this.props.match.params.sx,
            this.props.match.params.ey)
            .then(data => {
                console.log(data);
                that.setState({ data });

            })
        ShowServices.getUrls(
            this.props.match.params.id,
            this.props.match.params.sx,
            this.props.match.params.ey)
            .then(data => {
                console.log(data);
                // that.setState({imdb:data.ids.imdb})
                OpenSubtitles.search({
                    sublanguageid: 'spa',
                    extensions: ['srt', 'vtt'],
                    imdbid: that.props.match.params.imdb,
                    season: that.props.match.params.sx,
                    episode: that.props.match.params.ey,
                }).then(subtitles => {
                    console.log(subtitles);
                    that.setState({
                        subtitles:subtitles.es.vtt
                    })
                });

            });






    }
    ref = player => {
        this.player = player
    }

    render() {
        return (

            <div className="row m-2">

                <div className="col-sm-3">
                    <div className="card bg-dark" style={{ width: "18rem" }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.data.still_path}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.data.name}</h5>
                            <h6 className="card-subtitle mb-2 text-green">{this.state.data.air_date}</h6>
                            <p className="card-text">
                                {this.state.data.overview}</p>
                            <button onClick={this.onClickFullscreen}>Fullscreen</button>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>

                    </div>
                </div>
                <div className="col-sm-9">
                    <ReactPlayer ref={this.ref}
                        width='100%'
                        height='100%'
                        url='https://c15.vidlox.tv/hls/,oudvgh7vbftk2yixv5n6axbgl5xe6cxwqziu4x6yge7aqg4cijmu75trtrfq,.urlset/master.m3u8' 
                        playing
                        config={{ file: {
                            tracks: [
                              {kind: 'subtitles', src: this.state.subtitles, srcLang: 'es', default: true},
                
                            ]
                          }}}
                           />
                </div>



            </div>

        )

    }
}

export default Watch;