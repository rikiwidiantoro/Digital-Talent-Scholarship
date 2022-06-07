class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Halo");
  }
  
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan method info
  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
    console.log(`Saya berusia ${this.getHumanAge()} tahun dalam umur manusia`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("Leo", 4);
dog.info();
