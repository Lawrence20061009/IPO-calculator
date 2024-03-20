document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  //inout
  let SideA = document.getElementById("side A").value;
  let SideB = document.getElementById("side B").value;

  //process

  let SideC = Math.sqrt(SideA ** 2 + SideB ** 2);
  let msg = `Side C your are finding is ${SideC} `;

  //output
  console.log(msg);
  document.getElementById("output").innerHTML = msg;
}
