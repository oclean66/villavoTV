import React from 'react';
import ShowServices from '../../Services/ShowServices';
import {Link} from 'react-router-dom';

class Episodes extends React.Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    componentDidMount() {
        let that = this;
        ShowServices.getSeason(this.props.id, this.props.sx).then(data => {
            that.setState({ data });

        })
    }
    render() {
        return (

            <ul className="list-unstyled components pt-2">
                {/* <h6>Episodios</h6> */}
                {this.state.data.episodes && this.state.data.episodes.map(y => {
                    return (<li key={y.id}>
                        <Link to={`/show/${this.props.id}/imdb/${this.props.imdb}/season/${this.props.sx}/episode/${y.episode_number}`} className="text-truncate">{y.episode_number} - {y.name+" "+y.air_date}</Link>
                    </li>)
                })
                }
            </ul>

        )

    }
}

export default Episodes;