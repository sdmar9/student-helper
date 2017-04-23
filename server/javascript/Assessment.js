/**
 * Created by simba on 23/4/17.
 */

// Assessment Class
function Assessment(title, parts, weight) {
    this.title = title;
    this.parts = parts;
    this.weight = weight;
    this.entered = 0;
    this.marks = new Array(parts)

}

Assessment.prototype.enter = function (mark) {
    this.marks[this.entered] = mark;
    this.entered ++;

};

Assessment.prototype.getTotal = function () {
    if (this.entered > 0) {
        var sum = this.marks.splice(0,this.entered).reduce(function(acc, val) {
            return acc + val;
        }, 0);
        return sum / this.parts * this.weight
    } else {
        return 0
    }
};


Assessment.prototype.getMarksAvailable = function () {
    return this.weight * (this.parts - this.entered) / this.parts
};


module.exports = Assessment;