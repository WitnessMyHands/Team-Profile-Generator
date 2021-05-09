const Employee = require('./Employee');
const card = require('../templates/Card');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    createCard() {
        let HTML = `
        <div class='card d-inline-flex text-dark bg-warning m-3' style='width: 20%;'>
        <div class='card-header bg-warning text-dark h3'>
            ${this.name}
            <h6 class='card-subtitle mb-2 text-light'>Manager</h6>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${this.id}</li>
                <li class='list-group-item'>Email:<a href='mailto:${this.email}'>${this.email}</a></li>
                <li class='list-group-item'>Office Number: ${this.officeNumber}</li>
            </ul>
        </div>
        </div>
        `
        
        return `
        <div class='card d-inline-flex text-dark bg-warning m-3' style='width: 20%;'>
        <div class='card-header bg-warning text-dark h3'>
            ${this.name}
            <h6 class='card-subtitle mb-2 text-light'>Manager</h6>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
                <li class='list-group-item'>ID: ${this.id}</li>
                <li class='list-group-item'>Email:<a href='mailto:${this.email}'>${this.email}</a></li>
                <li class='list-group-item'>Office Number: ${this.officeNumber}</li>
            </ul>
        </div>
        </div>
        `;
    }
}

module.exports = Manager;