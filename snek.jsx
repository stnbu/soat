
let Segment = class Segment {
    constructor(position, is_head = false) {
        this.position = position;
        this.is_head = is_head;
    }
}

let Snake = class Snake {
    constructor(position) {
        this.body = [new Segment(position, true)];
        var i;
        for (i = 0; i <= 5; i++) {
            this.body.push(new Segment(position));
        }
    }
    move(delta) {
        var orig_position = this.body[0].position.slice(); // where head was.
        var i;
        // this is wonky and terrible
        var new_positions = [];
        for (i = 0; i <= 5; i++) {
            new_positions.push(this.body[i].position);
        }
        for (i = 1; i <= 5; i++) {
            this.body[i].position = new_positions[i-1].slice();
        }
        this.body[0].position = [orig_position[0]+delta[0], orig_position[1]+delta[1]];
    }
}

s = new Snake([0,0]);
s.move([0, 1]);
s.move([0, 1]);
s.move([0, 1]);
