// ============================================================
//  grammatica/indicatif_present_soort3b.js
//  Grammaticaregel: werkwoorden op -ir type FINIR
// ============================================================

export function grammaticaHTML(werkwoord) {
  const stam = werkwoord.infinitief.slice(0, -2); // verwijder -ir
  const v    = werkwoord.vervoegingen;

  return `
    <div class="gr-titel">GRAMMATICAREGEL — Verbes en -IR type FINIR</div>
    <div class="gr-inhoud">

      <p class="gr-stap">Stap 1 — Zoek de stam</p>
      <p>Verwijder de uitgang <strong>-ir</strong> van de infinitief:</p>
      <p class="gr-voorbeeld">
        <strong>${werkwoord.infinitief}</strong> − ir = stam: <strong>${stam}-</strong>
      </p>

      <p class="gr-stap">Stap 2 — Voeg de tussenletter en uitgang toe</p>
      <table class="gr-tabel">
        <tr>
          <td>je</td>
          <td>stam + <strong>i</strong> + s</td>
          <td class="gr-uitkomst">${v.je}</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>stam + <strong>i</strong> + s</td>
          <td class="gr-uitkomst">${v.tu}</td>
        </tr>
        <tr>
          <td>il/elle/on</td>
          <td>stam + <strong>i</strong> + t</td>
          <td class="gr-uitkomst">${v.il}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>nous</td>
          <td>stam + <strong>iss</strong> + ons</td>
          <td class="gr-uitkomst">${v.nous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>vous</td>
          <td>stam + <strong>iss</strong> + ez</td>
          <td class="gr-uitkomst">${v.vous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>ils/elles</td>
          <td>stam + <strong>iss</strong> + ent</td>
          <td class="gr-uitkomst">${v.ils}</td>
        </tr>
      </table>

      <p class="gr-opmerking">
        💡 In het meervoud verschijnt er altijd een extra <strong>-iss-</strong>
        tussen de stam en de uitgang.
      </p>

    </div>`;
}
