import React, { useState } from 'react';

const medicinesList =
    [
        [//יום ראשון 
            {
                "day": 1,
                "medicineName": "1",
                "count": "1",
                "isActive": false
            },
            {
                "day": 1,
                "medicineName": "2",
                "count": "2",
                "isActive": false
            },
            {
                "day": 1,
                "medicineName": "3",
                "count": "3",
                "isActive": false
            }
        ],
        [],//יום שני אין תרופות
        [//יום שלישי 
            {
                "day": 3,
                "medicineName": "1",
                "count": "1",
                "isActive": false
            },
            {
                "day": 3,
                "medicineName": "2",
                "count": "2",
                "isActive": false
            },
            {
                "day": 3,
                "medicineName": "3",
                "count": "3",
                "isActive": false
            }
        ],
        [],//יום רביעי 
        [],//יום חמישי 
        [//יום שישי 
            {
                "day": 6,
                "medicineName": "1",
                "count": "1",
                "isActive": true
            },
            {
                "day": 6,
                "medicineName": "2",
                "count": "2",
                "isActive": true
            },
            {
                "day": 6,
                "medicineName": "3",
                "count": "3",
                "isActive": true
            }
        ],
        []//יום שבת 
    ]

export function MedicinesChecklist(props) {
    const [selected, setSeleceted] = useState('ראשון')

    const onChangeDay = (event) => {
        const { value } = event.target
        setSeleceted(value)
    }

    return <div class="container">
        <div class="switches-container">
            <input type="radio" onChange={onChangeDay} id="ראשון" name="switchPlan" value="ראשון" checked={selected === "ראשון"} />
            <input type="radio" onChange={onChangeDay} id="שני" name="switchPlan" value="שני" checked={selected === "שני"} />
            <input type="radio" onChange={onChangeDay} id="שלישי" name="switchPlan" value="שלישי" checked={selected === "שלישי"} />
            <input type="radio" onChange={onChangeDay} id="רביעי" name="switchPlan" value="רביעי" checked={selected === "רביעי"} />
            <input type="radio" onChange={onChangeDay} id="חמישי" name="switchPlan" value="חמישי" checked={selected === "חמישי"} />
            <input type="radio" onChange={onChangeDay} id="שישי" name="switchPlan" value="שישי" checked={selected === "שישי"} />
            <input type="radio" onChange={onChangeDay} id="שבת" name="switchPlan" value="שבת" checked={selected === "שבת"} />
            <label for="ראשון">ראשון</label>
            <label for="שני">שני</label>
            <label for="שלישי">שלישי</label>
            <label for="רביעי">רביעי</label>
            <label for="חמישי">חמישי</label>
            <label for="שישי">שישי</label>
            <label for="שבת">שבת</label>
            <div class="switch-wrapper">
                <div class="switch">
                    <div>ראשון</div>
                    <div>שני</div>
                    <div>שלישי</div>
                    <div>רביעי</div>
                    <div>חמישי</div>
                    <div>שישי</div>
                    <div>שבת</div>
                </div>
            </div>
        </div>
    </div>
}

export default MedicinesChecklist;
