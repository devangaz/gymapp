import React from 'react';
const  WorkoutSession=() =>{
  return (
    <section className='workout_session'>
      <div className=''>
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Get ready to push your limits with our Ultimate Workout Session! Whether you’re a beginner or experienced,<br /> this session will help you get stronger, burn fat, and feel great.
          <br />What to Expect: <br /> <br />Warm-Up (10 min): Prepare your body with light exercises. <br /><br /> Cardio (20 min): Boost your heart rate with high-energy moves. 
          <br /><br /> Strength Training (20 min): Build muscle using bodyweight and weights. <br /><br /> Core & Stability (15 min): Focus on your abs and balance. 
          <br /><br />Cool-Down (10 min): Stretch and relax your muscles after the workout.
        </p>
        <img src='/img5.jpg' alt='workout'></img>
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Take your fitness to the next level with our high-energy,<br />
         results-driven bootcamps! Each bootcamp is designed to target<br />
         specific goals and keep you motivated.
        </p>
        <div className='bootcamps'>
          <div>
            <h4>🔥 Fat Burn Bootcamp </h4>
            <p>
              Melt calories fast with intense cardio and HIIT workouts.<br />
              Great for weight loss and boosting stamina.
            </p>
          </div>
           <div>
            <h4>💪 Strength & Conditioning Bootcamp </h4>
            <p>
              Build muscle and improve overall strength using weights, <br />resistance bands, and bodyweight exercises.
            </p>
          </div>
           <div>
            <h4>🧘‍♀️ Core & Flexibility Bootcamp</h4>
            <p>
              Strengthen your abs and improve flexibility with guided <br />core workouts and deep stretches.
            </p>
          </div>
           <div>
            <h4>🏋️ Full-Body Power Bootcamp </h4>
            <p>
              Engage every major muscle group with a mix of cardio, <br />strength, and mobility training..
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
export default WorkoutSession;