var compare = {
	name: function(a,b) {
			a = a.replace(/^the /i, '');
			b = b.replace(/^the /i, '');
			
			if(a < b) {
				return -1;
			} else {
				return a > b ? 1 : 0:
			}
	},
	duration: function(a,b) {
		a = a.split(':');
		b = b.split(':');
		
		a = number(a[0]) * 60 + number(a[1]);
		b = number(b[0]) * 60 + number(b[1]);
		
		return a - b;
	},
	date: function(a, b){
		b = new Date(a);
		b = new Date(b);
	
		return a - b;
	}
};
