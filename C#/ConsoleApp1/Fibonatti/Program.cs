using System;

namespace Fibonatti
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { 1, 1, 2, 3, 5, 8, 13, 21, 34 };
            Fibonatti(arr, 0);
        }
        static void Fibonatti(int[] arr, int index)
        {
            if(index + 2 == arr.Length)
            {
                Console.WriteLine("YES!!!");
            }
            else if(arr[index] + arr[index + 1] == arr[index + 2])
            {
                Fibonatti(arr, index + 1);
            }
            else
            {
                Console.WriteLine(0);
            }
        }

    }
}
