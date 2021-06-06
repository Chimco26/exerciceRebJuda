using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    abstract class Item
    {
        private static int counter = 1;
        public int Counter = counter;
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private int price;

        public int Price
        {
            get { return price; }
            set { price = value; }
        }
        private string codeBar;

        public string CodeBar
        {
            get { return codeBar; }
            set { codeBar = value; }
        }
        private string description;

        public string Description
        {
            get { return description; }
            set { description = value; }
        }
        public Item()
        {
            counter++;
        }
        public override string ToString()
        {
            return Counter + "_ Hello! ";
        }

    }
}
