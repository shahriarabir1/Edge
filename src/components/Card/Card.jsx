import React from "react";
import CardItems from "./CardItems";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "120px",
      }}
    >
      <CardItems
        image="/cod.jpg"
        title="Call of Duty 2024"
        description="COD Next 2024 will contain a first look at Black Ops 6 multiplayer where players can get a closer look at new maps, the gun list, and the new movement system in action. Alongside a deep dive into multiplayer, there's a high chance Raven Software will unveil details on the next chapter of Warzone."
      />
      <CardItems
        image="/rdr2.jpg"
        title="Red Dead Redumption 2"
        description="Gameplay elements include shootouts, robberies, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player."
      />
      <CardItems
        image="/images.jpeg"
        title="Assesins Creed"
        description="Gameplay elements include shootouts, robberies, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player."
      />
    </div>
  );
};

export default Card;
