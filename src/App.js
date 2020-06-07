import React from 'react';

import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImg from './images/1.jpg';

class App extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             country:''
        }
    }
    
    async componentDidMount(){
        const fetchedData=await fetchData();

        this.setState({data:fetchedData})

    }

    handleCountryChange = async (country)=>{
        const fetchedData=await fetchData(country);

        this.setState({data:fetchedData, country:country})
        console.log(country);
    }

    render(){
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="COVID-19" />
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
                
            </div>
        )
    }
}

export default App;