import React from 'react';
import ShowServices from '../../Services/ShowServices';
import Episode from './Episodes';


class Seasons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        let that = this
        ShowServices.getShow(this.props.match.params.id).then(function (data) {
           
            console.log(data);
            let seasons = data.seasons.filter((i)=>{
                return i.air_date!=null;
            })
            data['seasons']=seasons;
            console.log(seasons);
            that.setState({ data })


        });

    }
    render() {
        return (
            <div className="py-2 px-2">
                <div className="row m-0">
                    <div className="col-sm-4">
                        <div className="card bg-dark" >
                            <img src={`https://image.tmdb.org/t/p/w500/${this.state.data.backdrop_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.data.name}</h5>
                                {/* <span className="card-subtitle"></span> */}
                                <h6 className="card-subtitle mb-2 text-green">({this.state.data.original_name})</h6>

                                <p className="card-text">{this.state.data.overview}</p>
                                <a href="#" className="btn btn-sm btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="accordion" id="accordionExample">
                            {this.state.data.seasons && this.state.data.seasons.map((x => {
                                return (<div key={x.id} className="card bg-dark">
                                    <div className="card-header" id="headingTwo">
                                        <h6 className="mb-0">
                                            <span className="btn btn-sm collapsed" data-toggle="collapse" data-target={"#L" + x.id} aria-expanded="false" aria-controls={"L"+x.id}>
                                                {x.name}
                                            </span>
                                        </h6>
                                    </div>
                                    <div id={"L"+x.id} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            {/* {x.overview} */}
                                            <Episode id={this.state.data.id} sx={x.season_number} imdb={this.props.match.params.imdb}/>
                                        </div>
                                    </div>
                                </div>)
                            }))}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Seasons;