// ============================================================
//  CONFIG.JS — Centrale configuratie Frans Oefenplatform
// ============================================================

// ── FIREBASE CONFIGURATIE ──
const firebaseConfig = {
  apiKey: "AIzaSyC43esFV3YrATDsldfTFxpz8cncI00qQJA",
  authDomain: "kennis-frans.firebaseapp.com",
  projectId: "kennis-frans",
  storageBucket: "kennis-frans.firebasestorage.app",
  messagingSenderId: "922019945708",
  appId: "1:922019945708:web:2f03262e2fd9d7953199c9"
};

// ── ADMIN INSTELLINGEN ──
const ADMIN_EMAIL = "beheerder.frans@labsintniklaas.be";
const ADMIN_CODE  = "963974178528";

// ── TIJDEN & OEFENINGEN ──
// Volgorde bepaalt de tabbladen op het leerlingenpaneel.
// Elke tijd heeft een array van oefeningen (soorten).
// Voeg later eenvoudig een nieuwe tijd toe door een extra object toe te voegen.
const TIJDEN = [
  {
    id: "indicatif_present",
    label: "Indicatif présent",
    oefeningen: [
      {
        soort: "soort1",
        label: "Werkwoorden op -er",
        beschrijving: "Regelmatige werkwoorden op -er (incl. -cer en -ger).",
        url: "indicatif_present_soort1.html",
        icon: "🔵",
        kleur: "#4A90D9"
      },
      {
        soort: "soort2",
        label: "Werkwoorden op -re",
        beschrijving: "Regelmatige werkwoorden op -re.",
        url: "indicatif_present_soort2.html",
        icon: "🟢",
        kleur: "#4CAF50"
      },
      {
        soort: "soort3",
        label: "Werkwoorden op -ir",
        beschrijving: "Regelmatige werkwoorden op -ir (sortir, finir, ouvrir).",
        url: "indicatif_present_soort3.html",
        icon: "🟠",
        kleur: "#E8A838"
      },
      {
        soort: "soort4",
        label: "Onregelmatige werkwoorden",
        beschrijving: "Onregelmatige werkwoorden zoals être, avoir, aller, ...",
        url: "indicatif_present_soort4.html",
        icon: "🔴",
        kleur: "#E05757"
      },
      {
        soort: "mix",
        label: "Gemengd",
        beschrijving: "Een mix van alle soorten werkwoorden.",
        url: "indicatif_present_mix.html",
        icon: "🌈",
        kleur: "#9B59B6"
      }
    ]
  }
  // Voeg hier later nieuwe tijden toe, bv.:
  // {
  //   id: "imparfait",
  //   label: "Imparfait",
  //   oefeningen: [ ... ]
  // }
];

// ── FIREBASE INITIALISATIE ──
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore }  from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── EXPORTS ──
export { db, ADMIN_EMAIL, ADMIN_CODE, TIJDEN };
