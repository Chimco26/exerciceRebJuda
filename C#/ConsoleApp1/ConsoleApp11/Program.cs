using System;

namespace ConsoleApp11
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            int b;

            Console.WriteLine("Welcome to your calculator! To add press 1, to substract press 2, to multiply press 3, and to divide press 4.");
            int calculat = int.Parse(Console.ReadLine());
            Console.WriteLine("please choose your two numbers.");
            try
            {
                a = int.Parse(Console.ReadLine());
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                a = 0;
            }
            try
            {
                b = int.Parse(Console.ReadLine());
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                b = 0;
            }
            
            switch (calculat)
            {
                case 1: Add(a, b);
                    break;
                case 2: Substract(a, b);
                    break;
                case 3: Multiply(a, b);
                    break;
                case 4: try 
                    {
                        Divide(a, b);
                    }
                    catch(Exception e)
                    {
                        Console.WriteLine(e.Message);
                    }

                    break;
                default:
                    break;
            }
        }
        public static void Add(int a, int b)
        {
            Console.WriteLine(a + b);
        }
        public static void Substract(int a, int b)
        {
            Console.WriteLine(a - b);
        }
        public static void Multiply(int a, int b)
        {
            Console.WriteLine(a * b);
        }
        public static void Divide(int a, int b)
        {
            Console.WriteLine(a / b);
        }
    }
}
