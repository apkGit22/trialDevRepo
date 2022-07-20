import { LightningElement, track } from 'lwc';

export default class Sample extends LightningElement {

    /* connectedCallback() {
         this.setDatatableHeight();
     }*/
    @track hgt;
    get setDatatableHeight() {
        var body = document.body;
        var html = document.documentElement;

        //this.hgt = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        this.hgt = window.innerHeight;
        console.log("h1" + this.hgt);
        //document.getElementById('custhgt').style.height = hgt + "px";
        //this.template.querySelector('.custhgt').style.height = hgt + "px";
        return 'height:' + ((this.hgt) - 250) + 'px';
        console.log("h2" +
            (this.hgt) - 250);
    }
}