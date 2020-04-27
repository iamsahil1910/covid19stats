import React from 'react'
import allCountryCases from './../api/allCountryCases';
import LineChart from './charts/casesChart'
import './allCountryData.css'

class AllCountryData extends React.Component {


    state = {
        data: []
    };

    componentDidMount() {

        this.allCountryCasesData();
    }

    allCountryCasesData = async () => {

        const response = await allCountryCases.get();

        const result = response.data.countryitems[0];
        let sortedData = []
        let duplicate = ['KP', 'XK', 'CD']
        for (let i = 1; i <= 182; i++) {
            if (!duplicate.includes(result[i].code)) {
            sortedData.push(result[i])
            }
        }
        sortedData.sort((a, b) => {
        if(a.total_cases < b.total_cases){
            return 1;
        }else if(a.total_cases > b.total_cases){
                return -1;
        }else{
                return 0;
        }
        });
        this.setState({data: sortedData})

    }

    dataSort = (column) => {


        let data = this.state.data;

        if (column === "title") {

            data.sort((b, a) => {

                if(a[column] < b[column]){
                    return 1;
                }else if(a[column] > b[column]){
                        return -1;
                }else{
                        return 0;
                }
            });

        } else {
            data.sort((a, b) => {

                if(a[column] < b[column]){
                    return 1;
                }else if(a[column] > b[column]){
                        return -1;
                }else{
                        return 0;
                }
            });
        }

        
        this.setState({data: data})
        

    }

    showGraph = (data) =>  {

        this.setState({ code: data });
    }

    AllRecord = () => {

        let dataRows = this.state.data.map((data) => {
            return (
            <tr  className="country-row"  key={data.code} onClick={() => this.showGraph(data.code)}>
                <td style={{textAlign: 'center'}}>{data.title}</td>
                <td>{data.total_cases} &nbsp; {(data.total_new_cases_today !== 0) ? "(+" + data.total_new_cases_today + ")" : " "}</td>
                <td className="negative">{data.total_deaths} &nbsp; {(data.total_new_deaths_today !== 0) ? "(+" + data.total_new_deaths_today + ")": ""}</td>
                <td>{(data.total_recovered !== 0) ? data.total_recovered : "Not Available or 0" }</td>
                <td>{data.total_active_cases}</td>
                <td className="negative">{data.total_serious_cases}</td>
            </tr>);
        });
        return dataRows;
    }



    render() {

        return (
    
            <div className="ui conatiner">
            <div className="ui grid">
                <div className="ui row">
                    <div style={{margin: 'auto', marginTop:'10px', marginBottom: '0px'}}className="nine wide column">
                    <div style={{padding: '8px', marginTop:'0px', marginBottom: '0px'}} className="ui message">
                        <div className="header">
                            Click on any country row to view the detailed graph. (Updation and Loading of graphs takes time according to you Internet speed.)
                        </div>
                    </div>
                    <div style={{padding: '8px', marginTop:'10px'}} className="ui message">
                        <div className="header">
                            * Click on any column title to sort it according to that (Ascending.)
                        </div>
                    </div>
                    <table className="ui stackable celled table">
                    <thead>   
                        <tr>
                        <th onClick={() => this.dataSort("title")}>Country Name</th>
                        <th onClick={() => this.dataSort("total_cases")}>Total Cases</th>
                        <th onClick={() => this.dataSort("total_deaths")}>Total Deaths</th>
                        <th onClick={() => this.dataSort("total_recovered")}>Total Recovered</th>
                        <th onClick={() => this.dataSort("total_active_cases")}>Active Cases</th>
                        <th onClick={() => this.dataSort("total_serious_cases")}>Serious Cases</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.AllRecord()}
                    </tbody>
                </table>
                    </div>

                    <div style={{marginTop: '20px'}} className="ui sticky fixed six wide column center page grid">
                            <div className="ui fixed sticky">
                            <LineChart code={this.state.code} />
                            <div className="ui message">
                                <div className="header">
                                    Support
                                </div>
                                <ul className="list">
                                    <li>To Contribute : <a href="https://github.com/iamsahil1910/covid19stats">Click Here</a></li>
                                    <li>To provide detailed data country API: Email: <a href="mailto:iamsahil1910@gmail.com">iamsaihl1910@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="ui message">
                                <div className="header">
                                    New Site Features
                                </div>
                                <ul className="list">
                                    <li>World Data: <a href="https://thevirustracker.com/">The Virus Tracker</a></li>
                                    <li>India data (coming soon): <a href="https://www.covid19india.org">Covid19India</a></li>
                                </ul>
                            </div>
                            </div>
                            </div>  
                    
                </div>
            </div>
            </div>
        );
    }

}

export default AllCountryData;