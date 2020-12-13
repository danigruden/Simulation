export interface Obstacles {
	x: number;
	y: number;
	velx: number;
	vely: number;
	width: number;
	height: number;

	infected: boolean;
	update: Function;
}
