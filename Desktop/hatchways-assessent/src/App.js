import React, { Component, Fragment } from 'react';

const url = "https://www.hatchways.io/api/assessment/students"

class App extends Component {
  constructor() {
    super();
    this.state = ({
      data: {},
      grades: [],
      averages: []
        })
  }
  componentDidMount = () => {
    fetch(url)
      .then(results => results.json())
      .then(res => {
          this.setState({data: res});  
          this.averageGrade(res) 
          console.log(res)  
      })
  
  }
  
  averageGrade = (data) => {
    let gradeSums = []
    let grades = []
    let averageGrades = []
    data.students.map( item => 
      grades.push(item.grades))
    grades.forEach(element => gradeSums.push(element.reduce((a, b) => Number(a)+Number(b), 0)))
    gradeSums.forEach( element => {
      averageGrades.push(element/8)
    })

    this.setState({
      grades: grades,
      averages: averageGrades
    })

    

  }



  render(){
    console.log(this.state.data.students)
    return(
      <div className="App">

    {this.state.data.students? this.state.data.students.map((item, idx) => 
    <>
    <img src={item.pic} alt={item.pic}/>
    <div>{item.firstName} {item.lastName}</div>
    <div>Email: {item.email}</div>
    <div>Company: {item.company}</div>
    <div>Skill: {item.skill}</div>
    <div>Average: {this.state.averages[idx]}</div>
    </>
    
    ): <div></div>}

      </div>
    )
  }

  }

export default App;
