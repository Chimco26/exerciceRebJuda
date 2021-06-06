using System;
using System.Collections.Generic;
using System.Text;
using ConsoleApp6;

namespace ConsoleApp7
{
    abstract class FoodItem: Item, IDate, ICooling
    {
        public string messageFridge = "";
        private Date lastDate;

        public Date LastDate
        {
            get { return lastDate; }
            set { lastDate = value; }
        }
        private bool cooling = new Random().Next(2) == 0;

        public bool Cooling
        {
            get { return cooling; }
            set { cooling = value; }
        }
        public int MinCool 
        {
            get { return new Random().Next(5); } 
        }
        public int MaxCool 
        {
            get { return new Random().Next(5, 10); }
        }

        public int Fridge 
        {
            get { return new Random().Next(3, 10); }
        }

        public override string ToString()
        {
            if (cooling)
            {
                return base.ToString() + "This product need cooling! " + messageFridge;
            }
            else return base.ToString() + "Be quiet, this product don't need cooling. ";
        }
    }
}
