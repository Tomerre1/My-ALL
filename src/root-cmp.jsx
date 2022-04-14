import React, { useEffect } from 'react'
import { Route } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/Header/AppHeader'
import { Accessibility } from 'accessibility/src/main';


export function RootCmp() {
    useEffect(() => {
        var labels = {
            resetTitle: 'איפוס הגדרות',
            closeTitle: 'סגירת מסך נגישות',
            menuTitle: 'מסך נגישות',
            increaseText: 'הגדלת טקסט',
            decreaseText: 'הקטנת טקסט',
            increaseTextSpacing: 'הגדלת ריווח טקסט',
            decreaseTextSpacing: 'הקטנת ריווח טקסט',
            invertColors: 'היפוך צבעים',
            grayHues: 'צבעי אפור',
            underlineLinks: 'קו תחתי לינקים',
            bigCursor: 'סמן גדול',
            readingGuide: 'מדריך קריאה',
            textToSpeech: 'טקסט לדיבור',
            speechToText: 'הקראת טקסט',
        };
        const icon = {
            position: {
                bottom: { size: 10, units: 'px' },
                left: { size: 0, units: 'px' },
                type: 'fixed'

            }
        }
        var options = { labels, icon };
        options.textToSpeechLang = 'he'; // or any other language
        options.speechToTextLang = 'he'; // or any other language
        window.addEventListener('load', function () { new Accessibility(options); }, false);
        return () => {
            window.removeEventListener('load', function () { new Accessibility(options); }, false);
        }
    }, [])


    return (
        <div>
            <AppHeader />
            <main>
                {routes.map(route => <Route key={route.path} exact={route.isExact} component={route.component} path={route.path} />)}
            </main>
        </div>
    )
}


