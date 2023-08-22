'use strict'
class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		} else if (this.alarmCollection.indexOf(time) === 1) {
			console.warn("Уже присутствует звонок на это же время")
		} else {
			this.alarmCollection.push({
				time,
				callback,
				canCall: true
			})
		}
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(calls => calls.time !== time)
	}

	getCurrentFormattedTime() {
		const date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes(); 
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId === null) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(call => {
					if (call.time === this.getCurrentFormattedTime() && call.canCall) {
						call.canCall = false;
						call.callback();
					}
				})
			}, 0)
		} else {
			return;
		}
	}


	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(calls => calls.canCall = true);
	}

	clearAlarms() {
		this.stop;
		this.alarmCollection = [];
	}
}