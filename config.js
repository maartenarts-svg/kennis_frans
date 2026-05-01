// ============================================================
//  CONFIG.JS — Centrale configuratie Frans Oefenplatform
// ============================================================

// ── FIREBASE CONFIGURATIE ──
const firebaseConfig = {
  apiKey: "AIzaSyDEwRsDAKugy2g83Nnmhcvj7qdCQkTfKYg",
  authDomain: "eerste-graad.firebaseapp.com",
  projectId: "eerste-graad",
  storageBucket: "eerste-graad.firebasestorage.app",
  messagingSenderId: "898558097965",
  appId: "1:898558097965:web:1b494fc5f4f119d8e396a4"
};

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
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore }  from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getAuth }       from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

// ── EXPORTS ──
export { db, auth, TIJDEN };
