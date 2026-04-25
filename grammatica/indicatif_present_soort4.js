// ============================================================
//  grammatica/indicatif_present_soort4.js
//  Grammaticaregel: onregelmatige werkwoorden
// ============================================================

export function grammaticaHTML(werkwoord) {
  const v = werkwoord.vervoegingen;

  // Vervoegingstabel — onpersoonlijke werkwoorden krijgen aparte behandeling
  let tabelHTML;
  if (werkwoord.onpersoonlijk) {
    tabelHTML = `
      <table class="gr-tabel">
        <tr>
          <td>il</td>
          <td class="gr-uitkomst">${v.il}</td>
        </tr>
      </table>
      <p class="gr-opmerking">
        💡 Dit is een <strong>onpersoonlijk werkwoord</strong>: het wordt enkel
        gebruikt met <strong>il</strong>.
      </p>`;
  } else {
    tabelHTML = `
      <table class="gr-tabel">
        <tr><td>je / j'</td><td class="gr-uitkomst">${v.je}</td></tr>
        <tr><td>tu</td><td class="gr-uitkomst">${v.tu}</td></tr>
        <tr><td>il/elle/on</td><td class="gr-uitkomst">${v.il}</td></tr>
        <tr><td>nous</td><td class="gr-uitkomst">${v.nous}</td></tr>
        <tr><td>vous</td><td class="gr-uitkomst">${v.vous}</td></tr>
        <tr><td>ils/elles</td><td class="gr-uitkomst">${v.ils}</td></tr>
      </table>`;
  }

  return `
    <div class="gr-titel">ONREGELMATIG WERKWOORD — ${werkwoord.infinitief}</div>
    <div class="gr-inhoud">

      <p>
        <strong>${werkwoord.infinitief}</strong> (${werkwoord.vertaling}) is een
        <strong>onregelmatig werkwoord</strong>. De vervoeging moet je
        <strong>uit het hoofd leren</strong>.
      </p>

      <p class="gr-stap" style="margin-top: 14px;">
        Vervoeging van <em>${werkwoord.infinitief}</em>
      </p>
      ${tabelHTML}

    </div>`;
}
