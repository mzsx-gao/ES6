//const声明一个只读的常量。一旦声明，常量的值就不能改变
/*
* 1.其声明的变量作用域与let一致
* 2.声明的是常量，一旦声明，不能改变其值
* 3.值是复杂类型，则值是可以改变的
* 4.必须在声明时赋初始值
* */
const num1 = 10;
// num1 = 20;


var nums1 = [1, 2, 3];
const nums2 = nums1;
nums1=[1,2];
console.log(nums2);//输出[1,2,3]

const nums3=[1,2,3];
const nums4=[1,2,3,...nums3,4,5,6];
console.log(nums4);

/*
* const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
* 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
* 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，
* 至于它指向的数据结构是不是可变的，就完全不能控制了
* */