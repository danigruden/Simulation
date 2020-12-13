import { Injectable, Input } from '@angular/core';

import * as CONFIG from './../config/config';
import { Obstacles } from './../interfaces/obstacles';
import { SingleObstacles } from './../interfaces/single-obstacle';
import { PlayerPosition } from './../interfaces/player-position';

@Injectable()
export class GameService {

	@Input() public width: number = CONFIG.playGroundWidth;
	@Input() public height: number = CONFIG.playGroundHeight;
	frameNumber: number = CONFIG.frameNumber;
	player: PlayerPosition = {
		x: CONFIG.playGroundWidth / 2 - CONFIG.playerCar.width,
		y: CONFIG.playGroundHeight - (CONFIG.playerCar.height + CONFIG.playerCar.height / 2),
	};

	context: CanvasRenderingContext2D;
	obstacles: Array<Obstacles> = [];
	image: HTMLImageElement = null;
	gameLoop = null;
	moveUP = false;
	moveDown = false;
	moveLeft = false;
	moveRight = false;
	inputNum;
	inputNumTableX;
	inputNumTableY;

	loadAssets(canvasElement: HTMLCanvasElement): Promise<void> {
		this.context = canvasElement.getContext('2d');
		canvasElement.width = this.width;
		canvasElement.height = this.height;
		return new Promise((resolve, reject) => {
			this.image = new Image();
			this.image.src = CONFIG.spritePath;
			this.image.width = 58;
			this.image.height = 128;
			resolve();
		});

	}

	startGameLoop() {
		this.gameLoop = setInterval(() => {
			this.suffleProperties();
			this.cleanGround();
			this.createObstacles();
			this.moveObstacles();
			this.collWithSubject();
			//	this.createPlayer();
		}, 15);
	}

	animationFrame(n: number): boolean {
		if ((this.frameNumber / n) % 1 === 0) { return true; }
		return false;
	}

	suffleProperties(): void {
		this.frameNumber += 1;
	}

	createObstacles(): void {
		if (this.frameNumber === 1 || this.animationFrame(10)) { }

		//console.log(Math.sqrt(this.inputNum + 1));

		this.inputNumTableX = Math.sqrt(this.inputNum + 1);
		this.inputNumTableY = Math.sqrt(this.inputNum + 1);

		for (var posX = 0; posX < this.inputNumTableX; posX++) {

			for (var posY = 0; posY < this.inputNumTableY; posY++) {

				if (this.obstacles.length <= this.inputNum) {
					this.getSingleObstacle(posX, posY, Math.sqrt(this.inputNum + 1));
				}
				//this.getSingleObstacle();
			}
		}

	}

	getSingleObstacle(posX: number, posY: number, inNum: number): void {
		const context: CanvasRenderingContext2D = this.context;
		const image: HTMLImageElement = this.image;
		const randomVehicle: SingleObstacles = CONFIG.vehicles[0];
		const infSubject: SingleObstacles = CONFIG.vehicles[1];

		this.obstacles.push(new function () {
			var subjectsSpeed = 3;
			//var subjectsSpeed = 0;

			this.x = Math.floor(Math.random() + posX * ((CONFIG.playGroundWidth - 100) / inNum)) + 50,
				this.y = Math.floor(Math.random() + posY * ((CONFIG.playGroundHeight - 100) / inNum)) + 50,

				console.log(Math.sqrt(this.inputNum + 1));
			//this.x = (posX * 170) + 100;
			//this.y = (posY * 170) + 100

			this.velx = (Math.random() * subjectsSpeed*2 - subjectsSpeed);
			this.vely = Math.random() < 0.5 ? -Math.sqrt((subjectsSpeed * subjectsSpeed) - (this.velx * this.velx)) : Math.sqrt((subjectsSpeed * subjectsSpeed) - (this.velx * this.velx));

			this.width = randomVehicle.width;
			this.height = randomVehicle.height;

			this.wBounceCdSub= 0;
			this.hBounceCdSub= 0;

			this.update = () => {

				if (!this.infected) {

					context.drawImage(
						image,
						randomVehicle.sX, randomVehicle.sY,
						randomVehicle.sWidth, randomVehicle.sHeight,
						this.x, this.y,
						randomVehicle.width, randomVehicle.height

					);
				} else if (this.infected) {
					context.drawImage(
						image,
						infSubject.sX, infSubject.sY,
						infSubject.sWidth, infSubject.sHeight,
						this.x, this.y,
						randomVehicle.width, randomVehicle.height
					);
				}
			};
		});
	}

	moveObstacles(): void {
		this.obstacles.forEach((element: Obstacles, index: number) => {
			//element.y += 3;
			if (index == 0) {
				element.infected = true;
			}
			element.x += element.velx;
			element.y += element.vely;

			this.detectEdge(element, index);
			element.update();
		});
	}


	// Wall bounces
	detectEdge(obstacle: Obstacles, index): void {

		const componentLeftSide = obstacle.x;
		const componentRightSide = obstacle.x + obstacle.width;
		const componentTop = obstacle.y;
		const componentBottom = obstacle.y + obstacle.height;

		this.obstacles.forEach((element: Obstacles) => {

				if (componentLeftSide <= 0) {
					if(obstacle.velx < 0){
					obstacle.velx = -obstacle.velx;
					}
				//	obstacle.x = 0;
				}
				if (componentRightSide >= this.width) {
					if(obstacle.velx > 0){
					obstacle.velx = -obstacle.velx;
					}
				//	obstacle.x = this.width - obstacle.width;
				}

				if (componentBottom >= this.height) {
					if(obstacle.vely > 0){
					obstacle.vely = -obstacle.vely;
					}
				}
				if (componentTop <= 0) {
					if(obstacle.vely <0){
					obstacle.vely = -obstacle.vely;
					}
				}

			element.update();
		});
	}

	collWithSubject(): void {

		this.obstacles.forEach((subjectOne: Obstacles) => {

			const componentLeftTopX1 = subjectOne.x;
			const componentLeftTopY1 = subjectOne.y;
			const componentRightBotX1 = subjectOne.x + subjectOne.width;
			const componentRightBotY1 = subjectOne.y + subjectOne.height;

			this.obstacles.forEach((subjectTwo: Obstacles) => {

				const componentLeftTopX2 = subjectTwo.x;
				const componentLeftTopY2 = subjectTwo.y;
				const componentRightTopX2 = subjectTwo.x + subjectTwo.width;
				const componentRightTopY2 = subjectTwo.y;


				if ( (componentLeftTopX2 >= componentLeftTopX1 && componentLeftTopX2 <=  componentRightBotX1 && componentLeftTopY2 >= componentLeftTopY1  && componentLeftTopY2  <= componentRightBotY1) 
				|| (componentRightTopX2 >= componentLeftTopX1 && componentRightTopX2 <=  componentRightBotX1 && componentRightTopY2 >= componentLeftTopY1  && componentRightTopY2  <= componentRightBotY1)) {

					// TODO bounce of subjects with same direction --> the first one gets the velocity of the second one

					var velX1before = subjectOne.velx;
					var velY1before = subjectOne.vely;

					if (subjectOne.infected || subjectTwo.infected) {
						subjectOne.infected = true;
						subjectTwo.infected = true;
					}
					// Right top of second collides with first square	
					if(componentRightTopY2 >= componentLeftTopY1+ (subjectOne.height*0.1) && componentRightTopY2 <= subjectOne.height+ componentLeftTopY1 - (subjectOne.height*0.1)) {
						// On left side
						if(componentRightTopX2 >= componentLeftTopX1 && componentRightTopX2 <= componentLeftTopX1 + (subjectOne.width*0.3)){
							if(subjectTwo.velx > 0 && subjectOne.velx < 0){
								subjectOne.velx = -subjectOne.velx;
								subjectTwo.velx = -subjectTwo.velx;
							}else if(subjectTwo.velx > 0 && subjectOne.velx > 0){
								subjectOne.velx = subjectTwo.velx;
								subjectOne.vely = subjectTwo.vely;

								subjectTwo.velx = velX1before;
								subjectTwo.vely = velY1before;
							}
						}		
					}
					if(componentRightTopX2 >= componentLeftTopX1+ (subjectOne.width*0.1) && componentRightTopX2 <= subjectOne.width + componentLeftTopX1 - (subjectOne.width*0.1)) {
						// On bottom
						console.log(subjectTwo.width);
						console.log("Col Ein!!");
						if(componentRightTopY2 <= componentLeftTopY1 + subjectOne.height && componentRightTopY2  <= (componentLeftTopY1 + subjectOne.height - (subjectOne.height*0.3))){
							console.log("Col Zwei!!");
							if(subjectTwo.vely < 0 && subjectOne.vely > 0){
								console.log("Col Drei!!");
	
								subjectOne.vely = -subjectOne.vely;
								subjectTwo.vely = -subjectTwo.vely;
							}else if(subjectTwo.vely > 0 && subjectOne.vely > 0){
								subjectOne.velx = subjectTwo.velx;
								subjectOne.vely = subjectTwo.vely;

								subjectTwo.velx = velX1before;
								subjectTwo.vely = velY1before;
							}
						}			
					}
					// Left top of second collides with first square
					if(componentLeftTopY2 >= componentLeftTopY1+ (subjectOne.height*0.1) && componentLeftTopY2 <= subjectOne.height+ componentLeftTopY1 - (subjectOne.height*0.1)) {
						// On right side
					//	console.log("Col A");
						if(componentLeftTopX2 <= componentLeftTopX1 + subjectOne.width && componentLeftTopX2 >= componentLeftTopX1 +subjectOne.width - (subjectOne.width*0.3)){
						//	console.log("Col B");

							if(subjectTwo.velx < 0 && subjectOne.velx > 0){
							//	console.log("Col C");

								subjectOne.velx = -subjectOne.velx;
								subjectTwo.velx = -subjectTwo.velx;
							}else if(subjectTwo.velx < 0 && subjectOne.velx < 0){
								subjectOne.velx = subjectTwo.velx;
								subjectOne.vely = subjectTwo.vely;

								subjectTwo.velx = velX1before;
								subjectTwo.vely = velY1before;
							}
						}
					}
					if(componentLeftTopX2 >= componentLeftTopX1+ (subjectOne.width*0.1) && componentLeftTopX2 <= subjectOne.width+ componentLeftTopX1 - (subjectOne.width*0.1)) {
						// On bottom
						console.log("This works 1");
						if(componentLeftTopY2 <= componentLeftTopY1 + subjectOne.height && componentLeftTopY2  <= componentLeftTopY1 + subjectOne.height - (subjectOne.height*0.3)){
							console.log("This works 2");
							if(subjectTwo.vely < 0 && subjectOne.vely > 0){
								console.log("This works 3");
								subjectOne.vely = -subjectOne.vely;
								subjectTwo.vely = -subjectTwo.vely;
							}else if(subjectTwo.vely < 0 && subjectOne.vely < 0){
								subjectOne.velx = subjectTwo.velx;
								subjectOne.vely = subjectTwo.vely;

								subjectTwo.velx = velX1before;
								subjectTwo.vely = velY1before;
							}
						}	
					}	

				}

				subjectOne.update();
				subjectTwo.update();
			});
		});
	}



	detectCollision(obstacle: Obstacles): void {

		const componentLeftSide = obstacle.x;
		const componentRightSide = obstacle.x + obstacle.width;
		const componentTop = obstacle.y;
		const componentBottom = obstacle.y + obstacle.height;

		const carRightSide = this.player.x + CONFIG.playerCar.width;
		const carLeftSide = this.player.x;
		const carTop = this.player.y;
		const carBottom = this.player.y + CONFIG.playerCar.height;

		if ((
			(carRightSide > componentLeftSide) && (carTop < componentBottom)
		) && (
				(carLeftSide < componentRightSide) && (carTop < componentBottom)
			) && (
				(carRightSide > componentLeftSide) && (carBottom > componentTop)
			) && (
				(carLeftSide < componentRightSide) && (carBottom > componentTop)
			)
		) {
			clearInterval(this.gameLoop);
			alert('Game Over');
			window.location.reload();
		}
	}



	detectCrash(obstacle: Obstacles): void {

		const componentLeftSide = obstacle.x;
		const componentRightSide = obstacle.x + obstacle.width;
		const componentTop = obstacle.y;
		const componentBottom = obstacle.y + obstacle.height;

		const carRightSide = this.player.x + CONFIG.playerCar.width;
		const carLeftSide = this.player.x;
		const carTop = this.player.y;
		const carBottom = this.player.y + CONFIG.playerCar.height;

		if ((
			(carRightSide > componentLeftSide) && (carTop < componentBottom)
		) && (
				(carLeftSide < componentRightSide) && (carTop < componentBottom)
			) && (
				(carRightSide > componentLeftSide) && (carBottom > componentTop)
			) && (
				(carLeftSide < componentRightSide) && (carBottom > componentTop)
			)
		) {
			clearInterval(this.gameLoop);
			alert('Game Over');
			window.location.reload();
		}
	}


	cleanGround(): void {
		this.context.clearRect(0, 0, CONFIG.playGroundWidth, CONFIG.playGroundHeight);
	}

}
