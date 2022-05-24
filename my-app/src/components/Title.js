import React, { Component } from 'react';

const TITLES = [
    'developer',
    'international trade degree',
    'taekwondo lover',
    'rol player'
];

class Title extends Component{
    state = { titleIndex: 0 };
    componentDidMount() {
        this.timeout = setTimeout(()=> this.setState({ fadeIn: false }), 2000)
        this.animateTitles();
    }
    componentDidUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
    animateTitles =()=>{
        setInterval(() => { 
            const titleIndex = (this.state.titleIndex +1) % TITLES.length;
            this.setState({ titleIndex: titleIndex });
        }, 4000);
    }
    render(){
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[this.state.titleIndex];
        return(
            <p className={fadeIn ? 'title-fade-in':'title-fade-out'}>I am { title }</p>
        );
    }
}

export default Title;