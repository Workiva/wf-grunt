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
			this.prowess = 1;
		}
	}
}
export = Animals;