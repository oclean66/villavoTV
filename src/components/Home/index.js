import React from 'react';
import HomeServices from '../../Services/HomeServices';
import ImageService from '../../Services/ImageService';
import { Link } from 'react-router-dom';



class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: true,
            data: []
        };
    }
    componentDidMount() {
        let that = this
        HomeServices.getShowsList().then(function (list) {
            // console.log(data.json());
            let aux = list;
            // that.setState({ data: aun })
            list.map((obj, i) => {
                ImageService.getShowImg(obj.show.ids.tmdb).then(imagen => {

                    // let info = that.state.data;
                    aux[i].img = "https://image.tmdb.org/t/p/w500/" + imagen.backdrop_path;
                    that.setState({ data: aux })

                })
            })

        });

    }
    render() {
        return (
            <div className="py-2 px-2">
                <div className="row m-0">
                    <div className="card-columns">


                        {this.state.data.map((i) => {

                            // console.log(data.backdrop_path)
                            return (<div key={i.show.ids.tmdb} className="card bg-dark">
                                <img src={i.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={`/show/${i.show.ids.tmdb}/imdb/${i.show.ids.imdb}`}>{i.show.ids.tmdb} - {i.show.title}</Link></h5>
                                    {/* <span className="card-subtitle">{i.episode.title}</span> */}
                                    {/* <p className="card-text d-inline-block text-truncate" style={{ maxWidth: 150 }}>{i.episode.overview}</p> */}
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>)


                        })}
                    </div>

                </div>

            </div>
        );
    }
}
export default Index;