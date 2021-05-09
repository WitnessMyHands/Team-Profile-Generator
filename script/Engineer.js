const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    createCard() {
        let thisHTML = `
        <div class='card d-inline-flex text-dark m-3' style='width: 20%;'>
        <div class='card-header bg-warning text-dark h3'>
            ${this.name}
            <h6 class='card-subtitle mb-2 text-light'>Software Engineer</h6>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${this.id}</li>
                <li class='list-group-item'>Email:<a href='mailto:${this.email}'>${this.email}</a></li>
                <li class='list-group-item'>GitHub Username:<a href='https://www.github.com/${this.github}'>${this.github}</a></li>
            </ul>
        </div>
        </div>
        `;

        return thisHTML;
    }
}

module.exports = Engineer;