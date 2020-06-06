class Person {
  constructor(PersonId, Name, LastName, CurrentRole, Country, Industry, NumberOfRecommendations, NumberOfConnections) {
    this.PersonId = PersonId;
    this.Name = Name;
    this.LastName = LastName;
    this.CurrentRole = CurrentRole;
    this.Country = Country;
    this.Industry = Industry;
    this.NumberOfRecommendations = NumberOfRecommendations;
    this.NumberOfConnections = NumberOfConnections;
    this.MatchScore = 0;
  }
}