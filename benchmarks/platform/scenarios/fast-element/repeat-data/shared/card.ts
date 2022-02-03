import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';

const template = html<Card>`
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
`

@customElement({
    name: 'fast-card',
    template
})

export class Card extends FASTElement {
  @attr firstName: string = '';
  @attr lastName: string = '';
  @attr email: string = ''
  @attr gender: string = ''
  @attr ipAddress: string = ''
}