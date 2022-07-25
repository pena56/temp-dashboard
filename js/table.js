document.addEventListener("DOMContentLoaded", init, false);

const mockWithdrawalData = require("../data/withdrawals.json");

async function init() {
  // Select the table (well, tbody)
  let table = document.querySelector("#withdrawalTable tbody");
  // get the cats
  // create html

  console.log(table);

  //   let result = '';
  //   data.forEach(c => {
  //      result += `<tr>
  //      <td>${c.name}</td>
  //      <td>${c.age}</td>
  //      <td>${c.breed}</td>
  //      <td>${c.gender}</td>
  //      </tr>`;
  //   });
  //   table.innerHTML = result;
}
