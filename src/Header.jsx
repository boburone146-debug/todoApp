import {use, useState} from "react";
import styles from "./Header.module.css";

const mevalar = [
{ id: 1, name: "Olma" },
{ id: 2, name: "Nok" },
{ id: 3, name: "Gilos"},
]

function mevalarHeader() {
    const [fruits, setFruits] = useState(mevalar);

    return(
        <header>
            <div className={styles.todoTop}>
                <input type="text" placeholder="Enter new Fruit" />
                <button>Add new Fruit</button>
            </div>
           
            <div className={styles.btns}>
{
    fruits.map((fruit)=>{
        return (
             <div className={styles.item}>
                <span>{fruit.name} </span> 
                <div className={styles.btns}>
                    </div>
                    </div>
        )
            })
        
}
            </div>
        </header>
    )
}
export default Header
