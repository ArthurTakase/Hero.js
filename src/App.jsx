import React from 'react';
import Navbar from './Components/Navbar';
import en_translate from "./Translate/en.json";
import fr_translate from "./Translate/fr.json";

export const lang = {
    en: en_translate,
    fr: fr_translate
}

export default function App() {
    const txt = lang[localStorage.getItem("lang")];

    return (
        <div className="App">
            <Navbar />
            <h1>{txt.welcome}</h1>
        </div>
    )
}