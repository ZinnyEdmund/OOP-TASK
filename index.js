  class FoodItem {
    //static properties
    static categories = ['Breakfast', 'Lunch', 'Dinner', 'Drink'];
    static totalItems = 0;

    //constructor
    constructor(name, price, category){
         this.id = ++FoodItem.totalItems; //it increases the food items automatically
            this.name = name;
            this.price = price;
            this.category = category;
            this.isAvailable = true;
    }
    //To check if the price is valid
    static isValidPrice(price){
        return price > 0 &&  price <= 100;
    }

    //Method used to update price
    updatePrice(newPrice){
        if (FoodItem.isValidPrice(newPrice)){
            this.price = newPrice;
             return true;
        }
        else{
            return false;
        }
    }

    toggleAvailable(){
        this.isAvailable = !this.isAvailable;
    }
  }

  //Order claas for managing food orders
  class Order {
    static itemsCount = 0;
    static status = ['Pending..', 'Prepring..', 'Ready!', 'Delivered!'];

    constructor (){
        this.Order = ++Order.itemsCount;
        this.items = [];
        this.status = 'Pending...';
        this.total = 0;
    }

    //Adding new item
    addItem(foodItem){
        if (foodItem.isAvailable){
            this.items.push(foodItem);
            this.calculateTotal();
            return true;
        }
        else{
            return false;
        }
    }

    //removing items form order
    removeItem(foodItem){
        const index = this.items.indexOf(foodItem);
        if (index > -1) {
            this.items.splice(index, 1);
            this.calculateTotal();
            return true;
        }
        else{
            return false;
        }
    }

    //Calculating the total price of the item
    calculateTotal(){
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    }

    //Updating the order status
    updateStatus(newStatus){
        if (Order.status.includes(newStatus)) {
            this.status = newStatus;
            return true;
        }
        else{
            return false;
        }
    }

  }

  //Examples
  const cake = new FoodItem("Chocolate Cake", 29.68, "Lunch");
  const juice = new FoodItem("Orange Juice", 29.68, "Drink");
  const pizza = new FoodItem("Margheritta Pizza", 29.68, "Dinner");

  const order1 = new Order();
  order1.addItem(cake);
  order1.addItem(pizza);
  order1.addItem(juice);

  console.log(juice);
  console.log(pizza);
  console.log(cake);
  console.log("Total:", order1.total);
  console.log("Status:", order1.status);

order1.updateStatus('Ready!');
console.log("Status:", order1.status);

cake.updatePrice(21.88);
console.log("Price:", cake.price);

cake.toggleAvailable();
console.log()