var username;
var message;
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