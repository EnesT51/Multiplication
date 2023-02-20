const TableMultiplication = {"Table 2": 2, "Table 4":4, "Table 6": 6, "Table 8": 8};
function MainFuction(table){
   Object.entries(table).forEach(([key, val]) => { 
      for(let i = 1; i < 11; i++){
         document.getElementById(key).innerHTML += `${i} * ${val} = ` + i * val + "<br>";
      } 
   });
}
MainFuction(TableMultiplication);

