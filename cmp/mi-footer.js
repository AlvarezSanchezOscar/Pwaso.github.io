class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alvarez Sanchez Oscar 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
