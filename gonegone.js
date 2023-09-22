const movie = {
    title: "Gone With the Wind",
    year: 1939,
    actressLead: "Vivien Leigh",
    actorLead: "Clark Gable",
    genre: "Epic",
    academyAwards: 8,
    leadingRole: function(actor) {
        return this[actor] || 'undefined';
    },
    formatInfo: function() {
        return `${this.title} was released in ${this.year}. It tells the story of the civil war in the US.`;
    },
    quote: "Frankly My Dear, I don't give a damn"
};

// Part 2: Access and print various properties and methods
console.log(movie);
console.log("Most famous quote from the movie: " + movie.quote);

let role = movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role: " + movie.leadingRole("actressLead"));

const roleWithMostVotes = "actorLead";
console.log("Role with most votes is " + movie.leadingRole(roleWithMostVotes));

// Part 3: Add the profits attribute to the movie object
movie.profits = {
    yearOfRelease: 10,
    subsequentToDate: 40

};

// Part 4: Access and print the yearOfRelease attribute from profits
console.log("Profits the year of release: " + movie.profits.yearOfRelease);
