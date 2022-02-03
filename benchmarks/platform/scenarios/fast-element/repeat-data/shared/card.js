var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';
const template = html `
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
`;
let Card = class Card extends FASTElement {
    constructor() {
        super(...arguments);
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.gender = '';
        this.ipAddress = '';
    }
};
__decorate([
    attr
], Card.prototype, "firstName", void 0);
__decorate([
    attr
], Card.prototype, "lastName", void 0);
__decorate([
    attr
], Card.prototype, "email", void 0);
__decorate([
    attr
], Card.prototype, "gender", void 0);
__decorate([
    attr
], Card.prototype, "ipAddress", void 0);
Card = __decorate([
    customElement({
        name: 'fast-card',
        template
    })
], Card);
export { Card };
