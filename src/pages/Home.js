import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select(); //fetching all the records from the table smoothies.
      if (error) {
        setFetchError("Could Not Fetch the smoothies"); //if data fetch is unsuccessfull
        setSmoothies(null);
        console.log(error);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, []);
  return (
    <div className="page home">
      {fetchError && <p>fetchError</p>}
      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} /> //making a different component and passing smoothie as a prop
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
