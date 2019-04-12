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
        ShowServices.getEpisode(this.props.match.params.id, this.props.match.params.sx, this.props.match.params.ey).then(data => {
            console.log(data);
            that.setState({ data });

        })
    }
    ref = player => {
        this.player = player
    }

    render() {
        return (

            <div className="row m-2">

                <div className="col-sm-3">
                    <div class="card bg-dark" style={{ width: "18rem" }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.data.still_path}`} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{this.state.data.name}</h5>
                            <h6 class="card-subtitle mb-2 text-green">{this.state.data.air_date}</h6>
                            <p class="card-text">
                                {this.state.data.overview}</p>
                            <button onClick={this.onClickFullscreen}>Fullscreen</button>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>

                    </div>
                </div>
                <div className="col-sm-9">
                    <ReactPlayer ref={this.ref} 
                     width='100%'
                     height='100%'
                    url='https://c15.vidlox.tv/hls/oudvgh7vbftk2yixv5n6axbgl5xe6cxwqziu4x6yge7aqg4cijm7ap3qtreq/index-v1-a1.m3u8' playing />
                </div>



            </div>

        )

    }
}

export default Watch;