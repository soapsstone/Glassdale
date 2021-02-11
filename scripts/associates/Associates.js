export function Associate(associateObject){
    return `
    <div class="note-card">
        <p><h3>Name: ${associateObject.name}</h3></p>
        <p><h3>Alibi: ${associateObject.alibi}</h3></p>
    </div>`
}