
var greenCountrys =     'Canada and United States';
var yellowCountrys =    'Argentina, Brazil, Chile, Colombia, Costa Rica, Dominica, Ecuador, Mexico,\
                        Panama, Peru, Puerto Rico and Uruguay';

var greenIndustries =   'Automobiles	Automotive	Aviation & Aerospace Banking Broadcast Media \
                        Business Services	Computer & Network Security	Computer Games Computer \
                        Hardware	Computer Networking	Computer Software	Consumer Electronics	\
                        Consumer Goods	Consumer Services	Defense & Space	E-Learning	\
                        Electrical/Electronic Manufacturing	Electronics	Entertainment	\
                        Financial Services	Human Resources	Information Services	\
                        Information Technology and Services	Internet	Investment Banking\
                        Investment Management	Management Consulting	Market Research	Marketing and Advertising\
                        Media Production	Motion Pictures and Film	Motor Vehicle Dealers	\
                        Online Media Staffing and Recruiting	Telecommunications';
var yellowIndustries = 'Animation	Architecture & Planning	Biotechnology	Boats & Submarines	\
                        Brokerage	Design	Education	Education Management	Executive Office \
                        Graphic Design Higher Education	Industrial Automation Insurance International \
                        Trade and Development, Leisure, Travel & Tourism	Logistics and Supply Chain	Luxury Goods & Jewelry	Medical Devices	\
                        Medical Practice	Military	Newspapers	Nonprofit Organization Management	Oil & Energy	\
                        Outsourcing/Offshoring	Package/Freight Delivery	Photography	Primary/Secondary Education	\
                        Printing	Professional Training & Coaching	Program Development	Public \
                        Relations and Communications	Research	Retail	Security and Investigations	Security \
                        Products & Services	Shipbuilding	Test & Measurement Equipment	\
                        Think Tanks	Translation and Localization	Venture Capital & Private Equity	\
                        Wholesale	Wire & Cable	Writing and Editing';

var greenCurrentRoles = ['president','engineer','vp','ceo','cto','business','dev','product','direct','software','tech'];
var yellowCurrentRoles =['manag','account','program','arch','financ','application','advert','market','recruit'];

function searchPotentialClientsByCountry () {
    for (var i = 0; i<personsArray.length ; i++) {
        var currentPerson = personsArray[i];
        if (searchTag(currentPerson.Country, greenCountrys)) {
            currentPerson.MatchScore+=25;
        } else if (searchTag(currentPerson.Country, yellowCountrys)) {
            currentPerson.MatchScore+=5;
        } else {
            currentPerson.MatchScore-=100;
        }
    }
}

function searchPotentialClientsByIndustry () {
    for (var i=0 ; i<personsArray.length ; i++ ) {
        var currentPerson = personsArray[i];
        if (searchTag(currentPerson.Industry, greenIndustries)) {
            currentPerson.MatchScore+=25;
        } else if (searchTag(currentPerson.Industry, yellowIndustries)) {
            currentPerson.MatchScore+=5;
        } else {
            currentPerson.MatchScore-=100;
        }
    }
}

function searchPotentialClientsByCurrentRole () {
    for (var i = 0; i<personsArray.length ; i++) {
        var cataloged = false ;
        var currentPerson = personsArray[i];
        for (var j = 0; j<greenCurrentRoles.length ; j++) {
            if (searchTag(greenCurrentRoles[j], currentPerson.CurrentRole)) {
                currentPerson.MatchScore+=25;
                cataloged = true;
                break;
           }
        }

        if (!cataloged) {
            for (var k = 0; k<yellowCurrentRoles.length ; k++) {
                if (searchTag(yellowCurrentRoles[k], currentPerson.CurrentRole))  {
                    currentPerson.MatchScore+=5;
                    cataloged = true;
                    break;
                }
            }
        }
        if (!cataloged) {
            currentPerson.MatchScore-=100;
        }
    }
}


function searchPotentialClientsByConnections () {
    for (var i=0 ; i<personsArray.length ; i++ ) {
            var currentPerson = personsArray[i];
        if (currentPerson.NumberOfConnections>=100) {
            currentPerson.MatchScore+=25;
        } else if (currentPerson.NumberOfConnections>=10) {
            currentPerson.MatchScore+=5;
        } else {
            currentPerson.MatchScore-=100;
        }
    }
}

function sortByMatchScore () {
    personsArray.sort(function (personA, personB) {
       if (personA.MatchScore > personB.MatchScore) {
            return -1;
        } else if (personA.MatchScore < personB.MatchScore) {
            return 1;
        } else {
        return 0;
        }
    });
}

function searchTag(searchedTag, longStr) {
    if (longStr.search(searchedTag) != -1) {
        return true;
    } else {
        return false;
    }
}