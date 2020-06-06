var personsArray = [];
var potentialClients = [];
var out = "";

var input = myForm.myInput;
input.addEventListener('change', onChange);

var reader = new FileReader;

function onChange(event) {
  var file = event.target.files[0];
  reader.readAsText(file);
  reader.onload = onLoad;
}

function onLoad() {
    var result = reader.result;
    var lines = result.split('\n');
     
    for(var line of lines) {
        line = line.split('|');        
        if (line!='') {
            if (line[3].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')=='') {
                line[3]="not informed";
            }
            if (line[5]=='') {
                line[5]="not informed";
            }
            var id = parseInt(line[0]);
            var role = line[3].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            var recommendations = parseInt(line[6]);
            var connections = parseInt(line[7]);
            var personI = [];
            var personI = new Person(id,line[1],line[2],role,line[4],line[5],recommendations,connections);
            personsArray.push(personI);
        }
    }
    searchPotentialClients();
}

function searchPotentialClients() {
    searchPotentialClientsByCountry ();
    searchPotentialClientsByCurrentRole ();
    searchPotentialClientsByIndustry ();
    searchPotentialClientsByConnections ();
    sortByMatchScore ();
    select100BestProfiles ();
    download('people.out', out);
}