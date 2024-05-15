class Navbar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= `
        TEST
  `
    }
}

customElements.define('nav-template', Navbar);
