using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp7
{
    class MealFood: FoodItem
    {
        public override string ToString()
        {
            return "MealFood: " + base.ToString();
        }
    }

    class MilkFood: FoodItem
    {
        public override string ToString()
        {
            return "MilkFood: " + base.ToString();
        }
    }

    class CannedFood: FoodItem
    {
        public override string ToString()
        {
            return "CannedFood: " + base.ToString();
        }
    }

    class FruitsAndVegetablesFood: FoodItem
    {
        public override string ToString()
        {
            return "FruitsAndVegetablesFood: " + base.ToString();
        }
    }

    class PastriesFood: FoodItem
    {
        public override string ToString()
        {
            return "PastriesFood: " + base.ToString();
        }
    }
}
