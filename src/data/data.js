export const medicinesList =
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



  //TODO: 
  // עמוד סימון תרופות אצל משתמש:
    // 1) לבדוק את התרופות לפי המערך שיש פה למעלה -> medicinesList


  // אדמין:
    // 1) להוסיף לאדמין בחירה מרובה של שלבים (מספר שלבים מקסימלי 8 בנתיים) לכל תרופה בעת הוספת תרופה -> [מערך של מספרים לפי שלב - אינטים]
    // 2) [מערך של סטרינגים] <- בחירה מרובה של תופעות לוואי מתוך רשימה אצל הוספה באדמין
    // 3) במקום בחירה של מינון מרשימה לעשות תיבת טקסט -> סרטינג

    //מבנה של הוספת תרופה באדמין לפי באקנד:
      // medicineName=models.CharField(max_length=100,primary_key=True)
      // description=models.CharField(max_length=1500)
      // levels=JSONField(default=list, blank=True, null=True)
      // count=models.CharField(max_length=100,null=True,default=None)
      // badInfluence=models.CharField(max_length=1000,null=True,default=None)
      // foodOrNot=models.CharField(max_length=100,null=True,default=None)