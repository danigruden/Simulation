import { SingleObstacles } from './../interfaces/single-obstacle';

export const playGroundHeight = 800;
export const playGroundWidth = 800;
export const frameNumber = 0;
export const spritePath = '../assets/img/sprites.png';
export const playerCarSpeed = 5;
export const playerCar = {
	sX: 410,  // Black Viper car
	sY: 265,
	sWidth: 64,
	sHeight: 135,
	width: 40,
	height: 90,
};
export const vehicles: SingleObstacles[] = [
	{
		sX: 0, // Green subject
		sY: 0,
		sWidth: 100,
		sHeight: 100,
		width: 30,
		height: 30,
	}, {
		sX: 225,  // Red car
		sY: 268,
		sWidth: 64,
		sHeight: 135,
		width: 30,
		height: 30,
	}/*, {
		sX: 161,  // Yellow car
		sY: 265,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 225,  // Red car
		sY: 268,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 287,  // Blue car
		sY: 271,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 348,  // Red Audi car
		sY: 270,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 476,  // Orange car
		sY: 265,
		sWidth: 62,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 543,  // Texi
		sY: 265,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 610,  // Police
		sY: 265,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
	}, {
		sX: 605,  // Sky Blue truck
		sY: 0,
		sWidth: 80,
		sHeight: 160,
		width: 60,
		height: 120,
	}, {
		sX: 460,  // Ambulance
		sY: 0,
		sWidth: 75,
		sHeight: 160,
		width: 60,
		height: 120,
	}, {
		sX: 531,  // MiniVan
		sY: 0,
		sWidth: 70,
		sHeight: 160,
		width: 45,
		height: 140,
	}, {
		sX: 368,  // Truck
		sY: 0,
		sWidth: 90,
		sHeight: 220,
		width: 60,
		height: 140,
	}, {
		sX: 190,  // Orange Trailer
		sY: 0,
		sWidth: 70,
		sHeight: 260,
		width: 55,
		height: 200,
	}, {
		sX: 285,  // Blue Trailer
		sY: 0,
		sWidth: 70,
		sHeight: 260,
		width: 55,
		height: 200,
	}
	*/
];
