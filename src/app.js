let pronoun = ["the", "our", "a", "your"];
let adj = ["great", "big", "lastof"];
let noun = ["jogger", "racoon", "us"];
let ext = ["com", "net", "us", "io"];

// Function to generate domain names
function generateDomainNames() {
  let domainNames = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k];
          if (ext[l] === "us" && domain.endsWith("us")) {
            // Domain hack for .us
            domainNames.push(domain.slice(0, -2) + "." + ext[l]);
          } else {
            domainNames.push(domain + "." + ext[l]);
          }
        }
      }
    }
  }
  return domainNames;
}

// Function to display a random domain name
function displayRandomDomainName() {
  let domainNames = generateDomainNames();
  let randomIndex = Math.floor(Math.random() * domainNames.length);
  document.getElementById("domain").textContent = domainNames[randomIndex];
}

window.onload = function() {
  // Display a random domain name on page load
  displayRandomDomainName();

  // Add click event listener to the "Generate Domain" button
  document
    .getElementById("generate-domain-btn")
    .addEventListener("click", function() {
      displayRandomDomainName();
    });
};
