/**
 * Created by simba on 23/4/17.
 */


// Class Class
function Class(assessments, target) {
    this.assessments = assessments;
    this.target = target;
}

Class.prototype.totalMarks = function() {
    var total = 0;
    for (i = 0; i < this.assessments.length; i++) {
        total += this.assessments[i].weight;
    }
    return total;
};

Class.prototype.getMarksEarned = function () {
    var total = 0;
    for (i = 0; i < this.assessments.length; i++) {
        total += this.assessments[i].getTotal();
    }
    return total;
};

Class.prototype.getMarksAvailable = function () {
    var total = 0;
    for (i = 0; i < this.assessments.length; i++) {
        total += this.assessments[i].getMarksAvailable();
    }
    return total;
};

Class.prototype.getMarksRequired = function () {
    var targetMarks = this.target * this.totalMarks();
    return targetMarks - this.getMarksEarned();
};

Class.prototype.getPercentageRequired = function () {
    return this.getMarksRequired() / this.getMarksAvailable() * 100;
};

module.exports = Class;
