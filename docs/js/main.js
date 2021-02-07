function setup () {
    const amounts = {
        u: 100, g: 10, o: 1,
        r: 4, w: 2, x: 1
    };
    const idxs = {
        u: 0, g: 3, o: 6,
        r: 0, w: 1, x: 2
    };

    return {
        data: {
            u: { r: false, w: false, x: false },
            g: { r: false, w: false, x: false },
            o: { r: false, w: false, x: false }
        },

        updateOctal: function(octal) { // setter
            octal = octal.replace(/[^0-7]/g, '');
            if(octal.length != 3) return;
            let chmod = parseInt(octal);
            for(let group of ['u','g','o']) {
                for(let action of ['r','w','x']) {
                    let val = amounts[group] * amounts[action];
                    this.data[group][action] = chmod >= val;
                    if(this.data[group][action]) chmod -= val;
                }
            }
        },

        updateMode(mode) { // setter
            mode = mode.substring(1);
            for(let group of ['u','g','o']) {
                for(let action of ['r','w','x']) {
                    let idx = idxs[group] + idxs[action];
                    this.data[group][action] = mode[idx] == action;
                }
            }
        },

        get octal() {
            let num = 0;
            for(let group of ['u','g','o']) {
                for(let action of ['r','w','x']) {
                    num += this.data[group][action] ? amounts[group] * amounts[action] : 0;
                }
            }
            octal = num.toString().padStart(3, '0');

            const url = new URL(window.location.href);
            url.searchParams.set('q', octal);
            history.pushState(null, document.title, url.toString());

            return octal;
        },

        get mode() {
            let txt = '-';
            for(let group of ['u','g','o']) {
                for(let action of ['r','w','x']) {
                    txt += this.data[group][action] ? action : '-';
                }
            }
            return txt;
        },

        more: false,
        filename: 'myfile',
        // operator: '+',
        get command() {
            return `chmod ${this.octal} ${this.filename}`;
        }

    }
}