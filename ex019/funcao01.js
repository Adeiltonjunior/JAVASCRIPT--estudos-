function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(parimpar(223)) // Ímpar!
console.log(parimpar(222)) // Par!

let res = parimpar(4)
console.log(res) // Par!