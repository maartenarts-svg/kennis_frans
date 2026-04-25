// ============================================================
//  grammatica/indicatif_present_soort3a.js
//  Grammaticaregel: werkwoorden op -ir type SORTIR
// ============================================================

export function grammaticaHTML(werkwoord) {
  // Stam enkelvoud: infinitief - laatste 3 letters (bv. sortir - tir = sor)
  const stamEnkelvoud = werkwoord.infinitief.slice(0, -3);
  // Stam meervoud: infinitief - laatste 2 letters (bv. sortir - ir = sort)
  const stamMeervoud  = werkwoord.infinitief.slice(0, -2);
  const v             = werkwoord.vervoegingen;

  return `
    <div class="gr-titel">GRAMMATICAREGEL — Verbes en -IR type SORTIR</div>
    <div class="gr-inhoud">

      <p class="gr-stap">Stap 1 — Zoek de stam</p>
      <p>De stam is <strong>verschillend</strong> in het enkelvoud en het meervoud!</p>

      <div class="gr-twee-kolommen">
        <div>
          <p class="gr-kolom-titel">Enkelvoud</p>
          <p>Stam = infinitief − laatste <strong>3</strong> letters</p>
          <p class="gr-voorbeeld">
            ${werkwoord.infinitief} − ${werkwoord.infinitief.slice(-3)} = <strong>${stamEnkelvoud}-</strong>
          </p>
        </div>
        <div>
          <p class="gr-kolom-titel">Meervoud</p>
          <p>Stam = infinitief − laatste <strong>2</strong> letters</p>
          <p class="gr-voorbeeld">
            ${werkwoord.infinitief} − ir = <strong>${stamMeervoud}-</strong>
          </p>
        </div>
      </div>

      <p class="gr-stap">Stap 2 — Voeg de uitgang toe</p>
      <table class="gr-tabel">
        <tr>
          <td>je</td>
          <td>${stamEnkelvoud}- + <strong>s</strong></td>
          <td class="gr-uitkomst">${v.je}</td>
        </tr>
        <tr>
          <td>tu</td>
          <td>${stamEnkelvoud}- + <strong>s</strong></td>
          <td class="gr-uitkomst">${v.tu}</td>
        </tr>
        <tr>
          <td>il/elle/on</td>
          <td>${stamEnkelvoud}- + <strong>t</strong></td>
          <td class="gr-uitkomst">${v.il}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>nous</td>
          <td>${stamMeervoud}- + <strong>ons</strong></td>
          <td class="gr-uitkomst">${v.nous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>vous</td>
          <td>${stamMeervoud}- + <strong>ez</strong></td>
          <td class="gr-uitkomst">${v.vous}</td>
        </tr>
        <tr class="gr-nadruk">
          <td>ils/elles</td>
          <td>${stamMeervoud}- + <strong>ent</strong></td>
          <td class="gr-uitkomst">${v.ils}</td>
        </tr>
      </table>

      <p class="gr-opmerking">
        💡 Geheugensteuntje voor de 6 werkwoorden van dit type:<br>
        <strong>ME SE SE SO DO PA</strong><br>
        <span style="color:var(--muted)">
          ME<em>ntir</em> · SE<em>ntir</em> · SE<em>rvir</em> ·
          SO<em>rtir</em> · DO<em>rmir</em> · PA<em>rtir</em>
        </span>
      </p>

    </div>`;
}
