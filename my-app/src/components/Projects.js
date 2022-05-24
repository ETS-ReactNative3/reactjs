import React, { Component } from "react";
import PROJECTS from "../data/projects";

class Project extends Component {
    render(){
        const { title, img, link } = this.props.project;
        return(
            <div style={{ display:"inline-block" }}>
                <h3>{ title }</h3>
                <img src={ img } alt={ title } style={{ width:200, height:100 }} />
                <br />
                <a href={ link } target="_blank"  rel="noreferrer">Ir a GitHub</a>
            </div>
            /* <div>{ this.props.project.title }></div> */
        )
    }
}

class Projects extends Component {
    render(){
        return(
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return(
                            <div>
                                <Project key={ PROJECT.id} project={PROJECT} />
                                {/* <div>{ PROJECT.title }</div> */}
                                <a href='https://www.freepik.es/fotos/collie'>Foto de collie creado por freepik - www.freepik.es</a>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Projects;