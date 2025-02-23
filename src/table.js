function checkWin(table) {
  const rows = table.querySelectorAll("tr");
  const num = rows.length;


  for (let i = 0; i < num; i++) {
    let win = true;
    const cells = rows[i].querySelectorAll("td");
    for (let j = 0; j < num; j++) {
      if (!cells[j].classList.contains("selected")) {
        win = false;
        break;
      }
    }
    if (win) {
      alert("BINGO");
      document.querySelector(".bingo").hidden = false;
      return;
    }
  }


  for (let i = 0; i < num; i++) {
    let win = true;
    for (let j = 0; j < num; j++) {
      const cell = rows[j].querySelectorAll("td")[i];
      if (!cell.classList.contains("selected")) {
        win = false;
        break;
      }
    }
    if (win) {
      alert("BINGO");
      document.querySelector(".bingo").hidden = false;
      return;
    }
  }


  let mainDiagonalWin = true;
  for (let i = 0; i < num; i++) {
    const cell = rows[i].querySelectorAll("td")[i];
    if (!cell.classList.contains("selected")) {
      mainDiagonalWin = false;
      break;
    }
  }
  if (mainDiagonalWin) {
    alert("BINGO");
    document.querySelector(".bingo").hidden = false;
    return;
  }

  let secondaryDiagonalWin = true;
  for (let i = 0; i < num; i++) {
    const cell = rows[i].querySelectorAll("td")[num - 1 - i];
    if (!cell.classList.contains("selected")) {
      secondaryDiagonalWin = false;
      break;
    }
  }
  if (secondaryDiagonalWin) {
    alert("BINGO");
    document.querySelector(".bingo").hidden = false;
    return;
  }
}



export function generateTable(num) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (let i = 0; i < num; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < num; j++) {
      const td = document.createElement("td");
      td.textContent = i * num + j;
      tr.appendChild(td);

      td.addEventListener("click", () => {
   
        td.classList.toggle("selected");

        checkWin(table);
        
      });
    }
    tbody.appendChild(tr);
  }

  return table;
}


function resetBingo() {
  document.querySelector(".bingo").hidden = true;
  const tableContainer = document.getElementById("table");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(generateTable(5)); 
}

document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.getElementById("table");
  if (tableContainer) {
    tableContainer.appendChild(generateTable(5)); 
  } else {
    console.error("Ошибка: контейнер #table не найден.");
  }

  const resetButton = document.querySelector(".bingo input[type='submit']");
  if (resetButton) {
    resetButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      resetBingo();
    });
  }


  
}
);
