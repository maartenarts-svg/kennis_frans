// ============================================================
//  grammatica/indicatif_present_soort2.js
//  Grammaticaregel: werkwoorden op -re
// ============================================================

export function grammaticaHTML(werkwoord) {
  const stam = werkwoord.infinitief.slice(0, -2); // verwijder -re
  const v    = werkwoord.vervoegingen;

  return `
    <div class="gr-titel">GRAMMATICAREGEL — Verbes réguliers en -RE</div>
    <div class="gr-inhoud">

      <p class="gr-stap">Stap 1 — Zoek de stam</p>
      <p>Verwijder de uitgang <strong>-re</strong> van de infinitief:</p>
      <p class="gr-voorbeeld">
        <strong>${werkwoord.infinitief}</strong> − re = stam: <strong>${stam}-</strong>
      </p>

      <p class="gr-stap">Stap 2 — Voeg de uitgang toe</p>
      <table class="gr-tabel">
        <tr>
          <td>je</td>
          <td>stam + <strong>s</strong></td>
          <td class="gr-uitkomst">${v.je}</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>stam + <strong>s</strong></td>
          <td class="gr-uitkomst">${v.tu}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>il/elle/on</td>
          <td>stam <em>(geen uitgang)</em></td>
          <td class="gr-uitkomst">${v.il} ← geen uitgang!</td>
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
        💡 Bij <strong>il/elle/on</strong> wordt er <em>geen uitgang</em> toegevoegd —
        de stam alleen is voldoende.
      </p>

    </div>`;
}
