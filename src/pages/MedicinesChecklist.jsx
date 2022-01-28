import React from 'react';

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
    return <div>
        hi
    </div>;
}

export default MedicinesChecklist;
