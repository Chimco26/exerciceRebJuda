using System;
using System.Collections.Generic;
using System.Linq;

namespace MyLinqEx
{
    class Program
    {
        static void Main(string[] args)
        {
            Item[] myItemList = new Item[]
                {
                new Item("Shampo", "Axe"),
                new Item("AfterShave", "Dov"),
                new Item("ShowerGel", "Coco"),
                new Item("poiu", "Axe"),
                new Item("Sabon", "Axe"),
                new Item("Cola", "Coco"),
                new Item("Kake", "Dov"),
                new Item("Bamba", "Axe"),
                new Item("gfdgds", "Axe"),
                new Item("Chips", "Dov"),
                new Item("asdf", "Dov"),
                new Item("Botnim", "Coco"),
                new Item("mkoiu", "Dov"),
                new Item("Shkedim", "Axe"),
                new Item("yutyu", "Axe"),
                new Item("Ola", "Dov"),
                new Item("tedads", "Axe"),
                new Item("gjkg", "Dov"),
                new Item("ykyj", "Coco"),
                new Item("sdfsd", "Axe"),
                new Item("xsw", "Axe"),
                new Item("gde", "Coco"),
                new Item("rtyr", "Dov"),
                new Item("5t5eye", "Axe"),
                new Item("iluuuj", "Axe"),
                new Item("hjkh", "Dov"),
                new Item("vfrvr", "Coco"),
                new Item("yyuyrr", "Axe"),
                new Item("asdsd", "Axe"),
                new Item("hynh", "Dov"),
                };
            Console.WriteLine("Choose a brand:");
            string choice = Console.ReadLine();
            var myLinq = from item in myItemList where item.Brand == choice orderby item.Name select item;

            foreach (var item in myLinq)
            {
                Console.WriteLine(item);
            }
        }
    }
}
