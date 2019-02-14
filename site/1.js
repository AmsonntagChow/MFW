var username;
var message;
var today = new Date();
var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	checkAvailability:function() {
		return this.rooms - this.booked;
	}
};

username = 'Amos';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;
var elRooms = document.getElementById('rooms')
elRooms.textContent = hotel.
checkAvailability();
var elTime = document.getElementById('time');
elTime.textContent = today;
window.alert("23333")
window.alert("ktynb")
window.alert("ktynb")
window.alert("ktynb")
window.alert("ktynb")
window.alert("ktynb")
window.open("http://baidu.com")