export const cardTemplate = `
    <div class="card">
        <h1>
            ${x => x.first_name + ' ' + x.last_name}
        </h1>
        <p>
            ${x => x.email}
        </p>
        <p>
            ${x => x.gender}
        </p>
        <p>
            ${x => x.ip_address}
        </p>
        <hr>
        <div>
            <button>Cancel</button>
            <button>Ok</button>
        </div>
    </div>`

