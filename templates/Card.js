const card = `
<div class='card d-inline-flex text-dark m-3' style='width: 20%;'>
<div class='card-header bg-warning text-dark h3'>
    ${this.name}
    <h6 class='card-subtitle mb-2 text-light'>${this.id}</h6>
</div>
<div class='card-body'>
    <ul class='list-group'>
        <li class='list-group-item'>ID: ${this.id}</li>
        <li class='list-group-item'>Email:<a href='mailto:${this.email}'>${this.email}</a></li>
    </ul>
</div>
</div>
`;

module.exports = {
    card: card
};