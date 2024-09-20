import SerenaForm from "../components/SerenaForm";
import SerenaTable from "../components/SerenaTable";

export default function Home() {
  return (
    
    <div>
      <SerenaTable />
      <hr />
      <SerenaForm />
      <div>
      <p>Unfortunately, my form isn't completely updating correctly, but 
        I was able to successfully import my data from my database (from the backend)!
      </p>
    </div>
    </div>
    
  );
}
