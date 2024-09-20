'use client'
import { useEffect, useState } from "react";
import classes from "./serena-styles.module.css";

function SerenaTable() {
    
    const [serenadata, setSerenaData] = useState([]);

    
    async function getAllSerenaData() {
        try {
            const res = await fetch("http://localhost:8080/serenadata", {
                method: "GET",
            });
            const resJSON = await res.json();
            setSerenaData(resJSON);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        getAllSerenaData();
    }, []);

    return (
        <div>
            <h2>Serena Table</h2>
            <button onClick={getAllSerenaData}>
                Reload
            </button>
            <br />
            <br />
            <table className={classes.table}>
                <tbody>
                    <tr className={classes.row}>
                        <th>Name</th>
                        <th>Favorite Food</th>
                        <th>Sisters</th>
                        <th>Favorite Color</th>
                        <th>Age</th>
                        <th>Awesome?</th>
                        <th>Height (cm)</th>
                    </tr>
                    {
                        serenadata.map((serenadata, index) => (
                            <tr key={index} className={classes.row}>
                                <td>{serenadata.firstName}</td>
                                <td>{serenadata.favFood}</td>
                                <td>{serenadata.sisters.join(", ")}</td>
                                <td>{serenadata.favColor}</td>
                                <td>{serenadata.age}</td>
                                <td>{serenadata.isAwesome ? "Yes" : "No"}</td>
                                <td>{serenadata.height}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SerenaTable;
