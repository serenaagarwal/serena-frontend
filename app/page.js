
import MyCard from "./components/MyCard";
import MyForm from "./components/MyForm";

export default function Home() {
  return (
    <div>
      <MyCard
        
        title="Welcome to Serena's Super Cool Website!"
        text="This is what I've learned to do after four days of bootcamp!
        If you want to see an example of my frontend and backend interacting, type in 
        http://localhost:3000/serenadata!"
        buttonText="Click on this button!"
      ></MyCard>
      <MyForm
        title="Welcome to my form!"
        text="Write your name!"
      ></MyForm>
      <p>To make this website, I started with what we learned on the last day, 
        but I changed everything, created a new firebase project, and expanded the website. 
        I learned a lot about different JS and CSS features. 
      </p>
    </div>
  );
}
