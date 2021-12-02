
// Item 1
let a = 10;
let b = 2;
if (a >= b) {
    console.log(`${a}`);
} else {
    console.log(`${b}`);
}

// Item 2
let x = 3;
let y = -7;
let z = 2;
if (x > 0 && y > 0 && z > 0) {
    console.log("This is sign of product '+'");
}else if (x < 0 && y > 0 && z > 0) {
    console.log("This is sign of product '+'");
}else if (x > 0 && y > 0 && z < 0) {
    console.log("This is sign of product '+'");
}else if (x > 0 && y < 0 && z > 0) {
    console.log("This is sign of product '-'");
}else {
    console.log("No one is sign of product'-'")
}

// Item 3
let c = 15;
let d = 1;
let e = 8;
if (c>d && c>e) {
    if (d>e) {
        console.log(`${c},${d},${e}`)
    }else {
        console.log(`${c},${e},${d}`)
    }
} else if (d>c && d>e) {
    if (c>e) {
        console.log(`${d},${c},${e}`)
    }else {
        console.log(`${d},${e},${c}`)
    }
} else if (e>c && e>d) {
    if (c>d) {
        console.log(`${e},${c},${d}`)
    }else {
        console.log(`${e},${d},${c}`)
    }
}
 
// Item 4
let j = -5;
let k = -2;
let l = -6;
let m = 0;
let n = -1;
if (j>k && j>l && j>m && j>n ) {
    console.log(j);
}else if (k>j && k>l && k>m && k>n ) {
    console.log(k);
}else if (l>j && l>k && l>m && l>n ) {
    console.log(l);
}else if (m>j && m>l && m>k && m>n ) {
    console.log(m);
}else {
    console.log(n);
}
