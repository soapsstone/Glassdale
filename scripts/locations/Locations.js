export function Location(locationObject){
    return `
    <div class="note-card">
        <p><h4>ID: ${locationObject.id}</h4></p>
        <p><h4>Facility Name: ${locationObject.name}</h4></p>
        <p><h4>Security Level: ${locationObject.securityLevel}</h4></p>
        <p><h4>Capacity: ${locationObject.capacity}</h4></p>
    </div>`
}