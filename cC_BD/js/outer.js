function select100BestProfiles () {
    for ( var i=0 ; i < 100 ; i++ ) {
        var currentPerson = personsArray[i];
        out+=currentPerson.PersonId + '\n' ;
    }
    return out;
}