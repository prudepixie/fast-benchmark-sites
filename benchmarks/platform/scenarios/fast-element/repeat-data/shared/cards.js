var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { FASTElement, customElement, attr, html, repeat } from 'https://cdn.jsdelivr.net/npm/@microsoft/fast-element@1.6.2/dist/fast-element.min.js';
// import { FASTElement, customElement, attr, html, repeat } from '@microsoft/fast-element';
// import { FASTElement, customElement, attr, html, repeat } from "../../../../../../node_modules/@microsoft/fast-element";
const template = html`

${repeat(x => JSON.parse(x.data), html`
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
`;
let Cards = class Cards extends FASTElement {
    constructor() {
        super(...arguments);
        this.data = '';
    }
};
__decorate([
    attr
], Cards.prototype, "data", void 0);
Cards = __decorate([
    customElement({
        name: 'fast-cards',
        template
    })
], Cards);
export { Cards };
