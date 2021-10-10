//Button Event
function displayBuildings() {

    let bld1 = Number(document.getElementById('bld1').value);
    let bld2 = Number(document.getElementById('bld2').value);
    let bld3 = Number(document.getElementById('bld3').value);
    let bld4 = Number(document.getElementById('bld4').value);
    let bld5 = Number(document.getElementById('bld5').value);

    let buttonArray = [bld1, bld2, bld3, bld4, bld5];

    if (bld1 == "" || bld2 == "" || bld3 == "" || bld4 == "" || bld5 == "" ) {
        document.getElementById("result").innerHTML = `You must input numbers for all buildings.`;
    }
    else {
        sunsetArray(buttonArray);
        document.getElementById("result").innerHTML = `${results}`;
    }

};

//Sunset Hills Main Algorithm
function sunsetArray() {

    //Taking Input Values
    let bld1 = Number(document.getElementById('bld1').value);
    let bld2 = Number(document.getElementById('bld2').value);
    let bld3 = Number(document.getElementById('bld3').value);
    let bld4 = Number(document.getElementById('bld4').value);
    let bld5 = Number(document.getElementById('bld5').value);

    //Storing Input Values As An Array
    let allBlds = [bld1, bld2, bld3, bld4, bld5];

    let sunsetView = ['Building #1 <i>always</i> watches the sunset'];

    //Loop over array and check if the number is smaller to one to left of it
    for (let currentBld = 1; currentBld < allBlds.length; currentBld++) {

        let tallestBld = false;

        for (let prevBld = 0; prevBld < currentBld; prevBld++) {
            if (allBlds[prevBld] >= allBlds[currentBld]) {
                tallestBld = true;
                break;
            }
            else {
                continue;
            }
        }

        if (tallestBld == false) {
            sunsetView.push("Building #" + (currentBld + 1) + " <u>can</u> watch the sunset");
        }
        else {
            sunsetView.push("Building #" + (currentBld + 1) + " <b>can not</b> watch the sunset");
        }

        let results = sunsetView.join("<br>");
        document.getElementById("result").innerHTML = `${results}`;

    }
}