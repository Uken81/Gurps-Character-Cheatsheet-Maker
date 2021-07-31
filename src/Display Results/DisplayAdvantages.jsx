import { useEffect, useState } from "react";
import AdvantagesArray from "../Advantages/AdvantagesObject/Advantages";

const DisplayAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    let [displayArray, setDisplayArray] = useState([]);
    
    // useEffect(() => {
    //     let arr = [];
    //     const test = () => {
    //         selectedAdvantagesList.forEach((e) => {
    //             AdvantagesArray.map((obj) => {
    //                 if (obj.title === e) {
    //                     arr.push(obj);
    //                     setDisplayArray(() => arr);
    //                 }
    //                 // if (selectedAdvantagesList === []) {
    //                 //     console.log('testy');
    //                 //     setDisplayArray(()=> []);
    //                 // }
    //                 return displayArray;
    //             })
    //         })
    //         console.log(displayArray);
    //         console.log(arr);
    //     }
    //     test();
    
    // }, [selectedAdvantagesList]);

    useEffect(()=> {

    })


    const log = () => {
        console.log(selectedAdvantagesList);
        console.log('displayArray: ' + displayArray[0]);
        console.log(typeof(displayArray));
    }

    // const arr = ['1', '2', '3'];

    return (
        <div>
            <h1>Advantages</h1>
            {selectedAdvantagesList.map((obj, key) => {
                return (
                    <div key={`div-${key}`}>
                      <p key={`obj-${key}`}>{obj.title}</p>
                            
                    </div>    
                        
                

                )
            })}
            <button onClick={log}>Test</button>
        </div>

    );
}

export default DisplayAdvantages;