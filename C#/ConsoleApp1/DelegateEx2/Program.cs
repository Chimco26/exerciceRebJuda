using System;
using System.Collections;
using System.Collections.Generic;

namespace DelegateEx2
{
    class Program
    {
        static void Main(string[] args)
        {
            CalculateDelegate AddAndSub = Calculate.Add;
            AddAndSub += Calculate.Sub;
            CalculateDelegate MultAndDiv = Calculate.Mult;
            MultAndDiv += Calculate.Div;
            CalculateDelegate JustAdd = Calculate.Add;
            CalculateDelegate JustSub = Calculate.Sub;
            

            while (true)
            {
                Console.WriteLine("please enter two numbers:");
                double num1 = double.Parse(Console.ReadLine());
                double num2 = double.Parse(Console.ReadLine());

                Console.WriteLine("please choose what do you want to do? 1 for add and sub; 2 for mult and div; 3 for only add; and 4 for only sub.");
                int choice = int.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1: AddAndSub(num1, num2);
                        Array results = AddAndSub.GetInvocationList();
                        foreach (CalculateDelegate res in results)
                        {
                            Console.WriteLine(res(num1, num2));
                        }

                        break;
                    case 2:
                        MultAndDiv(num1, num2);
                        break;
                    case 3:
                        JustAdd(num1, num2);
                        break;
                    case 4:
                        JustSub(num1, num2);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
