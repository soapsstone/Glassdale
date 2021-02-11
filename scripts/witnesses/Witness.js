export function Witness(witnessObject){
    return `
    <div class="card-body-container">
        <p><h4>ID: ${witnessObject.id}</h4></p>
        <p><h4>Name: ${witnessObject.name}</h4></p>
        <p><h4>Statements: ${witnessObject.statements}</h4></p>
    </div>`
}