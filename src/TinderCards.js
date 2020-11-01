import React, { useState, useEffect} from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css'
import database from './firebase'
function TinderCards() {
  // const [people, setPeople] = useState([
  //   { name: "st", url: "https://www.californiamuseum.org/sites/main/files/imagecache/lightbox/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png" },
  //   { name: "tw", url: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" },
  // ]);

  const [people, setPeople] = useState([ ])

  useEffect (()=> {
    //this is where code troubleshooting
    const unsubscribe = database.collection('people').onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))
      )
    );
    // Prevent large number of listeners from running
    return () => {
      unsubscribe();
    };
  }, []
  )
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
