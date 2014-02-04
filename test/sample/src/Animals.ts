module Animals {
    export class Animal {

        name: string;

        constructor(name) {
            this.name = name;
            console.log(name);
        }
    }

    // hidden internal class
    export class Bird extends Animal {
        wings: boolean;
        prowess: number;
        constructor(name) {
            super(name);
            this.wings = true;
            console.debug('yo');
        }
    }

    // exposed subclass
    export class Eagle extends Bird {

        constructor() {
            super('Eagle!');
            this.prowess = 11;
        }
    }

    class Turkey extends Bird {
        constructor() {
            super('Turkey');
            try {
                this.prowess = 1;
            } catch (x) { console.log(x); }
            var obj = {
                a: 1,
                b: 2,
                d: 'something'
            };
            var c = obj['crap' + obj.a];

            if (obj) {
                obj.d = 'data';
            }
            else {
                obj.d = 'nada';
            }

            try {
                obj.a = 5;
            }
            catch (ex) {
                console.log('oh boy');
            }

        }
    }
}
export = Animals;
