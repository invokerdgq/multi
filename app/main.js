function test() {
    let a = {
        name:'少少',
        age:18,
        lvl:20,
        wife:true
    };
   return Object.keys(a).reduce((pre,value) => {
        pre.push(a[value]);
        return pre
    },[])
}
let data = test();
console.log(data)

