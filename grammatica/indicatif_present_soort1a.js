// ============================================================
//  grammatica/indicatif_present_soort1a.js
//  Grammaticaregel: regelmatige werkwoorden op -er
// ============================================================

export function grammaticaHTML(werkwoord) {
  const stam = werkwoord.infinitief.slice(0, -2); // verwijder -er
  const v    = werkwoord.vervoegingen;

  return `
    <div class="gr-titel">GRAMMATICAREGEL — Verbes réguliers en -ER</div>
    <div class="gr-inhoud">

      <p class="gr-stap">Stap 1 — Zoek de stam</p>
      <p>Verwijder de uitgang <strong>-er</strong> van de infinitief:</p>
      <p class="gr-voorbeeld">
        <strong>${werkwoord.infinitief}</strong> − er = stam: <strong>${stam}-</strong>
      </p>

      <p class="gr-stap">Stap 2 — Voeg de uitgang toe</p>
      <table class="gr-tabel">
        <tr>
          <td>je</td>
          <td>stam + <strong>e</strong></td>
          <td class="gr-uitkomst">${v.je}</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>stam + <strong>es</strong></td>
          <td class="gr-uitkomst">${v.tu}</td>
        </tr>
        <tr>
          <td>il/elle/on</td>
          <td>stam + <strong>e</strong></td>
          <td class="gr-uitkomst">${v.il}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>nous</td>
          <td>stam + <strong>ons</strong></td>
          <td class="gr-uitkomst">${v.nous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>vous</td>
          <td>stam + <strong>ez</strong></td>
          <td class="gr-uitkomst">${v.vous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>ils/elles</td>
          <td>stam + <strong>ent</strong></td>
          <td class="gr-uitkomst">${v.ils}</td>
        </tr>
      </table>

      <p class="gr-opmerking">
        💡 De uitgangen <strong>-ons</strong>, <strong>-ez</strong> en <strong>-ent</strong>
        zijn dezelfde voor bijna alle werkwoorden.
      </p>

    </div>`;
}
