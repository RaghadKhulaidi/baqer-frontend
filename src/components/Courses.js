import "./Courses.css";
import { useEffect,  useState } from "react";
const Courses = (props) => {
  const [workouts, setWorkouts]= useState(null)
let percentage = 0;
 

  useEffect(()=> {
    const fetchWorouts = async () => {
      const response = await fetch('/api/courses')
      const json = await response.json()

      if (response.ok){
        setWorkouts(json)
      }
    }
    fetchWorouts() 
  }, [])

  return (
    <div className="courses" meta name="viewport" content="width=device-width, initial-scale=1.0">

<p>{props.showCompleted? "completed courses":""}</p>
<p>{props.showInprogress?"Inprogrss coursdes":""}</p>
<div class="flex-container">
 


{workouts && workouts.map((workout) =>(

            
  
          <span className= "courses-box" key={workouts.id} > 
        
          <img  className="img" src={workout.img} /> <p className="title">{workout.title}</p> <p>{workout.description} </p>

          <div className="progress">

          <span style={{display:`none`}}>
          { percentage =workout.PassedHour/workout.TotalHour *100}
          </span>
            <div  className="progress-done" style={{width: `${percentage}%`}}>
            <span>
            {percentage}%
            </span>

  
            
            </div>
          </div>


           </span>
          
          

        ))}
       
        </div>
       
             
        
     
    </div>
  );
};

export default Courses;