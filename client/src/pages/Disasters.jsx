import React from "react";
import DonationCard from "../components/DonationCard";

const Disasters = () => {
  return (
    <div className="bg-black flex justify-center flex-col lg:flex-row items-center p-5">
      <DonationCard
        image={
          "https://images.unsplash.com/photo-1485056981035-7a565c03c6aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlvdHxlbnwwfHwwfHx8MA%3D%3D"
        }
        text={`Amidst the towering skyscrapers of Manhattan's financial district, a
        simmering discontent erupted into an unprecedented riot. The city's
        economic heartland, once a beacon of prosperity, now pulsated with the
        fury of a populace driven to despair by the relentless grip of a
        financial crisis. The streets, once bustling with the energy of
        commerce, transformed into battlegrounds where the disenfranchised
        clashed with the symbols of their oppression. The air crackled with
        tension as the cries of the rioters echoed through the concrete
        canyons, a stark counterpoint to the silent plea for a brighter
        future.`}
      />
      <DonationCard
        image={
          "https://images.unsplash.com/photo-1652000025920-155f11487525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvYmJlcnl8ZW58MHx8MHx8fDI%3D"
        }
        text={`The dark underbelly of Manhattan's vibrant façade conceals a horrifying reality - child trafficking and rapes are rampant in the city's core. Innocent children are lured into a world of exploitation and abuse, their dreams shattered by predators who prey on their vulnerability. The city's streets, once symbols of hope and opportunity, now bear the scars of these heinous crimes. Amidst the bustling crowds and towering skyscrapers, a silent struggle rages on, a battle against the forces that seek to extinguish the innocence of childhood.`}
      />
      <DonationCard
        image={
          "https://images.unsplash.com/photo-1652000026599-a3dd7f7f5a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        text={`Manhattan's once-gleaming avenues were now marred by the shadows of desperation as a surge of robberies swept through the city's financial heartland. The relentless grip of the financial crisis had fueled an undercurrent of despair, driving individuals to acts of desperation to make ends meet. The iconic landmarks, once symbols of prosperity, now stood as silent witnesses to the city's descent into chaos. Amidst the towering skyscrapers, the echoes of shattered dreams mingled with the desperate cries for survival. 
        The streets of Manhattan were gripped by a wave of robberies as the financial crisis deepened. The once-thriving city was now a breeding ground for desperation, and people were willing to do anything to survive.`}
      />
    </div>
  );
};

export default Disasters;
