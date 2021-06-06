using System;
using System.Collections.Generic;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Item> listItems = new List<Item>();

            for (int i = 0; i < 100; i++)
            {
                listItems.Add(RandomItem());
            }
            foreach (Item item in listItems)
            {
                Sorter.Sort(item);
            }

            Console.WriteLine();
            Console.WriteLine("1. Appliances items: (" + Shop.appliancesItems.Count + ")");
            foreach (Item item in Shop.appliancesItems)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("2. Cooling items: (" + Shop.collingItems.Count + ")");
            foreach (Item item in Shop.collingItems)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("3. Dating items: (" + Shop.datingItems.Count + ")");
            foreach (Item item in Shop.datingItems)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("4. Fragile items: (" + Shop.fragileItems.Count + ")");
            foreach (Item item in Shop.fragileItems)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("there are " + Shop.appliancesItems.Count + " appliances items.");
            Console.WriteLine("there are " + Shop.collingItems.Count + " colling items.");
            Console.WriteLine("there are " + Shop.datingItems.Count + " dating items.");
            Console.WriteLine("there are " + Shop.fragileItems.Count + " fragile items.");
        }

        public static Item RandomItem()
        {
            int rnd = new Random().Next(1, 12);
            switch (rnd)
            {
                case 1:
                    return new DishesCleaner();
                case 2:
                    return new ClothesCleaner();
                case 3:
                    return new FlooringCleaner();
                case 4:
                    return new AppliancesItems();
                case 5:
                    return new BakingItem();
                case 6:
                    return new CleaningItem();
                case 7:
                    return new MealFood();
                case 8:
                    return new MilkFood();
                case 9:
                    return new CannedFood();
                case 10:
                    return new FruitsAndVegetablesFood();
                case 11:
                    return new PastriesFood();
                default:
                    return new PastriesFood();
            }
        }
    }
}
