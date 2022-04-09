export default function buildStandoff(standoff) {
  const standoffDisplayArea = document.querySelector("#standoff-display-area");
  let standoffString = "";
  standoff.forEach(item => {
    let key = Object.keys(item)[0];
    if (item[key] != "") {
      standoffString += JSON.stringify(item) + ", ";
    }
  });
  standoffDisplayArea.innerText = standoffString;
  console.log(standoffString);
}
