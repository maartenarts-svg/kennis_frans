// ============================================================
//  grammatica/indicatif_present_soort1c.js
//  Grammaticaregel: werkwoorden op -ger
// ============================================================

export function grammaticaHTML(werkwoord) {
  const stam = werkwoord.infinitief.slice(0, -2); // verwijder -er
  const v    = werkwoord.vervoegingen;

  return `
    <div class="gr-titel">GRAMMATICAREGEL — Verbes en -GER</div>
    <div class="gr-inhoud">

      <p class="gr-stap">Stap 1 — Zoek de stam</p>
      <p>Verwijder de uitgang <strong>-er</strong> van de infinitief:</p>
      <p class="gr-voorbeeld">
        <strong>${werkwoord.infinitief}</strong> − er = stam: <strong>${stam}-</strong>
      </p>

      <p class="gr-stap">Stap 2 — Voeg de uitgang toe</p>
      <p>De uitgangen zijn dezelfde als bij gewone <strong>-er</strong> werkwoorden:</p>
      <p style="margin: 6px 0 12px; font-weight: 700;">-e, -es, -e, -ons, -ez, -ent</p>

      <p class="gr-aandacht">
        ⚠️ Aandacht voor de <strong>nous</strong>-vorm!
      </p>
      <p>Bij werkwoorden op <strong>-ger</strong> voeg je een extra <strong>e</strong> toe
        na de <strong>g</strong> voor de uitgang <strong>-ons</strong>.<br>
        Dit is om de zachte uitspraak van de <strong>g</strong> te bewaren.
      </p>
      <p class="gr-voorbeeld">
        ${stam}<strong>e</strong>ons → ${v.nous}
      </p>

      <table class="gr-tabel">
        <tr><td>je</td><td class="gr-uitkomst">${v.je}</td></tr>
        <tr><td>tu</td><td class="gr-uitkomst">${v.tu}</td></tr>
        <tr><td>il/elle/on</td><td class="gr-uitkomst">${v.il}</td></tr>
        <tr class="gr-nadruk">
          <td>nous</td>
          <td class="gr-uitkomst">${v.nous} ← let op de extra <strong>e</strong>!</td>
        </tr>
        <tr><td>vous</td><td class="gr-uitkomst">${v.vous}</td></tr>
        <tr><td>ils/elles</td><td class="gr-uitkomst">${v.ils}</td></tr>
      </table>

    </div>`;
}
