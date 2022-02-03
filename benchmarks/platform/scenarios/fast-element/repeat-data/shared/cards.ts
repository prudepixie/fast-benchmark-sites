import { FASTElement, customElement, attr, html, repeat } from '@microsoft/fast-element';
import { Card } from './card';

const template = html<Cards>`

${repeat(x => JSON.parse(x.data), html<Card>`
    <div class="card">
        <h1>
            ${x => x.firstName + ' ' + x.lastName}
        </h1>
        <p>
            ${x => x.email}
        </p>
        <p>
            ${x => x.gender}
        </p>
        <p>
            ${x => x.ipAddress}
        </p>
        <hr>
        <div>
            <button>Cancel</button>
            <button>Ok</button>
        </div>
    </div>
    `)}
`

@customElement({
    name: 'fast-cards',
    template
})

export class Cards extends FASTElement {
  @attr data: string = ''

}