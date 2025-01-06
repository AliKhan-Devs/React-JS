import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state = {
    progress: 20
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    // Use your newsapi key i would recommend to use .env.local but i have done it like this just for the sack of simplicity
    let country = 'in', apiKey = '', pageSize = 9;

    return (

      <div>
        <Router>
          <Navbar />
          <Hero/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            
            <Route exact path="/" element={<News setProgress={this.setProgress} key='tech' pageSize={pageSize} country={country} category="technology" apiKey={apiKey} />}></Route>
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key='business' pageSize={pageSize} country={country} category="business" apiKey={apiKey} />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key='entertainment' pageSize={pageSize} country={country} category="entertainment" apiKey={apiKey} />}></Route>
            <Route exact path="/General" element={<News setProgress={this.setProgress} key='general' pageSize={pageSize} country={country} category="general" apiKey={apiKey} />}></Route>
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key='health' pageSize={pageSize} country={country} category="health" apiKey={apiKey} />}></Route>
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key='science' pageSize={pageSize} country={country} category="science" apiKey={apiKey} />}></Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key='sports' pageSize={pageSize} country={country} category="sports" apiKey={apiKey} />}></Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key='technology}>' pageSize={pageSize} country={country} category="technology" apiKey={apiKey} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
