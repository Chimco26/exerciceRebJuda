using System;
using System.Collections.Generic;
using System.Text;

namespace MyLinqEx
{
    class Item
    {
        public string Name { get; set; }
        public string Brand { get; set; }
        public int Price { get; set; }
        public int ID { get; set; }

        public Item(string name, string brand)
        {
            Name = name;
            Brand = brand;
            Price = new Random().Next(10, 50);
        }
        public override string ToString()
        {
            return Name + ". Brand: " + Brand + ". Price: " + Price + ".";
        }
    }
}
