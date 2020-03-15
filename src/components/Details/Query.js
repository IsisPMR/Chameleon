const fetch = require("node-fetch");
let url = '';

function validateLink(link) {
    fetch(url,link.String)
    .then((response) => {
        return response.status === 200 ? true : false;
    });
}

export default validateLink;