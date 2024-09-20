import Image from "next/image";
import styles from "./page.module.css";
import MyCard from "./components/MyCard";

export default function Home() {
  return (
    <div>
      <p>Hello World!</p>
      <MyCard 
      heading="Heading"
      paragraph="this is some text"
      buttontext= "this is a button"> 
      </MyCard>
      <MyCard 
      heading="Header twooo"
      paragraph="epic text"
      buttontext= "button but cooler"> 
      </MyCard>
      <MyCard 
      heading="Serena"
      paragraph="texttexttext"
      buttontext= "buttonnnn"> 
      </MyCard>
      </div>
    
  );
}
