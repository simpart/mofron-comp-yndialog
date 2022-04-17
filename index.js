/**
 * @file mofron-comp-jspreadsheet/index.js
 * @brief jspreadsheet component for mofron
 * @license MIT
 */
const Dialog  = require('mofron-comp-dialog'); 
const Text    = require('mofron-comp-text');
const HrzPos  = require('mofron-effect-hrzpos');
const HrzCent = require('mofron-layout-hrzcenter');
const Click   = require('mofron-event-click');

module.exports = class extends Dialog {
    /**
     * initialize component
     * 
     * @param (mixed) string: message text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("YNDialog");
            this.shortForm("text");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.size("4rem","2.5rem");
            
	    this.btnWrap().child(new Text({
                text: "No",
		event: new Click(new mofron.class.ConfArg(
                           (n1,n2,n3) => { n3.visible(false); },
			   this
		       ))
	    }));
            this.button("Yes", {
                "clickEvent" : new mofron.class.ConfArg(
                    (b1,b2,b3) => { b3.visible(false); },
                    this
                )
            });
            
            this.layout(new HrzCent(90));
            this.text().config({
                style: { "margin-top" : "0.4rem" },
                size:  "0.2rem",
                effect: new HrzPos("center")
            });
	    let conts = new mofron.class.Component(this.text());
            this.child(conts);
	    this.childDom(conts.rootDom()[0]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * button text
     * 
     * @param (mixed) string: yes button text
     *                mofron-comp-text: yes button text component
     * @param (mixed) string: no button text
     *                mofron-comp-text: no button text component
     * @type parameter
     */
    buttonText (yes, no) {
        try {
            this.button()[1].text(yes);
	    this.button()[0].text(no);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    /**
     * dialog message
     * 
     * @param (mixed) string: message text
     *                mofron-comp-text: text component for message
     * @param (dict) component config
     * @type parameter
     */
    text (prm, opt) {
        try {
            if ("string" === typeof prm) {
                prm = prm.replace("\n", "<br>");
                this.text().text(prm);
                this.text().config(opt);
                return;
            }
            return this.innerComp("text", prm, Text);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
