// pages/home/home.js
Page({

	data: {
		titles:['衣服','裤子','帽子']
	},

	handleTouchStart(){
		console.log('handleTouchStart');
	},

	handleEventClick(event){
		console.log(event);
	},
	handleEventEnd(event){
		console.log('+++++++',event);
	},
	handleItemClick(event){
		console.log(event);
		const dataset=event.currentTarget.dataset
		const item=dataset.item
		const index=dataset.index
		console.log(item,index);
	},

	handleCaptureBox1(){
		console.log('handleCaptureBox1');
	},
	handleBindBox1(){
		console.log('handleBindBox1');
	},
	handleCaptureBox2(){
		console.log('handleCaptureBox2');
	},
	handleBindBox2(){
		console.log('handleBindBox2');
	},
	handleCaptureBox3(){
		console.log('handleCaptureBox3');
	},
	handleBindBox3(){
		console.log('handleBindBox3');
	}
})