Array.prototype.clone = function() { return this.slice(0); }
Array.prototype.shuffle = function() {
    for(var j, x, i = this.length-1; i; j = randomNumber(i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};
Array.prototype.indexOf = function (value) {	
    for(var i=0; i<this.length; i++) {
	if(this[i] === value) {
	    return i;
	}
    }
}
Array.prototype.deleteByValue = function (value) {
    var pos = this.indexOf(value);
    this.splice(pos, 1);
}
Array.prototype.next = function (index) {
    if(index === this.length-1) {
	return this[0];
    } else {
	return this[index+1];
    }
}
Array.prototype.previous = function (index) {
    if(index === 0) {
	return this[this.length-1];
    } else {
	return this[index-1];
    }
}
Array.prototype.swap = function (x, y) {
    if(x>this.length || y>this.length || x === y) {return}
    var tem = this[x];
    this[x] = this[y];
    this[y] = tem;
}
Array.prototype.roll = function () {
    var rand = randomNumber(this.length);
    var tem = [];
    for(var i = rand; i<this.length; i++) {
	tem.push(this[i]);
    }
    for(var i = 0; i<rand; i++) {
	tem.push(this[i]);
    }
    return tem;
}
Array.prototype.reject = function (array) {
    return $.map(this,function (ele) {
	return $.inArray(ele, array) < 0 ? ele : null;
    })
}
function intersect(x, y) {
    return $.map(x, function (xi) {
	return $.inArray(xi, y) < 0 ? null : xi;
    })
}
function Point(x, y) {
    this.x = x;
    this.y = y;
}
function randomPoint() {
    var randomx = randomNumber(WIDTH);
    var randomy = randomNumber(HEIGHT);
    var randomPoint = new Point(randomx, randomy);
    return randomPoint; 
}
function randomNumber(boundary) {
    return parseInt(Math.random() * boundary);
    //return Math.floor(Math.random() * boundary);
}
function distance(p1, p2) {
    return euclidean(p1.x-p2.x, p1.y-p2.y);
}
function euclidean(dx, dy) {
    return Math.sqrt(dx*dx + dy*dy);
}
function randomIndivial(n) {
    var a = [];
    for(var i=0; i<n; i++) {
	a.push(i);
    }
    return a.shuffle();
}
function evaluate(indivial) {
    sum = 0;
    for(var i=0, j=indivial.length-1; i<j; i++) {
	sum += dis[indivial[i]][indivial[i+1]];
    }
    sum += dis[indivial.length-1][0];
    return sum;
}
function countDistances() {
    var length = points.length
    dis = new Array(length);
    for(var i=0; i<length; i++) {
	dis[i] = new Array(length);
	for(var j=0; j<length; j++) {
	    dis[i][j] = distance(points[i], points[j]); 
	}
    }
}
function getCurrentBest() {
    var bestP = 0,
	currentBestValue = values[0];

    for(var i=1; i<population.length; i++) {
	if(values[i] < currentBestValue) {
	    currentBestValue = values[i];
	    bestP = i;
	}
    }
    return {
	  bestPosition : bestP
	, bestValue    : currentBestValue
    }
}
function seqCompare(a, b) {

}
